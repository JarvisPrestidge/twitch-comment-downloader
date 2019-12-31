import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import C from "./constants";
import { ITwitchComment, ITwitchCommentResponse } from "./interfaces/twitch/comment";
import { Result } from "./interfaces/common/result";

/**
 * Responsible for handling interaction with Twitch comment APIs
 *
 * @export
 * @class TwitchCommentDownloader
 */
export class TwitchCommentDownloader {

    private readonly clientId: string;

    constructor(clientId: string) {
        if (!clientId) {
            throw new Error("constructor requires client id parameter");
        }
        this.clientId = clientId;
    }

    /**
     * Returns all comments for a given vod id
     *
     * @param {string} vodId
     * @returns {Promise<ITwitchComment[]>}
     */
    public async getComments(vodId: string): Promise<ITwitchComment[]> {

        const allComments: ITwitchComment[] = [];

        let cursor: string | undefined;

        do {
            const commentsMaybe = await this.getCommentsChunk(vodId, cursor);

            if (!commentsMaybe.success) {
                throw new Error(commentsMaybe.reason);
            }

            const { comments, _next } = commentsMaybe.result;

            allComments.push(...comments);

            cursor = _next;

        } while (cursor)

        return allComments;
    };


    /**
     * Get comments for a given vod
     *
     * @static
     * @param {string} vodId
     * @param {string} [cursor]
     * @returns {Promise<Result<ITwitchCommentResponse>>}
     */
    private async getCommentsChunk(vodId: string, cursor?: string): Promise<Result<ITwitchCommentResponse>> {

        const url = cursor
            ? `${C.TWITCH_API_BASE}/videos/${vodId}/comments?cursor=${cursor}`
            : `${C.TWITCH_API_BASE}/videos/${vodId}/comments?content_offset_seconds=0`;

        const method = "GET";

        const headers = {
            "client-id": this.clientId,
            "content-type": "application/json; charset=UTF-8",
            "accept": "application/vnd.twitchtv.v5+json; charset=UTF-8",
            "accept-encoding": "gzip, deflate, br"
        };

        const config: AxiosRequestConfig = {
            url,
            headers,
            method
        };

        let response: AxiosResponse<ITwitchCommentResponse>;

        try {
            response = await axios(config);
        } catch (error) {

            console.error(`[TWITCH] [GET-COMMENTS] request failed: ${error.message}`);

            if (error.response && error.response.data) {
                console.error("[TWITCH] [GET-COMMENTS] error response payload", error.response.data);
            }

            return {
                success: false,
                reason: error
            };
        }

        const payload = response.data;

        return {
            success: true,
            result: payload
        }
    };
}

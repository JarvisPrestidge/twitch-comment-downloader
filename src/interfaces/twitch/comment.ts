/**
 * Represents a top-level response from the twitch comments api
 *
 * @export
 * @interface ITwitchCommentResponse
 */
export interface ITwitchCommentResponse {
    comments: ITwitchComment[];
    _next: string;
}

/**
 * Represents a single twitch comment
 *
 * @export
 * @interface ITwitchComment
 */
export interface ITwitchComment {
    _id: string;
    created_at: string;
    updated_at: string;
    channel_id: string;
    content_type: string;
    content_id: string;
    content_offset_seconds: number;
    source: string;
    state: string;
    message: {
        body: string;
        fragments: [
            {
                text: string;
                emoticon?: {
                    emoticon_id: string;
                    emoticon_set_id: string;
                };
            }
        ];
        is_action: boolean;
        user_badges?: [
            {
                _id: string;
                version: string;
            }
        ];
        user_color?: string;
        user_notice_params: {
            "msg-id"?: string;
            "msg-param-cumulative-months"?: string;
            "msg-param-months"?: string;
            "msg-param-should-share-streak"?: string;
            "msg-param-sub-plan"?: string;
            "msg-param-sub-plan-name"?: string;
        };
        emoticons?: [
            {
                _id: string;
                begin: number;
                end: number;
            }
        ];
    };
    commenter: {
        display_name: string;
        _id: string;
        name: string;
        type: string;
        bio: null | string;
        created_at: string;
        updated_at: string;
        logo: string;
    };
}

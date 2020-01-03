import { TwitchCommentDownloader } from "../../src/index";

const vodId = "524487996";

const clientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";

const main = async (): Promise<void> => {

    // Instantiate twitch comment downloader
    const twitchCommentDownloader = new TwitchCommentDownloader(clientId);
    // Get all comments for a given vod id
    const comments = await twitchCommentDownloader.getComments(vodId);

    // Do something with the results
    for (const comment of comments) {
        const timestamp = new Date(comment.created_at).toISOString();
        const commenter = comment.commenter.display_name;
        const message = comment.message.body;
        console.log(`[${timestamp}] @${commenter} - ${message}`);
    }

    console.log(`Done fetching ${comments.length} comments from vod id: ${vodId}`);
};

main().catch((err) => console.error(err));

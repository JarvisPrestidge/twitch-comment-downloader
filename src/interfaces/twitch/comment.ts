export interface ITwitchCommentResponse {
    comments: ITwitchComment[];
    _next: string;
}

export interface ITwitchComment {
    _id:                    string;
    created_at:             string;
    updated_at:             string;
    channel_id:             string;
    content_type:           string;
    content_id:             string;
    content_offset_seconds: number;
    source:                 string;
    state:                  string;
    message:                Message;
    commenter:              ITwitchCommenter;
}

export interface ITwitchCommenter {
    display_name: string;
    _id:          string;
    name:         string;
    type:         string;
    bio:          null | string;
    created_at:   string;
    updated_at:   string;
    logo:         string;
}

export interface Message {
    body:               string;
    fragments:          Fragment[];
    is_action:          boolean;
    user_badges?:       UserBadge[];
    user_color?:        string;
    user_notice_params: UserNoticeParams;
    emoticons?:         EmoticonElement[];
}

export interface EmoticonElement {
    _id:   string;
    begin: number;
    end:   number;
}

export interface Fragment {
    text:      string;
    emoticon?: FragmentEmoticon;
}

export interface FragmentEmoticon {
    emoticon_id:     string;
    emoticon_set_id: string;
}

export interface UserBadge {
    _id:     string;
    version: string;
}

export interface UserNoticeParams {
    "msg-id"?:                        string;
    "msg-param-cumulative-months"?:   string;
    "msg-param-months"?:              string;
    "msg-param-should-share-streak"?: string;
    "msg-param-sub-plan"?:            string;
    "msg-param-sub-plan-name"?:       string;
}

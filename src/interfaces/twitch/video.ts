export interface ITwitchVideoResponse {
    data:       ITwitchVideo[];
    pagination: Pagination;
}

export interface ITwitchVideo {
    id:            string;
    user_id:       string;
    user_name:     string;
    title:         string;
    description:   string;
    created_at:    string;
    published_at:  string;
    url:           string;
    thumbnail_url: string;
    viewable:      string;
    view_count:    number;
    language:      string;
    type:          string;
    duration:      string;
}

export interface Pagination {
    cursor: string;
}

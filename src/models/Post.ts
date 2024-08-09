export interface Post {
    id: number;
    date: Date;
    date_gmt: Date;
    slug: string;
    status: 'publish';
    type: 'post';
    author: number;
    title: PostText;
    content: PostText;
    excerpt: PostText;
    "_links": {
        self?: PostLink[];
        collection?: PostLink[];
        about?: PostLink[];
        author?: PostLink[];
        replies?: PostLink[];
        'version-history'?: PostLink[];
        'wp:attachment'?: PostLink[];
        'wp:term'?: PostLink[];
        curies?: PostLink[];
    }
}

export interface PostText {
    rendered: string;
    protected?: boolean;
}

export interface PostLink {
    embeddable: boolean;
    href: string;
    count: number;
    taxonomy: string;
    templated: boolean;
}
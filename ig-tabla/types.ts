
export interface IPost{
    userId: string;
    id: string;
    title: string;
    body: string;
}

export interface IRequestPosts extends Event{
    readonly detail: IPost[];
}

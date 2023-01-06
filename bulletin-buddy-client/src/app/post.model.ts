export class Post {
    public id: string;
    public title: string;
    public body: string;
    public publisherEmail: string;
    public type: PostType;
}

export enum PostType
{
  OFFER,
  REQUEST,
};

export const PostType2LabelMapping: Record<string, PostType> = {
  ["OFFER"]: PostType.OFFER,
  ["REQUEST"]: PostType.REQUEST
};


export interface Article {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  launches: LaunchEvent[];
  events: LaunchEvent[];
}

type LaunchEvent = {
  id: string;
  provider: string;
};

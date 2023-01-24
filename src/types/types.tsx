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
export interface FilterArticles extends Article {
  weight: number;
}

type LaunchEvent = {
  id: string;
  provider: string;
};

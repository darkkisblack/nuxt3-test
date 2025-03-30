export interface Article {
  id: string;
  title: string;
  preview: string;
  image: string;
  createdAt: string;
  description: string;
}

export type ArticlesResponse = Article[];
export type ArticleDetails = Article; 
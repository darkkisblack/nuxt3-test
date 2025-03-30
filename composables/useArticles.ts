import type { ArticleDetails, ArticlesResponse } from '@/types/article';

export const useArticles = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase;

  const getArticles = async (page: number = 1): Promise<ArticlesResponse> => {
    try {
      const { data } = await useFetch<ArticlesResponse>(`${baseURL}/articles`, {
        params: { page }
      });
      return data.value as ArticlesResponse;
    } catch (error) {
      console.error('Error fetching articles:', error);
      throw error;
    }
  };

  const getArticle = async (id: number): Promise<ArticleDetails> => {
    try {
      const { data } = await useFetch<ArticleDetails>(`${baseURL}/articles/${id}`);
      return data.value as ArticleDetails;
    } catch (error) {
      console.error('Error fetching article:', error);
      throw error;
    }
  };

  return {
    getArticles,
    getArticle
  };
}; 
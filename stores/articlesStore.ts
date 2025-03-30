import { defineStore } from 'pinia';
import type { Article, ArticleDetails } from '@/types/article';
import { useImage } from '#imports';

interface ImageLoadingState {
  isLoading: boolean;
  error: string | null;
}

const PLACEHOLDER_IMAGE = 'https://placehold.co/373x280';
const PLACEHOLDER_IMAGE_DETAILS = 'https://placehold.co/1216x700';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [] as Article[],
    currentArticle: null as Article | null,
    currentPage: 1,
    itemsPerPage: 8,
    totalItems: 0,
    isLoading: false,
    error: null as string | null,
    imageLoadingStates: new Map<string, ImageLoadingState>()
  }),

  getters: {
    totalPages(): number {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    hasNextPage(): boolean {
      return this.currentPage < this.totalPages;
    },
    hasPrevPage(): boolean {
      return this.currentPage > 1;
    }
  },

  actions: {
    async fetchArticles(page: number = 1) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const config = useRuntimeConfig();
        const response = await $fetch<Article[]>(`${config.public.apiBase}/posts`, {
          params: {
            page,
            limit: this.itemsPerPage
          }
        });
        
        if (!response) {
          throw new Error('Error fetching articles');
        }

        this.articles = response.map(article => ({
          ...article,
          image: PLACEHOLDER_IMAGE // ссылки из api не рабочие, поэтому используется placeholder
        }));
        
        this.currentPage = page;
        this.totalItems = 24;

        try {
          await this.preloadImage(PLACEHOLDER_IMAGE);
        } catch (error) {
          console.error('Failed to preload image:', error);
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        this.error = `Error fetching articles: ${errorMessage}`;
        console.error('Error fetching articles:', error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchArticleById(id: string) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const config = useRuntimeConfig();
        const response = await $fetch<ArticleDetails>(`${config.public.apiBase}/posts/${id}`);
        
        this.currentArticle = {
          ...response,
          image: PLACEHOLDER_IMAGE_DETAILS
        };

        try {
          await this.preloadImage(PLACEHOLDER_IMAGE_DETAILS);
        } catch (error) {
          console.error('Failed to preload image:', error);
        }
      } catch (error) {
        this.error = 'Failed to fetch article';
        console.error('Error fetching article:', error);
      } finally {
        this.isLoading = false;
      }
    },

    async preloadImage(imageUrl: string): Promise<void> {
      if (!imageUrl) return;
      
      const currentState = this.imageLoadingStates.get(imageUrl);
      if (currentState?.isLoading) return;

      this.imageLoadingStates.set(imageUrl, { isLoading: true, error: null });

      try {
        const { preload } = useImage();
        preload(imageUrl, {
          format: 'webp',
          quality: 80,
          loading: 'lazy',
          sizes: imageUrl === PLACEHOLDER_IMAGE ? '373px' : '1216px'
        });
        this.imageLoadingStates.set(imageUrl, { isLoading: false, error: null });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to load image';
        this.imageLoadingStates.set(imageUrl, { 
          isLoading: false, 
          error: errorMessage 
        });
      }
    },

    setPage(page: number) {
      if (page !== this.currentPage && page > 0 && page <= this.totalPages) {
        this.fetchArticles(page);
      }
    },

    nextPage() {
      if (this.hasNextPage) {
        this.setPage(this.currentPage + 1);
      }
    },

    prevPage() {
      if (this.hasPrevPage) {
        this.setPage(this.currentPage - 1);
      }
    },

    isImageLoaded(imageUrl: string): boolean {
      const state = this.imageLoadingStates.get(imageUrl);
      return state ? !state.isLoading && !state.error : false;
    },

    getImageError(imageUrl: string): string | null {
      return this.imageLoadingStates.get(imageUrl)?.error || null;
    }
  }
});

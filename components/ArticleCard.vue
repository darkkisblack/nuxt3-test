<template>
  <NuxtLink 
    :to="`/articles/${article.id}`" 
    class="article-card"
    @mouseenter="showReadMore = true"
    @mouseleave="showReadMore = false"
  >
    <div class="article-card__image">
      <NuxtImg
        :src="article.image"
        :alt="article.title"
        loading="lazy"
        fit="cover"
        width="373"
        height="280"
        class="article-card__img"
        :fallback="'@/assets/images/placeholder.png'"
        sizes="373px"
        @error="handleImageError"
      />
      <div
        v-if="isImageError"
        class="article-card__error"
      >
        Failed to load image
      </div>
    </div>
    <div class="article-card__content">
      <p class="article-card__description">{{ article.preview }}</p>
    </div>
    <div class="article-card__read-more">
      <NuxtLink 
        v-show="showReadMore" 
        :to="`/articles/${article.id}`"
        class="article-card__read-more-link"
      >
        Read more
      </NuxtLink>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '@/types/article';
import { useArticlesStore } from '@/stores/articlesStore';

const props = defineProps<{
  article: Article
}>();

const store = useArticlesStore();
const showReadMore = ref(false);
const isImageError = ref(false);

const handleImageError = () => {
  isImageError.value = true;
  store.getImageError(props.article.image);
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.article-card {
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
  height: 100%;
  background: $color-white;
  border-radius: 8px;
  overflow: hidden;
  padding-top: 20px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-20px);
    z-index: 2;
  }

  &__image {
    position: relative;
    overflow: hidden;
    margin-bottom: 24px;
    width: 100%;
    aspect-ratio: 373/280;
    background: #f5f5f5;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
  }

  &__error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-red;
    font-size: 14px;
    text-align: center;
  }

  &:hover &__img {
    transform: scale(1.05);
  }

  &__content {
    height: 74px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10;
    padding: 0px 16px 0px 0px;
    color: $text-color;
    font-size: 20px;
    font-weight: $font-weight-regular;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 12px;
  }

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__read-more {
    height: 24px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.3s, opacity 0.3s;
    color: $color-purple-light;
    font-size: 20px;
    font-weight: 400;
    line-height: 120%;
  }

  &:hover &__read-more {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
}
</style>

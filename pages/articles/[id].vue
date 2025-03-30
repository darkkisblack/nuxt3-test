<template>
  <div class="container">
    <div
      v-if="!store.isLoading && store.currentArticle"
      class="article"
    >
      <h1 class="article__title">{{ store.currentArticle.title }}</h1>
      
      <div class="article__image">
        <img
          :src="store.currentArticle.image"
          :alt="store.currentArticle.title"
        >
      </div>

      <div
        v-if="store.currentArticle"
        class="article__content"
      >
        <div class="article__about">About</div>
        <div class="article__description">
          {{ store.currentArticle.description }}
        </div>
      </div>
    </div>

    <div
      v-else-if="store.isLoading"
      class="article__loading"
    >
      Loading...
    </div>

    <div
      v-else-if="store.error"
      class="article__error"
    >
      {{ store.error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '~/stores/articlesStore';

const route = useRoute();
const store = useArticlesStore();

onMounted(async () => {
  if (route.params.id) {
    await store.fetchArticleById(route.params.id as string);
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.article {
  margin: 119px 120px 80px 120px;

  &__title {
    font-weight: $font-weight-regular;
    margin-bottom: 73px;
    color: $color-black;
    font-size: 84px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
  }

  &__image {
    margin-bottom: 80px;
    width: 100%;
    aspect-ratio: 1216/700;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  &__about {
    color: $color-black;
    font-size: 16px;
    font-weight: $font-weight-regular;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 32px;
  }

  &__description {
    position: static;
    width: 695px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32;
    padding: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 32px 0px;
    color: $text-color;
    font-family: TT Commons;
    font-size: 36px;
    font-weight: 400;
    line-height: 124%;
    letter-spacing: 0%;
    text-align: left;
  }

  &__date {
    font-size: 14px;
    color: rgba($color-black, 0.6);
  }

  &__loading,
  &__error {
    text-align: center;
    padding: 60px 0;
    font-size: 18px;
  }

  &__error {
    color: red;
  }
}
</style>

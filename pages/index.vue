<template>
  <main>
    <div class="container">
      <section class="articles">
        <h1 class="articles__title">Articles</h1>
        
        <div
          v-if="!store.isLoading"
          class="grid"
        >
          <ArticleCard
            v-for="article in store.articles"
            :key="article.id"
            :article="article"
          />
        </div>

        <div
          v-else
          class="articles__loading"
        >
          Loading...
        </div>

        <div
          v-if="store.error"
          class="articles__error"
        >
          {{ store.error }}
        </div>

        <VPagination
          v-if="store.totalPages > 1"
          class="articles__pagination"
          :currentPage="store.currentPage"
          :totalPages="store.totalPages"
          @update:page="store.setPage"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useArticlesStore } from '~/stores/articlesStore';
import VPagination from '@/components/ui/VPagination.vue';

const store = useArticlesStore();

onMounted(() => {
  store.fetchArticles();
});
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.articles {
  margin-top: 120px;
  margin-left: 112px;
  margin-right: 112px;

  &__title {
    margin-bottom: 39px;
    color: $color-black;
    font-size: 84px;
    font-weight: $font-weight-regular;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: left;
  }

  &__loading {
    text-align: center;
    padding: 40px;
    font-size: 18px;
    color: $text-color;
  }

  &__error {
    text-align: center;
    padding: 20px;
    color: red;
    font-size: 16px;
  }

  &__pagination {
    margin-top: 40px;
    margin-bottom: 140px;
  }
}
</style>

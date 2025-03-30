<template>
  <div class="pagination">
    <VButton 
      v-for="page in totalPages" 
      :key="page"
      :active="page === currentPage"
      @click="changePage(page)"
    >
      {{ page }}
    </VButton>
    <VButton
      v-if="currentPage < totalPages"
      outline
      @click="changePage(currentPage + 1)"
    >
      <VVectorIcon />
    </VButton>
  </div>
</template>

<script setup lang="ts">
import VVectorIcon from '@/components/icons/VVectorIcon.vue';
import VButton from '@/components/ui/VButton.vue';

defineProps<{
  currentPage: number
  totalPages: number
}>();

const emit = defineEmits<{
  (e: 'update:page', page: number): void
}>();

const changePage = (page: number) => {
  emit('update:page', page);
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
}
</style>

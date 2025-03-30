<template>
  <button 
    class="circle-button"
    :style="{ '--button-color': color || 'rgb(16, 16, 16)' }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  color?: string
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.circle-button {
  position: static;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background-color: var(--button-color, $color-black);

  ::slotted(svg) {
    width: 16px;
    height: 16px;
    color: $color-white;
  }

  &:hover {
    background-color: $color-dark;
    transition: background-color 0.3s ease;
  }
}
</style>

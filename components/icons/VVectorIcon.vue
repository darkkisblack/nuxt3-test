<template>
  <span
    class="v-icon"
    :class="{ 'v-icon--rotate': rotate }"
  >
    <svg 
      width="6.302734" 
      height="11.304688" 
      viewBox="0 0 6.30273 11.3047" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0.65 0.65L5.65 5.65L0.65 10.65" 
        stroke="currentColor" 
        stroke-width="1.3" 
        stroke-linejoin="round" 
        stroke-linecap="round"
      />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  rotate?: boolean
}>();
</script>

<style lang="scss" scoped>
.v-icon {
  position: relative;
  display: inline-flex;
  width: 6.302734px;
  height: 11.304688px;

  &--rotate {
    transform: rotate(180deg);
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>

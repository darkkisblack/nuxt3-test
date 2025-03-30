<template>
  <button 
    :class="['v-button', { 'v-button--active': active, 'v-button--outline': outline }]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
  outline?: boolean
}>();
</script>

<style lang="scss" scoped>
.v-button {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: #101010;
  background: rgb(243, 243, 243);
  box-sizing: border-box;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: rgb(232, 232, 232);
    border-color: rgb(232, 232, 232);
  }

  &--active {
    background: rgb(16, 16, 16);
    color: white;
    border-color: transparent;

    &:hover {
      background: rgb(16, 16, 16);
      border-color: transparent;
    }
  }

  &--outline {
    box-sizing: border-box;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 12px;
    background: transparent;
    color: rgb(16, 16, 16);

    &:hover {
      box-sizing: border-box;
      border: 1px solid rgb(232, 232, 232);
      border-radius: 12px;
      background: rgb(232, 232, 232);   
    }
  }
}
</style>

<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <NuxtLink
          to="/"
          class="header__logo"
        >
          QTIM
        </NuxtLink>
        <div class="header__menu">
          <NuxtLink
            to="/"
            class="header__link"
          >Works</NuxtLink>
          <NuxtLink
            to="/"
            class="header__link"
          >About</NuxtLink>
          <button class="header__language">
            <VEngIcon />
          </button>
          <button class="header__button">
            Let's work
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import VEngIcon from '@/components/icons/VEngIcon.vue';
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;
@use '@/assets/scss/mixins' as *;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 121px;
  
  .container {
    width: 100%;
    padding: 0 40px;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 24px;
    font-weight: $font-weight-medium;
    color: $primary-color;
  }

  &__menu {
    display: flex;
    align-items: center;
  }

  &__link {
    color: $color-black;
    font-size: 20px;
    font-weight: 400;
    line-height: 100%;
    transition: opacity 0.3s ease;
    margin-right: 58px;

    &__link:last-child {
      margin-right: 91px;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__language {
    position: static;
    width: 52px;
    height: 52px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10;
    padding: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-left: 33px;
    margin-right: 16px;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 999px;
    background: transparent;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &__button {
    padding: 12px 24px;
    background-color: $primary-color;
    color: $background-color;
    border: none;
    border-radius: 4px;
    font-weight: $font-weight-medium;
    cursor: pointer;
    transition: opacity 0.3s ease;

    border-radius: 999px;
    background: $color-black;
    position: static;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10;
    padding: 16px 32px;
    color: $color-white;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 0%;
    flex: none;
    order: 1;
    flex-grow: 0;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use '@/assets/scss/variables' as *;

html {
  font-family: 'TT Commons', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: $text-color;
  background-color: $background-color;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  font-family: inherit;
}
</style>

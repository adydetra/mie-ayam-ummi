<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · Mie Ayam Ummi` : 'Mie Ayam Ummi';
  },
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
});

useSeoMeta({
  description: 'Mie Ayam Ummi',
  twitterCard: 'summary_large_image',
});

const ogImageOptions = {
  component: 'OpenGraph',
};
</script>

<template>
  <main id="top" min-h-dvh>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#FAF6C7 0%,#ECC223 50%,#7E4D15 100%)" />
    <NuxtPage />
    <AppNav />
  </main>
  <OgImage v-bind="ogImageOptions" />
</template>

<style lang="postcss">
* {
  @apply font-sans;
}
:root {
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #ffffff;
}
html {
  @apply scroll-smooth;
}
html.dark {
  scrollbar-color: #1b1b1b #050505;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}
::-webkit-scrollbar-thumb:active {
  background-color: #ffffff;
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: #1b1b1b;
}
html.dark ::-webkit-scrollbar-thumb:active {
  background-color: rgb(41, 41, 41);
}
html.dark ::-webkit-scrollbar {
  background-color: #050505;
}
body {
  @apply bg-white dark:bg-black m-0 transition-colors ease-in-out duration-300;
}
.dark {
  color-scheme: dark;
}
a {
  @apply !no-underline text-black dark:text-white;
}
</style>

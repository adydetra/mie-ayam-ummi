<script setup lang="ts">
const route = useRouteActive();
const nav = [
  { icon: 'i-mingcute:home-4-line', label: 'Beranda', to: '/' },
  { icon: 'i-mingcute:tree-3-line', label: 'Tentang Kami', to: '/tentang-kami' },
];
</script>

<template>
  <nav fixed bottom-0 z-10 w-full flex items-center justify-evenly border border-gray-200 border-t-solid bg-white py-2.5 md:hidden dark:border-gray-900 dark:bg-black>
    <NuxtLink
      v-for="(navs, index) in nav"
      :key="index"
      :to="navs.to"
      :class="{
        'text-yellow-600 dark:text-yellow-200': route(navs.to),
      }"
      flexcenter flex-col text-gray-400
    >
      <div :class="navs.icon" text-lg />
      <span class="mt-1 text-[0.65rem]">{{ navs.label }}</span>
    </NuxtLink>
  </nav>
</template>

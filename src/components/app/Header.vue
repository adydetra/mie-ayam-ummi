<script setup lang="ts">
const route = useRouteActive();
const nav = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
];
</script>

<template>
  <header class="mx-auto flexbetween py-6">
    <NuxtLink to="/" text-xl font-bold>
      <NuxtImg src="/logo.png" alt="" class="size-14" />
    </NuxtLink>
    <div class="hidden items-center gap-8 text-sm md:flex">
      <NuxtLink
        v-for="(navs, index) in nav" :key="index"
        :to="navs.to"
        :class="{
          'bg-gray-100 dark:bg-gray-900 px-3.5 py-1.5 rounded-full !opacity-100 transition-colors ease-in-out duration-300': route(navs.to),
        }"
        class="link px-3.5 opacity-80 transition hover:opacity-100"
      >
        {{ navs.label }}
      </NuxtLink>
    </div>
    <div class="flex items-center gap-2">
      <AppSearch />
      <AppColorMode />
    </div>
  </header>
</template>

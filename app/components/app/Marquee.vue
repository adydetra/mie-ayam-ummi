<script setup lang="ts">
const colorMode = useColorMode();
const langs = [
  { icon: 'i-simple-icons:html5', to: '' },
  { icon: 'i-simple-icons:css3', to: '' },
  { icon: 'i-simple-icons:javascript', to: '' },
  { icon: 'i-simple-icons:typescript', to: '' },
  { icon: 'i-simple-icons:tailwindcss', to: '' },
  { icon: 'i-simple-icons:unocss', to: '' },
  { icon: 'i-simple-icons:vuedotjs', to: '' },
  { icon: 'i-simple-icons:nuxtdotjs', to: '' },
  { icon: 'i-simple-icons:vite', to: '' },
  { icon: 'i-simple-icons:vitest', to: '' },
];
</script>

<template>
  <Vue3Marquee :pause-on-hover="true" :clone="true" :duration="50" :gradient="true" :gradient-color="colorMode.value === 'light' ? [255, 255, 255] : [0, 0, 0]" gradient-length="10%">
    <NuxtLink v-for="(lang, index) in langs" :key="index" class="mb-12 mt-16 flex lg:mb-28 lg:mt-12">
      <div :class="`${lang.icon} text-4xl opacity-20 transition-opacity duration-500 ease-in-out lg:text-5xl hover:opacity-60`" />
    </NuxtLink>
  </Vue3Marquee>
</template>

<style lang="postcss">
.marquee {
  @apply ml-20 space-x-20;
}
</style>

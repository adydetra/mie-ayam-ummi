<script setup lang="ts">
const product = [
  { title: 'KOMPLET', grid: '!col-span-2', imgSize: 'md:size-40', desc: '(pangsit basah & goreng, bakso, ceker)', price: '18.000' },
  { title: 'PAKET 1', desc: '(pangsit basah & goreng, bakso)', price: '15.000' },
  { title: 'PAKET 2', desc: '(pangsit basah & goreng, ceker)', price: '15.000' },
  { title: 'PAKET 3', desc: '(pangsit goreng, bakso, ceker)', price: '15.000' },
  { title: 'PAKET 4', price: '10.000' },
];
</script>

<template>
  <section grid justify-center gap-8 py-12 md:grid-cols-2>
    <div
      v-for="(products, index) in product" :key="index" :aria-label="products.title" :class="products.grid"
      col-span-2 flex items-center border border-gray-100 rounded-xl border-solid px-2 py-4 transition-colors duration-300 ease-in-out md:col-span-1 space-x-4 dark:border-gray-900
    >
      <NuxtImg src="/photo.png" alt="" :class="products.imgSize" size-20 />
      <div>
        <h1 mb-4 mt-0>
          # {{ products.title }}
        </h1>
        <p>
          Rp{{ products.price }}
        </p>
        <p mb-0 text-xs>
          {{ products.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

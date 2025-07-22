<template>
  <section mx-auto max-w-2xl px-5 pb-26 lg:px-0 md:px-12 md:pb-0>
    <AppHeader />
    <article mx-auto max-w-xl leading-loose>
      <h1 md:mb-12 md:text-3xl>
        Tentang Kami - Mie Ayam Ummi
      </h1>
      <p>
        Selamat datang di Mie Ayam Ummi, tempat di mana kelezatan bertemu dengan keterjangkauan. Kami adalah sebuah warung mie ayam yang berdiri di depan rusunawa karang anyar.
      </p>
      <p>
        Kami menyajikan mie ayam dengan cita rasa otentik dari resep tradisional. Mie kami tidak hanya lezat, tetapi juga dihargai dengan harga yang ramah di kantong. Kami percaya bahwa kelezatan sejati tidak harus mahal.
      </p>
      <p>
        Komitmen kami terletak pada kualitas bahan baku terbaik, hasil masakan yang segar, dan pelayanan yang ramah. Kami berdedikasi untuk memberikan pengalaman kuliner yang memuaskan setiap pelanggan.
      </p>
      <p>
        Kami berharap Mie Ayam Ummi menjadi tempat favorit Anda untuk menikmati sajian mie ayam yang autentik, hangat, dan menggugah selera.
      </p>
      <p>
        Mari bersama-sama merayakan kelezatan yang sesungguhnya, di mana setiap kunjungan adalah perjalanan rasa yang menggembirakan. Terima kasih telah memilih Mie Ayam Ummi, dan kepuasan Anda adalah prioritas utama kami.
      </p>
      <div mb-12 flex items-center md:mb-6>
        <div class="i-mingcute:location-2-line" size-6 />
        <NuxtLink
          to="https://maps.app.goo.gl/bLujm64cLyTSniqE7" target="_blank"
          transition="border-color colors duration-500 ease-in-out"
          border="border b b-solid gray-200 dark:gray-800 hover:gray-400 dark:hover:gray-600"
          mx-3 border-gray-200 border-b-solid pb-0.5 no-underline
        >
          Alamat (Google Maps)
        </NuxtLink>
        <div class="i-mingcute:arrow-right-up-fill size-2.5 opacity-50 -ml-2.2 -mt-4 dark:text-gray-400" />
      </div>
      <span flexcenter gap-3>-<div class="i-fxemoji:steamingbowl hover:i-fxemoji:smiletongue" />-</span>
    </article>
    <LazyAppFooter />
  </section>
</template>

<style scoped lang="postcss">
p {
  @apply text-gray-400
}
</style>

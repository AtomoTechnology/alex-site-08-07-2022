<script setup>
import AppButton from '@/components/AppButton.vue';
import BrandHeader from '@/components/BrandHeader.vue';
import Navbar from '@/components/Navbar.vue';
</script>
<template>
  <header class="">
    <section
      class="showcase p-6 relative sm:abolsute container sm:ml-12 h-full justify-center w-full sm:w-72 gap-4 flex flex-col"
    >
      <span class="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cupiditate, atque totam molestias velit
        deleniti quae ipsam vitae at magnam!
      </span>
      <AppButton class="w-32" color="primary">Ecoutez </AppButton>
    </section>
  </header>
</template>

<style>
header {
  /* background-image: url('./assets/bgheader.jpg'); */
  background: rgb(2, 90, 145);
  background: linear-gradient(
    90deg,
    rgba(2, 90, 145, 0.3034255938703606) 0%,
    rgba(0, 132, 244, 0.8608485630580357) 0%,
    rgba(2, 30, 36, 0.6787757339263831) 100%
  );
  height: 70vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>

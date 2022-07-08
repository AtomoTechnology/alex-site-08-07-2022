<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import RedSocial from '@/components/header/RedSocial.vue';
</script>
<template>
  <div class="flex flex-col min-h-screen app-container">
    <RedSocial />

    <RouterView />
    <section class="grid grid-cols-1 bg-white divide-y-2 sm:divide-y-0 sm:grid-cols-4 sm:p-4">
      <div
        class="value-item p-6 flex-col hover:bg-pink-600 hover:text-white hover:shadow-md hover:rounded-sm cursor-pointer duration-300 flex items-center justify-center gap-6"
      >
        <i class="fa-solid fa-heart text-6xl"></i>
        <h3 class="value-item-title text-2xl capitalize">valeur</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo.</span>
      </div>
      <div
        class="value-item p-6 flex-col hover:bg-pink-600 hover:text-white hover:shadow-md hover:rounded-sm cursor-pointer duration-300 flex items-center justify-center gap-6"
      >
        <i class="fa-solid fa-heart text-6xl"></i>
        <h3 class="value-item-title text-2xl capitalize">valeur</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo.</span>
      </div>
      <div
        class="value-item p-6 flex-col hover:bg-pink-600 hover:text-white hover:shadow-md hover:rounded-sm cursor-pointer duration-300 flex items-center justify-center gap-6"
      >
        <i class="fa-solid fa-heart text-6xl"></i>
        <h3 class="value-item-title text-2xl capitalize">valeur</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo.</span>
      </div>
      <div
        class="value-item p-6 flex-col hover:bg-pink-600 hover:text-white hover:shadow-md hover:rounded-sm cursor-pointer duration-300 flex items-center justify-center gap-6"
      >
        <i class="fa-solid fa-heart text-6xl"></i>
        <h3 class="value-item-title text-2xl capitalize">valeur</h3>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, explicabo.</span>
      </div>
    </section>
    <Footer />
  </div>
</template>
<style scoped>
@media screen and (min-width: 1200px) {
  .app-container {
    width: 1200px;
    margin: auto;
  }
}
</style>

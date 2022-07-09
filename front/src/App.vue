<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import Card from '@/components/card.vue';
import Navbar from '@/components/Navbar.vue';
import RedSocial from '@/components/header/RedSocial.vue';
</script>
<template>
  <div class="flex flex-col min-h-screen app-container">
    <RedSocial />
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
<style scoped>
/* @media screen and (min-width: 1200px) {
  .app-container {
    width: 1200px;
    margin: auto;
  }
} */
</style>

<template>
  <div class="menu flex justify-between px-6 text-white py-6 items-center bg-g-primary">
    <div
      class="mobile-nabvar flex flex-col z-30 sm:hidden fixed top-0 left-0 bg-blue-500 h-screen w-3/4 sm:w-96 items-center gap-6 p-6"
    >
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" />
      <div class="wrapper">
        <nav class="flex gap-6 mr-8 items-center text-white flex-col">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">Qui sommes nous</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink class="rounded-full bg-white px-4 py-1 text-gray-800 shadow" to="/about">Donner</RouterLink>
        </nav>
      </div>
    </div>

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" />
    <div class="wrapper hidden sm:flex">
      <nav class="flex gap-6 mr-8 items-center text-white">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Qui sommes nous</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink class="rounded-full bg-white px-4 py-1 text-gray-800 shadow" to="/about">Donner</RouterLink>
      </nav>
    </div>
    <i @click="closeNavbar" class="fa-solid fa-bars"></i>
    <!-- <div class="user-logged">user</div> -->
  </div>
</template>

<script setup>
const closeNavbar = () => {
  document.querySelector('.mobile-nabvar').classList.toggle('hidden');
};
</script>

<style>
.mobile-navbar {
  transition: all 0.5s ease-in-out;
}
</style>

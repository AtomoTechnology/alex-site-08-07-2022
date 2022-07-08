<template>
  <section class="brand relative !h-60 overflow-hidden w-full bg-red-300">
    <img class="w-full min-h-full object-cover" :src="url" :alt="text" />
    <h1 class="absolute z-10 text-brand">
      {{ text }}
      <span> </span>
    </h1>
  </section>
</template>

<script setup>
const props = defineProps({
  text: String,
  url: String,
});
</script>

<style scoped>
.text-brand {
  top: 50%;
  left: 50%;
  font-size: 60px;
  position: absolute;
  font-weight: 900;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  height: 100%;
  justify-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.316);
  align-items: center;
  justify-content: center;
}
</style>

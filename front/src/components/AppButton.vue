<template>
  <button
    class="text-white font-bold focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
    :class="{
      'bg-blue-700 hover:bg-blue-800 ': color === 'primary',
      'bg-gray-300 hover:bg-gray-400 ': color === 'default',
    }"
  >
    <slot />
  </button>
</template>

<script setup>
const { color } = defineProps({
  color: String,
});
</script>

<style></style>

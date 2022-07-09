<template>
  <Card
    class="value-item p-6 flex-col hover:bg-gray-50 hover:shadow-md hover:rounded-sm cursor-pointer duration-300 flex items-center justify-center gap-6"
  >
    <i class="fa-solid fa-heart text-6xl"></i>
    <h3 class="value-item-title text-2xl capitalize">{{ title }}</h3>
    <span>{{ description }}</span>
  </Card>
</template>

<script setup>
import Card from './Card.vue';
const { title, description } = defineProps({
  title: String,
  description: String,
  icon: String,
});

console.log(title);
</script>

<style></style>

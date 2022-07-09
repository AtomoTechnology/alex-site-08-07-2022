<script setup>
import VerseOfTheday from '../components/VerseOfTheday.vue';
import ShowCase from '../components/header/ShowCase.vue';
import ServiceCard from '../components/card/ServiceCard.vue';
</script>

<template>
  <main>
    <show-case />
    <verse-of-theday></verse-of-theday>
    <section class="grid grid-cols-1 divide-y-2 sm:divide-y-0 sm:grid-cols-4">
      <ServiceCard
        title="Valur"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, nesciunt?"
        class="hover:bg-red-500 hover:text-white"
      />
      <ServiceCard
        title="Valur"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, nesciunt?"
        class="hover:bg-blue-500 hover:text-white"
      />
      <ServiceCard
        title="Valur"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, nesciunt?"
        class="hover:bg-green-500 hover:text-white"
      />
      <ServiceCard
        title="Valur"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, nesciunt?"
        class="hover:bg-gray-500 hover:text-white"
      />
    </section>
  </main>
</template>

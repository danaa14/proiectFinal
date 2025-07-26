<script setup>
import part1 from './part1.vue'
import { computed } from 'vue'

const props = defineProps({
  sectiuni: {
    type: Array,
    default: () => [],
  },
})

const filteredSections = computed(() => props.sectiuni.filter((item) => !item.isTitle))
</script>

<template>
  <section class="arome-clasice">
    <div class="numele" v-if="sectiuni[0]?.isTitle">
      <h2>{{ sectiuni[0].title }}</h2>
    </div>
  </section>

  <section class="arome-clasice2">
    <part1 v-for="(sectiune, index) in filteredSections" :key="index" :sectiune="sectiune" />
  </section>
</template>

<style scoped></style>

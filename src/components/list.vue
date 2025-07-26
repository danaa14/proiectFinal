<script setup>
import item from './item.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <section class="container">
    <item v-for="(item, index) in items" :key="index" :item="item" />
  </section>
</template>
<style scoped></style>

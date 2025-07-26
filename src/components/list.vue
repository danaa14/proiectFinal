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
    <div class="list">
      <item v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </section>
</template>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>

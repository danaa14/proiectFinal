<script setup>
import Item from './item.vue'

const props = defineProps({
  comenzi: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['delete.item'])

const deleteItemHandler = (index) => {
    emit('delete-item', index)
}

</script>

<template>
  <div class="element">
   <section class="container">
    <div class="list">
      <item v-for="(item, index) in comenzi" :key="index" :item="item.produs"  @delete-item="() => deleteItemHandler(index)"/>
    </div>
  </section>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>

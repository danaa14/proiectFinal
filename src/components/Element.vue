<script setup>
import { ref } from 'vue'

const items = ref([
  {
    title: 'Ricotta Crisp',
    image: '/public/image 20.svg',
    price: 75,
  },
  {
    title: 'Sarmale',
    image: '/public/img2.svg',
    price: 45,
  },
  {
    title: 'Vegan Pizza Mix',
    image: '/public/img3.svg',
    price: 180,
  },
  {
    title: 'Mini Tarts Box',
    image: '/public/img4.svg',
    price: 310,
  },
])
</script>

<template>
  <div class="element">
    <list :items="items" />
  </div>
</template>
<style scoped></style>

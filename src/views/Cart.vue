<script setup>
import Layout from './Layout.vue'
import start from '../components/start.vue'
import Element from '@/components/Element.vue'
import Bon from '@/components/Bon.vue'
import { ref, onMounted } from 'vue'

const comenzi = ref([]);

const deleteItemHandler = (index) => {
  comenzi.value.splice(index, 1);
}

onMounted(() => {
  comenzi.value = JSON.parse(localStorage.getItem('cart'));
})
</script>

<template>
  <Layout>
    <start />
    <div class="produse container">
      <Element :comenzi="comenzi" @delete-item="deleteItemHandler" />

      <Bon :comenzi="comenzi" />
    </div>
  </Layout>
</template>

<style scoped>
.produse {
  display: flex;
  align-items: flex-start;
  gap: 104px;
}

.container {
  width: 1216px;
  margin: auto;
}
</style>

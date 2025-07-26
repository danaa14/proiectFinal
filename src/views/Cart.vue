<script setup>
import Layout from './Layout.vue'
import start from './start.vue'
import Element from '@/components/Element.vue'
import Bon from '@/components/Bon.vue'
import { ref } from 'vue'

const comenzi = ref([
  {
    title: 'Numele/Prenumele',
    image: '/public/pers.svg',
  },
  {
    title: 'Adresa de email',
    image: '/public/mail.svg',
  },
  {
    title: 'Parola',
    image: '/public/key.svg',
  },
  {
    title: 'Numărul de contact',
    image: '/public/call.svg',
  },
])
</script>

<template>
  <Layout>
    <start />
    <div class="produse container">
      <Element />
      <Bon :comenzi="comenzi" />
    </div>
  </Layout>
</template>

<style scoped>
.produse {
  display: flex;
  align-items: flex-start;
  gap: 104px;
  /* margin-bottom: 300px; */
}

.container {
  width: 1216px;
  margin: auto;
  /* margin-bottom: 300px; */
}
</style>

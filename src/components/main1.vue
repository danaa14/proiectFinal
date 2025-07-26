<script setup>
import sections from './sections.vue'
import { ref } from 'vue'

const sectiuni = ref([
  {
    title: 'Arome Clasice',
    isTitle: true,
  },
  {
    title: 'Ricotta Crisp',
    isTitle: false,
    image: '/public/image 20.svg',
    span: 'Mini-tarte cu ricotta și roșii confiate ',
    description:
      ' Aluat crocant, cremă fină de ricotta, roșii cerry confiate, ulei de măsline. ( 10 bucăți )',
    pret: '75 lei',
    alt: 'Ricotta Crisp',
  },
  {
    title: 'Green Bite',
    isTitle: false,
    image: '/public/cesar.svg',
    span: 'Salată Caesar clasică',
    description:
      'Salată fresh, piept de pui la grătar, crutoane, parmezan, clasicul dressing Caesar cu anșoa, muștar și usturoi.',
    pret: '125 lei',
    alt: 'Green Bite',
  },
  {
    title: 'Grill Pop',
    isTitle: false,
    image: '/public/grill.svg',
    span: 'Frigărui marinat clasic și legume la grătar',
    description:
      'Carne fragedă marinat clasic, ardei, dovlecel, ciuperci și ceapă roșie. ( 5 bucăți )',
    pret: '280 lei',
    alt: 'Grill Pop',
  },
  {
    title: 'Crunch Cod',
    isTitle: false,
    image: '/public/cod.svg',
    span: 'Cod tras la tigae cu crustă fină',
    description: 'File de cod, ierburi aromate, infuzie de suc de lămâie, mărar (2 bucăți)',
    pret: '250 lei',
    alt: 'Crunch Cod',
  },

  {
    title: 'Mini Tarts Box',
    isTitle: false,
    image: '/public/tarte.svg',
    span: 'Set de mini tarte cu creme fine și decoruri fresh',
    description:
      'Tartă cu cremă de ciocolată sărat, fistic, vanilie și fructe proaspete(8 bucăți )',
    pret: '310 lei',
    alt: 'Mini Tarts Box',
  },
])
</script>

<template>
  <sections :sectiuni="sectiuni" />
</template>

<style scoped>

</style>

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
  <section class="arome-clasice2">
    <div class="arome-clasice">
      <div class="numele" v-if="sectiuni[0]?.isTitle">
        <h2>{{ sectiuni[0].title }}</h2>
      </div>
    </div>

    <part1 v-for="(sectiune, index) in filteredSections" :key="index" :sectiune="sectiune" />
  </section>
</template>

<style scoped>
.arome-clasice {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.numele h2 {
  font-family: 'Yeseva one';
  font-size: 64px;
  font-weight: 100;
  margin-top: 130px;
  display: flex;
  align-items: center;
}
.arome-clasice2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 168px;
  max-width: 1216px;
  margin: 120px auto;
}
</style>

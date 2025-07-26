<script setup>
const props = defineProps({
  sectiune: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>
<template>
  <div class="patrat2" v-if="sectiune.isTitle === false">
    <h2>{{ sectiune.title }}</h2>
    <div class="info2">
      <h2 class="pret">{{ sectiune.pret }}</h2>
      <p>
        <span>{{ sectiune.span }}</span
        ><br />{{ sectiune.description }}
      </p>
    </div>
    <div class="img-bttn">
      <img :src="sectiune.image" :alt="sectiune.alt" />
      <button href="#" class="bttn-comanda">Adauga la comanda ta</button>
    </div>
  </div>
  <div class="numele" v-else>
    <h2>{{ sectiune.title }}</h2>
  </div>
</template>
<style scoped></style>

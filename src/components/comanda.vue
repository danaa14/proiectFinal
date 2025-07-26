<script setup>
const props = defineProps({
  comanda: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="Comanda1">
    <img :src="comanda.image" />
    <input :placeholder="comanda.title" />
  </div>
</template>

<style scoped>
.Comanda1 input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 28px;
  width: 380px;
  height: 64px;
}

.Comanda1 img {
  width: 85px;
  height: 65px;
}

.Comanda1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 57px;
}
</style>

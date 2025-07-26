<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const counter = ref(1)

const increase = () => {
  counter.value += 1
}

const decrease = () => {
  counter.value -= 1
}
</script>
<template>
  <div class="list">
    <div class="food">
      <img :src="items.image" />
      <div class="info-produs">
        <h2>{{ items.title }}</h2>
        <p>{{ items.price }} lei</p>
        <div class="buttons">
          <button @click="increase">-</button>
          <button>{{ counter }}</button>
          <button @click="decrease">+</button>
          <button>
            <img src="/public/cos.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

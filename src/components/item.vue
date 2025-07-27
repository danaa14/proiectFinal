<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

const emit = defineEmits(['delete-item'])

const deleteItemHandler = () => {
  emit('delete-item');
}

const counter = ref(1);

const increase = () => {
  counter.value += 1
}

const decrease = () => {
  if (counter.value === 0) {
  } else {
    counter.value -= 1
  }
}
</script>

<template>
  <div class="food">
    <img :src="`/${item.image}`" />
    <div class="info-produs">
      <h2>{{ item.name }}</h2>
      <p>{{ parseInt(item.price) * parseInt(counter) }} lei</p>
      <div class="buttons">
        <button @click="decrease">-</button>
        <button>{{ counter }}</button>
        <button @click="increase">+</button>
        <button>
          <img src="/public/cos.svg" @click="deleteItemHandler" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.food {
  width: 565px;
  height: 212px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.food img {
  width: 214px;
  height: 212px;
}

.info-produs {
  width: 295px;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

.info-produs p,
h2 {
  text-align: center;
}

.food button {
  width: 55px;
  height: 55px;
  border-radius: 10px;
  border: none;
}

.food button img {
  width: 55px;
  height: 55px;
  transition: color 0.3s ease;
}

.buttons {
  width: 295px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

p {
  font-size: 25px;
  font-weight: 700;
  font-family: 'Inter';
}

button {
  font-size: 25px;
  font-weight: 400;
  font-family: 'Wittgenstein';
  background-color: #c5ac81;
}

button:hover {
  background-color: #bca06f;
}

h2 {
  font-size: 30px;
  font-family: 'Yeseva One';
  font-weight: 400;
}

.buttons>button:nth-child(4) {
  background:
    linear-gradient(0deg, #d69941, #d69941),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
}
</style>

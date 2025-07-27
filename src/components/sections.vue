<template>
  <section class="arome-clasice2">
    <div class="arome-clasice">
      <div class="numele">
        <h2>Arome clasice</h2>
      </div>

      <part1 v-for="(food, index) in foods" :sectiune="food" :key="index" @add-to-cart="() => addToCart(food)" />
    </div>
  </section>
</template>

<script setup>
import part1 from './part1.vue'
import { computed, onMounted, ref } from 'vue'
import { getFood } from "../services/firebase.js";

const foods = ref([]);

const addToCart = (produs) => {
  let currentCart = JSON.parse(localStorage.getItem('cart'));

  if(currentCart == null) {
    currentCart = [{
      produs,
      quantity: 1
    }]

    localStorage.setItem('cart', JSON.stringify(currentCart))
    return;
  }

  const currentProductIndex = currentCart.findIndex(p => {
    return p.produs.name === produs.name
  })

  if(currentProductIndex === -1) {
    localStorage.setItem('cart', JSON.stringify([
      ...currentCart,
      {
        produs, quantity: 1
      }
    ]))
  }else{
    currentCart.splice(currentProductIndex, 1, {
      produs,
      quantity: currentCart[currentProductIndex].quantity + 1
    })

    localStorage.setItem('cart', JSON.stringify(currentCart))
  }
}

onMounted(async () => {
  const result = await getFood();
  foods.value = result;
})
</script>


<style>
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

.arome-clasice {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 168px;
  max-width: 1216px;
  margin: 120px auto;
}

</style>

<script setup>
import comanda from './comanda.vue'

const props = defineProps({
  comenzi: {
    type: Array,
    default: () => [],
  },
})
</script>
<template>
  <div class="bon">
    <p>Spre Achitare: 2025 lei</p>

    <div class="comanda">
      <comanda v-for="(comanda, index) in comenzi" :key="index" :comanda="comanda" />
      <div class="comentarii">
        <p>Comentarii pentru bucătari:</p>
        <input placeholder=" " />
        <button>Comandă</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bon p {
  text-align: center;
  font-family: 'Wittgenstein';
  font-weight: 100;
  font-size: 35px;
}

.comentarii p {
  font-size: 18px;
  font-weight: 100;
  text-align: left;
  margin-left: 30px;
  color: #7e7a7a;
  margin-top: 64px;
  margin-bottom: 18px;
}

.comentarii input {
  border-radius: 50px;
  width: 486px;
  height: 243px;
  margin-left: 30px;
  background-color: #ccc8bd;
  border: 0.5 solid #474444;
}

.comentarii button {
  border-radius: 10px;
  width: 486px;
  height: 66px;
  margin-left: 30px;
  margin-top: 30px;
  background-color: #d1963f;
  border: none;
  transition: color 0.3s ease;
}

.comentarii button:hover {
  color: #292828;
  box-shadow: 0 4px 10px rgba(49, 49, 49, 0.3);
  background-color: #836635;
}
</style>

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
<style scoped>
  .img-bttn {
  display: flex;
  align-items: end;
  width: 588px;
}
.img-bttn img {
  width: 302px;
}
.img-bttn button {
  color: #ffffff;
  background-color: #d1963f;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  text-wrap: nowrap;
  border: 0;
  padding: 10px;
  gap: 10px;
  font-size: 24px;
  font-family: 'wittgenstein';
  transition: color 0.3s ease;
}

.img-bttn button:hover {
  color: white;
  box-shadow: 0 4px 10px rgba(49, 49, 49, 0.3);
  color: #836635;
}

/*Stanga*/

.patrat2 h2 {
  font-size: 40px;
  font-family: 'yeseva one';
  font-weight: 100;
}

.patrat2 {
  width: 568px;
  font-family: 'wittgenstein';
  padding: 0 0 0 25px;
  border-left: 4px solid #606060;
  height: 503px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
}

.patrat2 p {
  width: 347px;
  font-family: 'wittgenstein';
  font-size: 18px;
}

.patrat2 span {
  font-weight: bold;
  font-size: 18px;
}

.info2 {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>

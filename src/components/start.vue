<script setup></script>
<template>
  <section class="container">
    <div class="start">
      <router-link to="/menu">
        <img src="/sageata.svg" alt="sageata" />
      </router-link>
      <h1>Comanda ta</h1>
    </div>
  </section>
</template>
<style scoped>
.start {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 74px;
  text-align: center;
  margin: 108px auto;
}

.start h1 {
  font-size: 64px;
  font-family: 'yeseva one';
  font-weight: 100;
  width: 400px;
  margin: auto;
}
</style>

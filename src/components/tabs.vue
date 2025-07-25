<script setup></script>

<template>
  <section>
    <div>
      <ul>
        <li><a href="#">Arome Clasice</a></li>
        <li><a href="#">Tradițional</a></li>
        <li><a href="#">Vegan</a></li>
        <li><a href="#">Fără Gluten</a></li>
        <li><a href="#" style="background-image: none">Recomandările Șefului</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
section:nth-child(2) ul li a::after {
  content: '';
  width: 20px;
  height: 30px;
  background-image: url(img/Group\ 75.svg);
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-left: 15px;
}

.menu {
  color: #d9d9d9;
  background-color: #d1963f;
  padding: 8px 16px;
  border-radius: 16px;
}

/*TABS*/

section:nth-child(2) {
  background-color: black;
  padding: 20px;
}

section:nth-child(2) ul {
  list-style: none;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
}

section:nth-child(2) ul li {
  font-size: 24px;
  font-family: 'Wittgenstein';
}

section:nth-child(2) ul li a {
  text-decoration: none;
  color: #d9d9d9;
  transition: color 0.3s ease;
}

section:nth-child(2) ul li img {
  padding: 10px 0px;
}

section:nth-child(2) ul li a:hover {
  color: #836635;
}

section:nth-child(2) ul li:nth-child(5) > a::after {
  background-image: none;
}
</style>

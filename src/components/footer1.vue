<script setup></script>

<template>
  <footer>
    <div class="logo">
      <h4>Ratatouille</h4>
      <img src="/public/Frame 51.svg" />
    </div>

    <div class="link">
      <h4>Link-uri de interes</h4>
      <br />
      <ul class="listalink">
        <li><a href="#">Meniu</a></li>
        <li><a href="#">Acasă</a></li>
        <li><a href="#">Sursele Locale</a></li>
        <li><a href="#">Despre noi</a></li>
        <li><a href="#">Comanda ta</a></li>
      </ul>
    </div>
    <div class="contacts">
      <ul>
        <li><h4>Contacte</h4></li>
        <li class="txt">Manager online</li>
        <li>+373 67934164</li>
        <li class="txt">Suport Clenți</li>
        <li>+373 69447521</li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: auto;
  height: 395px;
  background-color: black;
  color: white;
  padding: 20px;
  border-top-left-radius: 100% 40%;
  border-top-right-radius: 100% 40%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: center;
}

.logo h4 {
  width: 200px;
  height: 80px;
  font-family: 'kolker brush';
  font-size: 100px;
  font-weight: 100;
}

.logo img {
  width: 250px;
  height: 70px;
  padding: 20px;
}

.link {
}

.link h4 {
  font-size: 40px;
  font-family: 'yeseva one';
  text-align: center;
}

.link ul li {
  max-width: 497px;
  font-size: 20px;
  font-family: 'wittgenstein';
  list-style: none;
  display: flex;
}
.link li a {
  text-decoration: none;
  color: #ffffff;
}
.listalink {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.listalink a::after {
  content: '';
  width: 20px;
  height: 20px;
  background-image: url('img/Frame 42.svg');
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-left: 15px;
}

.contacts h4 {
  width: auto;
  font-size: 40px;
  font-family: 'yeseva one';
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contacts .txt {
  width: auto;
  font-size: 24px;
  font-family: 'Wittgenstein';
  font-weight: 100;
}

.contacts li {
  list-style: none;
  font-size: 30px;
  font-family: 'yeseva one';
}

.contacts {
  display: flex;
  flex-direction: column;
}
</style>

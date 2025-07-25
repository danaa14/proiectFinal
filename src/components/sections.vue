<template>
  <section class="arome-clasice">
    <div class="numele">
      <h2>Arome Clasice</h2>
    </div>
    <div class="patrat1">
      <h2>Ricotta Crisp</h2>
      <div class="info">
        <h2 class="pret">75 lei</h2>
        <p>
          <span>Mini-tarte cu ricotta și roșii confiate </span> Aluat crocant, cremă fină de
          ricotta, roșii cerry confiate, ulei de măsline. ( 10 bucăți )
        </p>
      </div>
      <div class="img-bttn">
        <img src="/public/image 20.svg" alt="Ricotta Crisp" />
        <button href="#" class="bttn-comanda">Adauga la comanda ta</button>
      </div>
      <!-- buton-->
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
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

.arome-clasice {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1216px;
  margin: 120px auto;
}

.numele h2 {
  font-family: 'Yeseva one';
  font-size: 64px;
  font-weight: 100;
  margin-top: 130px;
  display: flex;
  align-items: center;
}

.patrat1 h2 {
  font-size: 40px;
  font-family: 'yeseva one';
  font-weight: 100;
}

.patrat1 {
  width: 568px;
  font-family: 'wittgenstein';
  padding: 0 0 0 25px;
  border-left: 4px solid #606060;
  height: 503px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.patrat1 p {
  width: 347px;
  font-family: 'wittgenstein';
  font-size: 18px;
}

.patrat1 span {
  font-weight: bold;
  font-size: 18px;
}
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
.arome-clasice2 {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 1216px;
  margin: 120px auto;
}
</style>

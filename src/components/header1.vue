<script setup></script>

<template>
  <header>
    <h1>Ratatouille</h1>
    <nav>
      <ul>
        <li><a href="">Acasă</a></li>
        <li><a href="">Despre noi</a></li>
        <li><a href="">Recenzii</a></li>
        <li>
          <router-link to="/menu">
            <a href="#" class="menu">Meniu</a>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <a class="menu"> Comanda ta</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 10px solid #d1963f;
  background-color: #474444;
}

section:nth-child(2) ul li a::after {
  content: '';
  width: 20px;
  height: 30px;
  background-image: url('Group 75.svg');
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

h1 {
  padding: 8px 16px;
  color: #d9d9d9;
  font-family: 'Kolker Brush';
  font-weight: 100;
  font-size: 96px;
}

nav {
  width: 60%;
}

nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #d1963f;
  font-size: 28px;
  font-family: 'Wittgenstein';
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #836635;
}
</style>

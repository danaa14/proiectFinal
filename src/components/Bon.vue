<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import Item from './item.vue';
emailjs.init("MW5PkzCr8mhgdnjn3");

const email = ref(null)
const name= ref(null)
const phone = ref(null)
const address = ref(null)

const sendEmail = () => {
  const serviceID = 'service_n28qpnq';
  const templateID = 'template_wo0knkz';

  const templateParams = {
    user_name: name.value,
    email: email.value,
    user_address: address.value,
    user_phone: phone.value,
  }

  emailjs.send(serviceID, templateID, templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      console.log('Email introdus:', email);

      alert('Failed to send email. Please try again.');
    });
};

onMounted(() => {
  
})
</script>

<template>
  <div class="bon">
    <p>Spre Achitare: {{ total }} lei</p>

    <div class="comanda">
      <div class="Comanda1">
        <img src="/pers.svg" />
        <input placeholder="Numele / Prenumele" id="nume" v-model="name" />
      </div>
      <div class="Comanda1">
        <img src="/mail.svg" />
        <input placeholder="Adresa de email" id="email" v-model="email" />
      </div>
      <div class="Comanda1">
        <img src="/key.svg" />
        <input placeholder="Parola" id="domiciliu" v-model="address" />
      </div>

      <div class="Comanda1">
        <img src="/call.svg" />
        <input placeholder="Numărul de contact" id="telefon" v-model="phone" />
      </div>

      <div class="comentarii">
        <p>Comentarii pentru bucătari:</p>
        <input placeholder=" " />
        <button @click="sendEmail">Comandă</button>
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

.Comanda1 input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  margin-left: 28px;
  width: 380px;
  height: 64px;
}

.Comanda1 img {
  width: 85px;
  height: 65px;
}

.Comanda1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 57px;
  
}

.comanda {
  font-family: 'Wittgenstein';

}
</style>

<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>
<template>
  <div class="list">
    <div class="food">
      <img :src="items.image" />
      <div class="info-produs">
        <h2>{{ items.title }}</h2>
        <p>{{ items.price }} lei</p>
        <div class="buttons">
          <button>-</button>
          <button>2</button>
          <button>+</button>
          <button>
            <img src="/public/cos.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

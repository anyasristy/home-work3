<template>
  <section>
    <h2>Counter Section</h2>
    <p>Visits: {{ count }}</p>
    <button @click="count++">Increase Count</button>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
    <section>
      <h2>Ananya Sristy's Project</h2>
      <p v-if="showWelcome">Hello! This is my Homework 3 project.</p>
      <button @click="toggleWelcome">{{ showWelcome ? 'Hide' : 'Show' }}Message</button>
    </section>
  </template>
  <script setup>
  import { ref } from 'vue';
  const showWelcome = ref(true);
  const toggleWelcome = () => {
    showWelcome.value = !showWelcome.value;
  };
  </script>
  
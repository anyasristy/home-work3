<template>
  <section id="contact">
    <h2><strong>Contact</strong></h2>
    <h3>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">

        <label for="message">Message:</label>
        <textarea id="message" v-model="message"></textarea>

        <button type="submit">Submit</button>
      </form>
      <p v-if="submitted">Form Submitted! We'll get back to you soon.</p>
    </h3>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const name = ref('');
const email = ref('');
const message = ref('');
const submitted = ref(false);
const handleSubmit = () => {
  submitted.value = true; 
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

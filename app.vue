<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
const footerMessage = ref('Default footer message');
const updateFooter = (newMessage) => {
  footerMessage.value = newMessage;
};
</script>
<template>
  <div>
    <Header @updateMessage="updateFooter" />
    <Footer :message="footerMessage" />
  </div>
</template>

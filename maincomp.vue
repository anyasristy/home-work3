<template>
  <Header @updateMessage="updateHeader" />
  <Home />
  <Projects />
  <Contact />
  <Counter />
  <Footer />
</template>
<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Home from './components/home.vue';
import Projects from './components/project.vue';
import Contact from './components/contact.vue';
import Counter from './components/counter.vue';
const updateHeader = (message) => {
  console.log(message);
};
</script>

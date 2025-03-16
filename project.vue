<template>
    <section>
      <h2>Projects!</h2>
      <p v-if="projects.length === 0">Try again later</p>
      <ul>
        <li v-for="(project, index) in projects" :key="index">
          {{ project }}
        </li>
      </ul>
      <p>Total Number of Projects: {{ projectCount }}</p>
    </section>
  </template>
  <script setup>
  import { ref, computed } from 'vue';
  const projects = ref(["1", "2"]);
  const projectCount = computed(() => projects.value.length);
  </script>
  
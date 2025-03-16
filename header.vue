<template>
  <n-layout-header bordered class="header">
    <h1>{{ webinfo.title }}</h1>
    <n-button @click="sendMessage">Update Header</n-button>
  </n-layout-header>
</template>
<script setup>
import { defineEmits } from 'vue';
import { useWebInfoStore } from '../stores/webinfo';
import { NButton, NLayoutHeader } from 'naive-ui';
const webinfo = useWebInfoStore();
const emit = defineEmits(['updateMessage']);
const sendMessage = () => {
  emit('updateMessage', 'Hi!! This is my website!');
};
</script>

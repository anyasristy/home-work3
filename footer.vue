<template>
  <footer>
    <p>{{ webinfo.footerText }}</p>
  </footer>
</template>
<script setup>
import { webinfo_store } from '../stores/webinfo';
const webinfo = webinfo_store();
</script>

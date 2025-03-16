import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
export const useWebInfoStore = defineStore('webInfo', {
  state: () => ({
    title: useStorage('title', 'Ananyas project for web programming'),  
    footerText: useStorage('footerText', '© 2025 Ananya Sristy HW')  
  }),
});

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegisterStore = defineStore('register', () => {
  const showRegister = ref(false)
  const toggleRegister = () => {
    showRegister.value = !showRegister.value
  }

  return {
    showRegister,
    toggleRegister
  }
})

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

export const useLoginStore = defineStore('login', () => {
  const loginShow = ref(false)
  const toggleLogin = () => (loginShow.value = !loginShow.value)

  return { loginShow, toggleLogin }
})

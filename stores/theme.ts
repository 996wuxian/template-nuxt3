import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref(
      typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
    )

    const setTheme = (newTheme: string) => {
      theme.value = newTheme
      localStorage.setItem('theme', newTheme)
      window.document.documentElement.setAttribute('data-theme', theme.value)
    }
    return { theme, setTheme }
  },
  {
    persist: true
  }
)

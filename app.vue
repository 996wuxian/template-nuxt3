<script lang="ts" setup>
import 'animate.css'
import { darkTheme, lightTheme } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'

// 来自app.config.ts
const { awesome } = useAppConfig()
useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`
})

const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', themeStore.theme)
})
</script>

<template>
  <n-config-provider :theme="theme === 'dark' ? darkTheme : lightTheme">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>

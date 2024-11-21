<script lang="ts" setup>
import 'animate.css'
// 来自app.config.ts
const { awesome } = useAppConfig()
useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`
})
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>

<script lang="ts" setup>
import 'animate.css'
// import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'

// 来自app.config.ts
const { awesome } = useAppConfig()
useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`
})

// const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950"
    >
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </n-config-provider>
</template>

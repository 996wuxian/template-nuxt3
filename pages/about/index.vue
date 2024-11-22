<template>
  <div class="container">about</div>
</template>

<script setup lang="ts">
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '关于', title: awesome?.name || 'text' })

const route = useRoute()
console.log('🚀 ~ route:', route)
</script>

<style scoped></style>

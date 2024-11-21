<template>
  <div class="container">1231234123123</div>
</template>

<script setup lang="ts">
import { useExample } from '@/stores/use-example'
const exampleStore = useExample()
console.log('🚀 ~ exampleStore:', exampleStore.count)

const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'text' })
</script>

<style scoped></style>

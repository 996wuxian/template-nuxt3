<template>
  <div class="container">
    mobile

    <div @click="toAbout">to about</div>
  </div>
</template>

<script setup lang="ts">
import { useExample } from '@/stores/use-example'

const router = useRouter()
const toAbout = () => {
  router.push('/about')
}

const exampleStore = useExample()
console.log('🚀 ~ exampleStore:', exampleStore.count)

const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })

console.log(import.meta.env, 'import.meta.env')
</script>

<style scoped></style>

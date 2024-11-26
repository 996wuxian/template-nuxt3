<template>
  <div class="page">
    <div class="content">
      <div class="content__left">
        <Todo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Todo from './components/Todo.vue'

const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })
</script>

<style scoped>
.page {
  @apply h-100vh w-100vw flex-center;
  background: url('@/assets/imgs/bg-blue.svg') no-repeat center center;
  background-size: cover;
}

.content {
  @apply w-90% h-[calc(100%-50px)] flex pt-50px;
}

.content__left {
}
</style>

<template>
  <div class="page page-filter">
    <div class="fixed right-10px top-10px">
      <CommonSwitch v-if="themeValue" v-model="themeValue" />
    </div>
    <div class="content">
      <div class="content__left">
        <Todo />
        <MessageBoard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageBoard from './components/Message-board.vue'
import Todo from './components/Todo.vue'
import { useThemeStore } from '@/stores/theme'
const useTheme = useThemeStore()

const themeValue = ref()

watch(
  () => themeValue.value,
  val => {
    useTheme.setTheme(val)
  }
)

onMounted(() => {
  themeValue.value = useTheme.theme
})

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
  @apply w-100% h-[calc(100%-50px)] flex pt-50px;
}

.content__left {
}
</style>

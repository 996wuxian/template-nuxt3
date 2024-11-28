<!-- layouts/home.vue -->
<template>
  <div class="page page-filter">
    <div class="fixed right-10px top-10px z-999">
      <CommonSwitch v-if="themeValue" v-model="themeValue" />
    </div>
    <div class="w-full h-full">
      <GsapFadeIn :x="150" class="w-[calc(100%-300px)] h-100%">
        <div class="content">
          <div class="flex-1 max-w-270px">
            <Todo />
            <Message />
          </div>
          <div class="flex-1">
            <div class="project__search theme-page">
              <i i-solar-minimalistic-magnifer-broken></i>
              <input
                type="text"
                placeholder="搜索内容"
                class="b-none outline-none placeholder-#eee bg-transparent text-#eee"
              />
            </div>
            <div class="project__content theme-page mt-10px h-[calc(100%-60px)]">
              <slot />
            </div>
          </div>
          <div class="flex-1 max-w-270px">
            <Person />
            <Music />
          </div>
        </div>
      </GsapFadeIn>

      <div class="page__nav">
        <n-tooltip trigger="hover">
          <template #trigger>
            <div @click="toPage('home')">
              <i i-solar-layers-bold-duotone></i>
            </div>
          </template>
          首页
        </n-tooltip>

        <n-tooltip trigger="hover">
          <template #trigger>
            <div @click="toPage('chat')">
              <i i-solar-chat-square-bold-duotone></i>
            </div>
          </template>
          聊天室
        </n-tooltip>
        <n-tooltip trigger="hover">
          <template #trigger>
            <div>
              <i i-solar-book-bookmark-bold></i>
            </div>
          </template>
          知识库
        </n-tooltip>
        <n-tooltip trigger="hover">
          <template #trigger>
            <div>
              <i i-solar-gallery-round-bold-duotone></i>
            </div>
          </template>
          图片
        </n-tooltip>
        <n-tooltip trigger="hover">
          <template #trigger>
            <div>
              <i i-solar-music-note-3-bold></i>
            </div>
          </template>
          音乐
        </n-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup>
import Todo from '@/components/layout/Home/Todo.vue'
import Message from '@/components/layout/Home/Message.vue'
import Person from '@/components/layout/Home/Person.vue'
import Music from '@/components/layout/Home/Music.vue'

import { useThemeStore } from '@/stores/theme'
const useTheme = useThemeStore()
const themeValue = ref(useTheme.theme)

const router = useRouter()

const toPage = type => {
  router.push(type)
}

watch(
  () => themeValue.value,
  val => {
    useTheme.setTheme(val)
  }
)

onMounted(() => {
  themeValue.value = useTheme.theme
})
</script>

<style scoped lang="scss">
.page {
  @apply h-100vh w-100vw flex overflow-hidden;
  background: url('@/assets/imgs/bg-blue.svg') no-repeat center center;
  background-size: cover;
}

.content {
  @apply w-100% h-720px flex pt-50px;
}

.page__nav {
  @apply fixed bottom-10px left-50% b-rd-8px z-999 flex items-center py-10px px-15px gap-15px;
  transform: translate(-50%);

  background: rgba(220, 220, 224, 0.3);

  box-shadow:
    rgba(12, 26, 67, 0.25) 0px 0px 20px -4px,
    rgba(24, 43, 100, 0.25) 0px 0px;

  div {
    @apply flex-center w-50px h-50px bg-#eee b-rd-10px cursor-pointer;

    i {
      @apply w-30px h-30px text-#7695E9;
    }
  }
}

.project__search,
.project__content {
  @apply flex flex-col b-rd-8px p-10px text-13px ml-10px;
  box-sizing: border-box;
  backdrop-filter: blur(80px) saturate(150%);
}

.project__search {
  @apply flex-row items-center gap-5px py-15px;
}

.project__list {
  @apply p-20px grid justify-between grid-gap-40px;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  box-sizing: border-box;
}

.project__item {
  @apply w-60px flex flex-col gap-10px cursor-pointer;
  white-space: nowrap;

  img {
    @apply w-60px h-60px b-rd-8px;
    box-shadow: 1px 1px 10px rgba(0, 9, 255, 0.2);
    object-fit: cover;
  }
}
</style>

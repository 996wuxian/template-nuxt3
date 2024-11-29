<template>
  <div class="project__list">picture</div>
</template>

<script setup lang="ts">
const { awesome } = useAppConfig()
definePageMeta({ layout: 'home' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })
</script>

<style scoped lang="scss">
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

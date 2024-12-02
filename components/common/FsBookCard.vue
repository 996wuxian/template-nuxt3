<template>
  <div class="fs-book-card-container">
    <div class="fs-book-card-image">
      <img :src="detail.url" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ICardDetail {
  imageHeight?: number
  [key: string]: any
}
const props = defineProps<{
  detail: ICardDetail
}>()
</script>

<style scoped lang="scss">
.fs-book-card {
  &-container {
    width: 100%;
    height: 100%;
  }
  &-image {
    width: 100%;
    height: v-bind('`${props.detail.imageHeight}px`');
    img {
      @apply w-100% h-100% rd-5px;
    }
  }
}
</style>

<template>
  <div class="container">
    <img src="@/assets/imgs/empty.png" alt="" />
    <span>暂无{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  },
  innerDivStyle: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.container {
  @apply flex-center flex-col;
  user-select: none;

  img {
    width: 150px;
  }

  span {
    @apply color-#eee text-12px;
  }
}
</style>

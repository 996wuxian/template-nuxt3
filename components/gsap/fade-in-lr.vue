<template>
  <div ref="element" class="fade-in">
    <slot />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const props = defineProps<{
  x?: number
}>()

const element = ref()

onMounted(() => {
  gsap.to(element.value, { duration: 1, x: props.x + 'px', opacity: 1 })
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
}
</style>

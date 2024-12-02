<template>
  <div class="picture w-full h-full">
    <div ref="fContainerRef" class="w-full h-full">
      <fs-book-waterfall :bottom="20" :column="column" :gap="10" :page-size="20" :request="getData">
        <template #item="{ item, imageHeight }">
          <fs-book-card
            :detail="{
              imageHeight,
              url: item.url
            }"
          />
        </template>
      </fs-book-waterfall>
    </div>
  </div>
</template>

<script setup lang="ts">
import FsBookWaterfall from '@/components/common/FsBookWaterfall.vue'
import FsBookCard from '@/components/common/FsBookCard.vue'
import type { ICardItem } from '@/components/common/type'

import img1 from '@/assets/imgs/1-1.png'
import img2 from '@/assets/imgs/1-2.png'
import img3 from '@/assets/imgs/1-3.png'
import img4 from '@/assets/imgs/1-4.png'
import img5 from '@/assets/imgs/1-5.png'
import img6 from '@/assets/imgs/1-6.png'
import img7 from '@/assets/imgs/1-7.png'

const { awesome } = useAppConfig()
definePageMeta({ layout: 'home' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })

const fContainerRef = ref<HTMLDivElement | null>(null)
const column = ref(3)
const fContainerObserver = ref()

const changeColumn = (width: number) => {
  if (width > 960) {
    column.value = 5
  } else if (width >= 690 && width < 960) {
    column.value = 4
  } else if (width >= 500 && width < 690) {
    column.value = 3
  } else {
    column.value = 2
  }
}

onMounted(() => {
  fContainerObserver.value = new ResizeObserver(entries => {
    changeColumn(entries[0].target.clientWidth)
  })
  fContainerRef.value && fContainerObserver.value.observe(fContainerRef.value)
})

onUnmounted(() => {
  fContainerRef.value && fContainerObserver.value.unobserve(fContainerRef.value)
})

const listData = ref<ICardItem[]>([
  {
    id: 1,
    url: img1,
    title: '图1',
    width: 300,
    height: 154
  },
  {
    id: 2,
    url: img2,
    title: '图1',
    width: 300,
    height: 646
  },
  {
    id: 3,
    url: img3,
    title: '图1',
    width: 300,
    height: 656
  },
  {
    id: 4,
    url: img4,
    title: '图1',
    width: 300,
    height: 191
  },
  {
    id: 5,
    url: img5,
    title: '图1',
    width: 300,
    height: 168
  },
  {
    id: 6,
    url: img6,
    title: '图1',
    width: 300,
    height: 535
  },
  {
    id: 7,
    url: img7,
    title: '图1',
    width: 300,
    height: 168
  }
])

const list1 = listData.value.map(i => ({
  id: i.id,
  url: i.url,
  width: i.width,
  height: i.height
}))

const list = [...list1, ...list1, ...list1]

const getData = (page: number, pageSize: number) => {
  return new Promise<ICardItem[]>(resolve => {
    setTimeout(() => {
      resolve(list.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize))
    }, 1000)
  })
}
</script>

<style scoped lang="scss"></style>

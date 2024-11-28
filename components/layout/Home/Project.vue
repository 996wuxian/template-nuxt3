<template>
  <div class="project__search theme-page">
    <i i-solar-minimalistic-magnifer-broken></i>
    <input
      type="text"
      placeholder="搜索内容"
      class="b-none outline-none placeholder-#eee bg-transparent text-#eee"
    />
  </div>

  <div class="project__content theme-page mt-10px h-[calc(100%-60px)]">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// import image from '@/assets/imgs/image.png'
// import image2 from '@/assets/imgs/image2.jpg'

// <div class="project__list">
//       <div
//         v-for="(item, index) in listData"
//         :key="index"
//         class="project__item"
//         @click="linkTo(item)"
//       >
//         <img :src="item.img" alt="" />

//         <n-tooltip trigger="hover">
//           <template #trigger>
//             {{ item.title.substring(0, 7) + '...' }}
//           </template>
//           {{ item.title }}
//         </n-tooltip>
//       </div>
//       <div class="w-60px h-60px rd-8px theme-page flex-center">
//         <svg-icon name="add" style="width: 20px; height: 20px" class="cursor-pointer" />
//       </div>
//     </div>

// const listData = ref([
//   {
//     id: 0,
//     title: 'template-admin',
//     link: 'https://github.com/996wuxian/template-admin',
//     url: '',
//     img: image
//   },
//   {
//     id: 0,
//     title: 'template-admin',
//     link: 'https://github.com/996wuxian/template-nest',
//     url: '',
//     img: image2
//   }
// ])

// const linkTo = (item: any) => {
//   window.open(item.link)
// }
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

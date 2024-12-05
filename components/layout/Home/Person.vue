<template>
  <div class="person theme-page">
    <div class="flex gap-10px">
      <div class="w-40px h-40px bg-blue rd-50%"></div>
      <div class="flex flex-col justify-between text-14px my-5px">
        996wuxian
        <span class="text-11px color-#B2CADD">ID: 50-12930-123</span>
      </div>
      <div class="text-13px flex items-center ml-auto cursor-pointer">
        <svg-icon name="login-out" class="mr-5px" />
        登出
      </div>
    </div>
    <div class="person__tags">
      <div class="flex">
        <i i-solar-chat-unread-bold></i>
      </div>
      <div>
        <svg-icon name="github" />
      </div>
    </div>
    <div class="text-13px mt-10px line-height-20px">欢迎，这是我的blog，以下是我的个人介绍</div>
    <div class="flex gap-5px items-center mt-10px">
      <i i-solar-folder-path-connect-broken></i>
      <span class="text-12px">前端开发小白</span>
    </div>
    <div class="flex gap-5px items-center mt-10px">
      <i i-solar-history-3-bold></i>
      <span class="text-12px">时长两年半</span>
    </div>
    <div class="flex gap-5px items-center mt-10px">
      <i i-solar-point-on-map-broken></i>
      <span class="text-12px">广州</span>
    </div>
    <div class="flex gap-5px items-center mt-10px">
      <i i-solar-calendar-mark-broken></i>
      <span class="text-12px">24 岁</span>
    </div>
    <div class="mt-auto">
      <img
        alt="github contribution grid snake animation"
        src="https://raw.githubusercontent.com/996wuxian/996wuxian/output/github-contribution-grid-snake.svg"
        style="visibility: visible; max-width: 100%"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.person {
  @apply flex flex-col p-20px b-rd-8px pb-20px min-h-320px max-h-320px ml-10px;
  backdrop-filter: blur(80px) saturate(150%);
}

.person__tags {
  @apply flex items-center mt-10px gap-10px;

  div {
    @apply w-30px h-30px bg-#3B79A9 rd-50% flex-center cursor-pointer;
    transition: all 0.3s;

    &:hover {
      @apply bg-#1F4D9A;
      transition: all 0.3s;
    }
  }
}
</style>

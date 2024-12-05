<template>
  <div class="chat">
    <div class="chat__nav theme-page">
      <div>
        <i i-solar-chat-line-bold-duotone></i>
      </div>
      <div>
        <i i-solar-user-circle-bold-duotone></i>
      </div>
      <div>
        <i i-solar-star-bold-duotone></i>
      </div>
      <div class="mt-auto">
        <i i-solar-settings-minimalistic-bold-duotone></i>
      </div>
    </div>
    <div class="chat__content theme-page">
      <div class="chat__list">
        <div class="chat__search">
          <i i-solar-minimalistic-magnifer-broken></i>
          <input type="text" placeholder="搜索联系人" />
        </div>

        <div class="chat__block">
          <div v-for="item in 5" :key="item" class="chat__item">
            <i class="w-30px h-30px" i-solar-user-circle-bold-duotone></i>
            <div class="chat__info">
              <div class="chat__name">
                <span>wuixan</span>
                <span class="color-gray text-12px">9:20</span>
              </div>
              <div class="color-gray mt-10px">1231231231</div>
            </div>
          </div>
        </div>
      </div>

      <div class="chat__box">
        <div class="flex items-center gap-10px">
          <i class="w-30px h-30px" i-solar-user-circle-bold-duotone></i>
          <span>wuixan</span>
        </div>

        <div class="chat__msg">
          <div class="flex flex-col">
            <div class="flex items-center">
              <i class="w-30px h-30px" i-solar-user-circle-bold-duotone></i>
              <span class="p-10px bg-#3981B4 ml-10px flex items-center rd-10px flex-1"
                >发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息</span
              >
            </div>
            <div class="ml-auto mt-5px text-12px color-gray">2024-11-29</div>
          </div>

          <div class="flex flex-col">
            <div class="flex items-center">
              <i class="w-30px h-30px" i-solar-user-circle-bold-duotone></i>
              <span class="p-10px bg-#3981B4 ml-10px flex items-center rd-10px flex-1"
                >发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息</span
              >
            </div>
            <div class="ml-auto mt-5px text-12px color-gray">2024-11-29</div>
          </div>

          <div class="flex flex-col ml-auto">
            <div class="flex items-center">
              <span class="p-10px bg-#3981B4 mr-10px flex items-center rd-10px flex-1"
                >发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息发送的消息</span
              >
              <i class="w-30px h-30px" i-solar-user-circle-bold-duotone></i>
            </div>
            <div class="ml-auto mt-5px text-12px color-gray">2024-11-29</div>
          </div>

          <div class="flex flex-col ml-auto">
            <div class="flex items-center">
              <span class="p-10px bg-#3981B4 mr-10px flex items-center rd-10px flex-1"
                >发送的消息发送的消</span
              >
              <i class="w-30px h-30px" i-solar-user-circle-bold-duotone></i>
            </div>
            <div class="ml-auto mt-5px text-12px color-gray">2024-11-29</div>
          </div>

          <div class="chat__input">
            <textarea placeholder="请输入" />

            <div class="chat__send">
              <i i-solar-plain-3-broken class="w-20px h-20px cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { awesome } = useAppConfig()
definePageMeta({ layout: 'home' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })
</script>

<style scoped lang="scss">
.chat {
  @apply flex w-full h-full;
}

.chat__nav {
  @apply w-40px b-rd-10px flex flex-col items-center p-10px gap-row-20px pt-30px;
  border-right: 1px solid rgba(238, 238, 238, 0.1);

  div {
    @apply flex p-10px cursor-pointer rd-20px;

    i {
      @apply w-30px h-30px;
      transition: all 0.3s;
    }

    &:hover {
      background: #eee;
      transition: all 0.3s;

      i {
        @apply color-#3981B4;
        transition: all 0.3s;
      }
    }
  }
}

.chat__content {
  @apply flex-1 p-10px rd-10px flex;
}

.chat__list {
  @apply flex flex-col pr-10px h-full overflow-hidden;
  border-right: 1px solid rgba(238, 238, 238, 0.1);
}

.chat__search {
  @apply relative;

  i {
    @apply absolute left-10px top-50% color-#eee;
    transform: translate(0, -50%);
  }

  input {
    @apply h-30px b-none outline-none pl-30px pr-10px bg-transparent color-#eee placeholder-#eee rd-10px max-w-120px;
    background-color: rgba(238, 238, 238, 0.2);
  }
}

.chat__block {
  @apply mt-20px flex flex-col gap-10px;
}

.chat__item {
  @apply flex  gap-10px cursor-pointer  rd-10px p-10px items-center;
  background-color: rgba(238, 238, 238, 0.2);
  transition: all 0.3s;

  &:hover {
    background: #3981b4;
    transition: all 0.3s;
  }
}

.chat__info {
  @apply flex flex-col flex-1 justify-between;
}

.chat__name {
  @apply flex justify-between w-100% items-center;
}

.chat__box {
  @apply flex flex-col px-10px flex-1;
}

.chat__msg {
  @apply mt-10px flex-1 b-rd-10px p-20px flex flex-col gap-15px;
  background-color: rgba(238, 238, 238, 0.2);
}

.chat__input {
  @apply flex mt-auto gap-10px;
  textarea {
    @apply b-none p-10px flex-1 outline-none bg-#3981B4 h-30px rd-14px resize-none color-#eee placeholder-#eee;
  }

  .chat__send {
    @apply px-15px bg-#3981B4 rd-14px cursor-pointer flex-center color-#eee;
  }
}
</style>

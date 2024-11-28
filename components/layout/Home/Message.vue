<template>
  <div class="message theme-page">
    <div class="message__title">
      <i i-solar-chat-round-call-broken></i>
      留言板

      <div class="message__edit">
        <i i-solar-pen-2-broken @click="showModal"></i>
      </div>
    </div>
    <section class="message__list">
      <article
        v-for="item in msgList"
        :key="item.id"
        class="message__card"
        @click="showMsgModal(item)"
      >
        <div class="card__inner">
          <span class="card__pin"></span>
          <!-- <div class="card-image">
                <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
              </div> -->
          <div class="card__meta">
            {{ item.content }}

            <div>
              {{ item.time }}
              <i i-solar-chat-unread-broken></i>
            </div>
          </div>
        </div>
      </article>

      <CommonEmpty v-if="msgList.length === 0" text="留言" />
    </section>
  </div>

  <n-modal v-model:show="modalVisible">
    <n-card
      style="width: 600px"
      title="留言"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <i
          i-solar-close-circle-broken
          class="cursor-pointer w-20px h-20px"
          @click="modalVisible = false"
        >
        </i>
      </template>
      <div class="flex flex-col w-100% relative">
        <textarea
          placeholder="请输入"
          class="bg-slate-200 text-slate-600 h-28 placeholder:text-#333 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-10px p-2 duration-300 text-14px color-#333"
        ></textarea>
        <div class="flex justify-between w-100% b-rd-10px absolute bottom-8px left-0 px-10px">
          <i i-solar-smile-circle-broken class="color-#2C2C32 w-20px h-20px cursor-pointer"></i>

          <div class="flex">
            <i i-solar-plain-3-broken class="color-#2C2C32 w-20px h-20px cursor-pointer"></i>
          </div>
        </div>
      </div>
    </n-card>
  </n-modal>

  <n-modal v-model:show="msgModalVisible">
    <n-card
      style="width: 600px"
      title="评论"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <i
          i-solar-close-circle-broken
          class="cursor-pointer w-20px h-20px"
          @click="msgModalVisible = false"
        >
        </i>
      </template>
      <div class="flex flex-col w-100% relative">
        <div class="bg-#E2E8F0 p-10px b-rd-10px">
          <div class="flex items-center gap-5px mb-10px color-#333">
            <img src="@/assets/imgs/avatar.png" alt="" class="w-20px b-rd-50%" />
            <span>:</span>
            {{ msgData.content }}
          </div>
          <div class="color-gray flex justify-between items-center">
            {{ msgData.time }}

            <div class="hart__btn">
              <svg
                class="empty"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="15"
                height="15"
              >
                <path fill="none" d="M0 0H24V24H0z"></path>
                <path
                  d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                ></path>
              </svg>
              <svg
                class="filled"
                height="15"
                width="15"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H24V24H0z" fill="none"></path>
                <path
                  d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-15px mt-20px">
          <div v-for="(item, index) in msgs" :key="item.id" class="flex flex-col gap-5px">
            <div class="flex items-center gap-5px">
              <img src="@/assets/imgs/avatar.png" alt="" class="w-20px b-rd-50%" />
              <span>:</span>
              <div class="py-5px px-10px bg-#E2E8F0 color-#333 rd-8px w-fit">
                {{ item.content }}
              </div>
            </div>
            <div class="flex justify-between color-gray">
              <div class="flex items-center ml-30px gap-10px mt-3px">
                <i i-solar-chat-line-broken class="cursor-pointer"></i>
                <div class="hart__btn">
                  <svg
                    class="empty"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="10"
                    height="10"
                  >
                    <path fill="none" d="M0 0H24V24H0z"></path>
                    <path
                      d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                    ></path>
                  </svg>
                  <svg
                    class="filled"
                    height="10"
                    width="10"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0H24V24H0z" fill="none"></path>
                    <path
                      d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="text-12px">
                {{ item.time }}
              </span>
            </div>
            <div v-if="item.otherMsg" class="ml-30px">
              <div
                v-for="(child, idx) in item.otherMsg"
                :key="child.id"
                class="flex flex-col gap-5px"
              >
                <div class="flex items-center gap-5px">
                  <img src="@/assets/imgs/avatar.png" alt="" class="w-20px b-rd-50%" />
                  <span>:</span>
                  <div class="py-5px px-10px bg-#E2E8F0 color-#333 rd-8px w-fit">
                    {{ child.content }}
                  </div>
                </div>
                <div class="flex justify-between color-gray">
                  <div class="flex items-center ml-30px gap-10px mt-3px">
                    <i i-solar-chat-line-broken class="cursor-pointer"></i>
                    <div class="hart__btn">
                      <svg
                        class="empty"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="10"
                        height="10"
                      >
                        <path fill="none" d="M0 0H24V24H0z"></path>
                        <path
                          d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
                        ></path>
                      </svg>
                      <svg
                        class="filled"
                        height="10"
                        width="10"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0H24V24H0z" fill="none"></path>
                        <path
                          d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span class="text-12px">
                    {{ child.time }}
                  </span>
                </div>
                <div
                  v-if="idx !== item.otherMsg.length - 1"
                  class="w-100% h-0.05px bg-#E2E8F0 mt-10px"
                ></div>
              </div>
            </div>
            <div v-if="index !== msgs.length - 1" class="w-100% h-0.05px bg-#E2E8F0 mt-10px"></div>
          </div>
        </div>

        <CommonEmpty v-if="msgs.length === 0" text="评论" />

        <div class="flex flex-col w-100% relative">
          <textarea
            placeholder="请输入"
            class="bg-slate-200 text-slate-600 h-80px placeholder:text-#333 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-10px p-2 duration-300 text-14px color-#333 mt-20px"
          ></textarea>
          <div class="flex justify-between w-100% b-rd-10px absolute bottom-8px left-0 px-10px">
            <i i-solar-smile-circle-broken class="color-#2C2C32 w-20px h-20px cursor-pointer"></i>

            <div class="flex">
              <i i-solar-plain-3-broken class="color-#2C2C32 w-20px h-20px cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
interface MsgItem {
  id: number
  content: string
  time: string
}

const msgList = ref<MsgItem[]>([
  {
    id: 1,
    content: '今天要学习vue3',
    time: '2022-11-27'
  },
  {
    id: 2,
    content: '你好，今天还是继续学习vue3',
    time: '2022-11-27'
  },
  {
    id: 1,
    content: '今天要学习vue3',
    time: '2022-11-27'
  },
  {
    id: 2,
    content: '你好，今天还是继续学习vue3',
    time: '2022-11-27'
  }
])

const msgs = ref([
  {
    id: 1,
    content:
      '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
    time: '2024-11-28',
    otherMsg: [
      {
        id: 1,
        content: '嗯，你好',
        time: '2024-11-28'
      }
    ]
  },
  {
    id: 1,
    content:
      '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好',
    time: '2024-11-28'
  }
])

const modalVisible = ref(false)
const msgModalVisible = ref(false)
const msgData = ref()

const showModal = () => {
  modalVisible.value = true
}

const showMsgModal = (item: MsgItem) => {
  msgData.value = item
  msgModalVisible.value = true
}
</script>

<style scoped lang="scss">
.message {
  @apply flex flex-col p-10px b-rd-8px  pb-20px mt-10px min-h-340px max-h-340px;
}

.message__title {
  @apply flex text-14px  color-#eee gap-10px font-700 items-center;
}

.message__edit {
  @apply flex ml-auto cursor-pointer;
  i {
    @apply w-15px h-15px;

    &:hover {
      color: #a4affb;
    }
  }
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

$c-gray-100: #79bee1;
$c-gray-900: #1d1d1d;
$c-yellow-300: #3781b8;
$rotation: -3deg;

.message__list {
  @apply flex overflow-hidden pt-30px pb-10px flex-wrap max-w-250px justify-between;
  row-gap: 60px;
}

.message__card {
  @apply w-[calc(100%/2-10px)] cursor-pointer;
  transform: rotate($rotation);
  transition: 0.15s ease-out;

  &:hover,
  &:focus-within {
    transform: translateY(4px) rotate($rotation);

    .card__inner {
      background-color: $c-gray-100;
    }
    .card__pin:after {
      height: 35px;
    }

    .card-pin:before {
      transform: translatey(-4px);
    }
  }
}

.card__inner {
  @apply flex flex-col b-rd-20px p-5px bg-#9ECCEE relative;
  border: 2px solid $c-gray-900;
  &:after {
    @apply block absolute w-95% h-100% bottom-[-9px] left-[calc(50%-47.5%)] b-rd-20px z-[-1];
    content: '';
    border: 2px solid $c-gray-900;
    background-color: $c-yellow-300;
  }
}

.card__pin {
  // 圈
  @apply w-8px h-8px absolute top-8px left-[calc(50%-6px)] b-rd-50% z-1;
  background-color: $c-gray-900;
  box-shadow:
    0 0 0 2px #fff,
    0 0 0 3px $c-gray-900;
  transform: rotate(3deg);
  &:before,
  &:after {
    @apply block b-rd-50% absolute;
    content: '';
    transition: 0.15s ease-out;
  }

  // 线
  &:before {
    @apply w-12px h-12px bg-black left-[calc(50%-6px)] top-[-30px] b-rd-50%;
  }

  // 上黑圈
  &:after {
    @apply w-6px bg-#fff b-rd-30px h-30px left-[calc(50%-3px)] bottom-3px;
    border: 1px solid;
  }
}

// .card-image {
//   border-radius: 15px;
//   overflow: hidden;
//   aspect-ratio: 4 / 3;
//   position: relative;
//   img {
//     width: 100%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }

.card__meta {
  @apply mt-5px py-10px color-#333 text-13px px-5px line-height-20px flex flex-col;

  div {
    @apply flex justify-between items-center mt-5px color-#666;

    i:hover {
      color: #333;
    }
  }
}

.hart__btn {
  @apply cursor-pointer flex-center p-5px b-none b-rd-50%;
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  transition:
    transform 400ms cubic-bezier(0.68, -0.55, 0.27, 2.5),
    border-color 400ms ease-in-out,
    background-color 400ms ease-in-out;
  word-spacing: -2px;

  &:hover {
    @apply bg-#eee;
    transform: scale(105%);
    animation: movingBorders 3s infinite;

    .empty {
      opacity: 0;
    }

    .filled {
      opacity: 1;
      animation: beatingHeart 1.2s infinite;
    }
  }
}

@keyframes movingBorders {
  0% {
    border-color: #fce4e4;
  }

  50% {
    border-color: #ffd8d8;
  }

  90% {
    border-color: #fce4e4;
  }
}

.filled,
.empty {
  fill: rgb(255, 110, 110);
  transition: opacity 100ms ease-in-out;
}

.filled {
  position: absolute;
  opacity: 0;
}

@keyframes beatingHeart {
  0% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.15);
  }

  60% {
    transform: scale(1);
  }
}
</style>

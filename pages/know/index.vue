<template>
  <div class="know">
    <div class="know__tab">
      <template v-for="item in tabs" :key="item.id">
        <input
          :id="`radio-${item.id}`"
          type="radio"
          name="tabs"
          :checked="tabIndex === item.id"
          @click="changeTab(item.id)"
        />
        <label class="tab" :for="`radio-${item.id}`"
          >{{ item.name
          }}<span v-if="item.count" class="notification">{{ item.count }}</span></label
        >
      </template>
      <span class="glider"></span>
    </div>

    <div class="flex flex-col mt-20px gap-10px flex-1 overflow-auto">
      <div v-for="item in listData" :key="item" class="know__item">
        <div class="font-700">Vue3的响应式原理</div>
        <div class="color-#E3E5E8 line-height-20px">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
        <div class="flex">
          <div class="know__count">
            <div class="flex items-center gap-3px">
              <i i-solar-like-bold-duotone></i>
              <span class="text-12px">100</span>
            </div>
            <div class="flex items-center gap-3px">
              <i i-solar-eye-bold></i>

              <span class="text-12px">100</span>
            </div>
            <div class="flex items-center gap-3px">
              <i i-solar-chat-round-line-bold></i>
              <span class="text-12px">100</span>
            </div>
          </div>

          <div class="ml-auto text-12px">2024-11-29</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { awesome } = useAppConfig()
definePageMeta({ layout: 'home' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })

const tabIndex = ref(1)

const listData = ref()

const changeTab = (id: number) => {
  tabIndex.value = id
  listData.value = tabs.value[id - 1].count
}

const tabs = ref([
  {
    id: 1,
    name: '前端',
    count: 10
  },
  {
    id: 2,
    name: '后端',
    count: 2
  },
  {
    id: 3,
    name: '其他',
    count: 0
  }
])

listData.value = tabs.value[tabIndex.value - 1].count
</script>

<style scoped lang="scss">
.know {
  @apply w-full h-full flex flex-col;
}

.know__tab {
  @apply flex relative rd-10px bg-#eee p-5px gap-10px;
  box-shadow:
    0 0 1px 0 rgba(24, 94, 224, 0.15),
    0 6px 12px 0 rgba(24, 94, 224, 0.15);
}

.know__tab * {
  z-index: 2;
}

.know__tab input[type='radio'] {
  display: none;
}

.tab {
  @apply flex-center h-30px w-50px text-13px color-#333 relative;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  @apply flex-center w-15px h-15px absolute top-[-3px] right-[-3px] text-9px rd-50% bg-#e6eef9;
  transition: 0.15s ease-in;
}

.know__tab input[type='radio']:checked + label {
  color: #185ee0;
}

.know__tab input[type='radio']:checked + label > .notification {
  background-color: #185ee0;
  color: #fff;
  margin: 0px;
}

.know__tab input[id='radio-1']:checked ~ .glider {
  transform: translateX(0);
}

.know__tab input[id='radio-2']:checked ~ .glider {
  transform: translateX(120%);
}

.know__tab input[id='radio-3']:checked ~ .glider {
  transform: translateX(240%);
}

.glider {
  @apply absolute flex w-50px h-30px bg-#c8daf1 z-1 rd-10px;
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .know__tab {
    transform: scale(0.6);
  }
}

.know__item {
  @apply flex bg-#eee rd-10px p-10px flex-col gap-10px cursor-pointer;
  background-color: rgba(238, 238, 238, 0.2);
  transition: all 0.3s;

  &:hover {
    background-color: rgba(238, 238, 238, 0.4);
    transition: all 0.3s;
    font-size: 14px;
  }
}

.know__count {
  @apply flex gap-10px items-center;
}
</style>

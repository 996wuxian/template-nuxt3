<template>
  <div class="todo theme-page">
    <div class="todo__title">
      <i i-solar-checklist-broken></i>
      Todo

      <div class="todo__date">
        <n-popover placement="right-start">
          <template #trigger>
            <div class="flex items-center gap-5px h-25px">
              Tuesday, March 12
              <i i-solar-calendar-broken></i>
            </div>
          </template>
          <div class="w-fit"><n-date-picker panel type="date" /></div>
        </n-popover>
      </div>
    </div>
    <div class="todo__day">
      <div ref="slider" class="date-slider">
        <TransitionGroup name="date-slider" tag="div" class="date-container">
          <div
            v-for="date in dateList"
            :key="date.date"
            class="date-item"
            :class="{
              active: date.date === selectedDate,
              'last-day': date.isLastDay
            }"
            @click="selectDate(date.date)"
          >
            <div class="weekday">{{ date.weekday }}</div>
            <div class="day">{{ date.day }}</div>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <div class="todo__list">
      <CommonEmpty v-if="todoList.length === 0" text="待办事项" />
      <div class="todo__items">
        <div
          v-for="item in todoList"
          :key="item.id"
          class="todo__item todoBg animate__animated"
          :class="item.enter ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'"
        >
          <div>
            <div class="mt-2px">
              <label class="todo__checkbox">
                <input type="checkbox" @change="handleCheck(item)" />
                <svg viewBox="0 0 64 64" height="15px" width="15px">
                  <path
                    d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                    pathLength="575.0541381835938"
                    class="path"
                  ></path>
                </svg>
              </label>
            </div>
            <n-collapse arrow-placement="right">
              <n-collapse-item
                :disabled="item.status"
                title="todo"
                name="1"
                style="--n-title-text-color: #eee; --n-arrow-color: #eee"
              >
                <div class="color-#eee">可以</div>
              </n-collapse-item>
            </n-collapse>
          </div>

          <i i-solar-pen-2-broken @click="showModal"></i>

          <n-popconfirm
            :show-icon="false"
            negative-text="取消"
            positive-text="确认"
            @positive-click="deleteTodo(item)"
          >
            <template #trigger>
              <i i-solar-trash-bin-minimalistic-2-broken></i>
            </template>
            是否确认删除?
          </n-popconfirm>
        </div>
      </div>

      <div class="todo__btn" @click="add">
        <div class="flex flex-col gap-10px">
          <span>总完成 : 20</span>
          <span>未完成 : 10</span>
        </div>
        <i i-solar-traffic-economy-broken></i>
      </div>
    </div>
  </div>

  <n-modal v-model:show="editModalVisible">
    <n-card
      style="width: 600px"
      title="修改"
      :bordered="false"
      size="small"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <i
          i-solar-close-circle-broken
          class="cursor-pointer w-20px h-20px"
          @click="editModalVisible = false"
        >
        </i>
      </template>
      <n-form ref="formRef" inline :label-width="80" :model="formData">
        <n-grid :cols="24" :x-gap="24">
          <n-form-item-gi :span="24" label="标题" path="title">
            <n-input v-model:value="formData.title" placeholder="请输入" />
          </n-form-item-gi>
          <n-form-item-gi :span="24" label="内容" path="content">
            <n-input
              v-model:value="formData.content"
              placeholder="请输入"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5
              }"
            />
          </n-form-item-gi>
        </n-grid>
      </n-form>

      <template #footer>
        <div class="text-right">
          <n-button>确认</n-button>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import gsap from 'gsap'

interface TodoItem {
  id?: number
  title?: string
  content?: string
  createdAt?: string
  status?: boolean
  enter?: boolean
}

const todoList = ref<TodoItem[]>([])

const add = () => {
  todoList.value.push({
    id: todoList.value.length + 1,
    title: '测试',
    content: '测试',
    createdAt: '2023-05-01',
    status: false,
    enter: true
  })
}

const handleCheck = (item: TodoItem) => {
  item.status = !item.status
}

const deleteTodo = (item: TodoItem) => {
  item.enter = false
  setTimeout(() => {
    todoList.value = todoList.value.filter(_item => _item.id !== item.id)
  }, 500)
}

const editModalVisible = ref(false)

const showModal = () => {
  editModalVisible.value = true
}

const formData = ref<TodoItem>({})

const slider = ref<HTMLElement | null>(null)
const selectedDate = ref(new Date().getDate())

// 生成日期数据，确保选中日期不会是最后一个
const dateList = computed(() => {
  const dates = []
  const today = new Date()
  const currentMonth = today.getMonth()
  const lastDayOfMonth = new Date(today.getFullYear(), currentMonth + 1, 0).getDate()

  // 获取选中日期的位置
  const selectedIndex = selectedDate.value

  // 计算要显示的日期范围
  let startDate = selectedIndex - 3
  let endDate = selectedIndex + 3

  // 如果选中日期是当月最后一天，则向前多显示一天
  if (selectedIndex === lastDayOfMonth) {
    startDate -= 1
    endDate -= 1
  }
  // 否则确保选中日期后至少有一天
  else if (endDate <= selectedIndex) {
    endDate = selectedIndex + 1
  }

  // 确保不超出月份范围
  startDate = Math.max(1, startDate)
  endDate = Math.min(lastDayOfMonth, endDate)

  for (let i = startDate; i <= endDate; i++) {
    const date = new Date(today.getFullYear(), currentMonth, i)
    dates.push({
      date: i,
      weekday: date.toLocaleDateString('zh-CN', { weekday: 'short' }),
      day: i,
      isLastDay: i === lastDayOfMonth
    })
  }

  return dates
})
// 处理日期选择并滚动到合适位置
const selectDate = (date: number) => {
  selectedDate.value = date

  // 滚动到合适位置，确保选中日期在可视区域偏左
  nextTick(() => {
    if (!slider.value) return
    const selectedElement = slider.value.querySelector('.active')
    if (selectedElement) {
      const elementLeft = selectedElement.getBoundingClientRect().left
      const containerLeft = slider.value.getBoundingClientRect().left
      const scrollAmount = elementLeft - containerLeft - 50 // 50px作为左侧偏移

      slider.value.scrollTo({
        left: slider.value.scrollLeft + scrollAmount,
        behavior: 'smooth'
      })
    }
  })
}

// 添加触摸滑动功能
onMounted(() => {
  gsap.to('.todo', { duration: 1, x: '20%', opacity: 1 })

  if (!slider.value) return

  let startX = 0
  let scrollLeft = 0

  slider.value.addEventListener('mousedown', e => {
    startX = e.pageX - slider.value!.offsetLeft
    scrollLeft = slider.value!.scrollLeft
  })

  slider.value.addEventListener('mousemove', e => {
    if (!e.buttons) return
    e.preventDefault()
    const x = e.pageX - slider.value!.offsetLeft
    const walk = (x - startX) * 2
    slider.value!.scrollLeft = scrollLeft - walk
  })
})
</script>

<style scoped lang="scss">
.todo {
  @apply flex flex-col p-10px b-rd-8px min-w-250px pb-20px;
  flex: 1 1 0%;
  background: rgba(22, 30, 40, 0.35);
  backdrop-filter: blur(80px) saturate(150%);
  opacity: 0;
}

.todo__title {
  @apply flex  color-#eee gap-10px font-700 items-center;
}

.todo__date {
  @apply font-400 text-12px ml-auto cursor-pointer;
  transition: all 0.3s;

  &:hover {
    @apply color-#2BE0B3;
    transition: all 0.3s;
  }
}

.todo__day {
  @apply max-w-230px overflow-hidden;
  -moz-user-select: none; /* Firefox私有属性 */
  -webkit-user-select: none; /* WebKit内核私有属性 */
  -ms-user-select: none; /* IE私有属性(IE10及以后) */
  -khtml-user-select: none; /* KHTML内核私有属性 */
  -o-user-select: none; /* Opera私有属性 */
  user-select: none; /* CSS3属性 */
}

.date-slider {
  @apply flex gap-15px overflow-x-auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.date-container {
  @apply flex gap-10px py-10px px-5px;
  scroll-behavior: smooth;
}

.date-item {
  @apply flex-center flex-col py-8px px-10px b-rd-8px cursor-pointer;
  flex-shrink: 0;
  transition: all 0.3s;
  position: relative; /* 添加 relative 定位 */
  z-index: 1; /* 确保内容在顶层 */

  &.active {
    @apply bg-#E7E6FF;
    .weekday,
    .day {
      @apply color-#0C3D85;
      transition: all 0.3s;
    }
  }
}

.weekday {
  @apply text-10px color-#eee mb-5px font-600;
}

.day {
  @apply text-10px color-#eee font-600;
  transition: all 0.3s;
}

/* 日期项进入和离开的动画 */
.date-slide-move {
  transition: all 0.3s ease;
}

.date-slide-enter-active,
.date-slide-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
  width: 100%;
}

.date-slide-enter-from,
.date-slide-leave-to {
  opacity: 0;
}

.todo__list {
  @apply mt-10px;
}

.todo__items {
  @apply flex flex-col gap-10px max-h-200px overflow-auto;
  user-select: none;
}

.todo__item {
  @apply flex color-#eee justify-between b-rd-8px;
  padding: 8px 10px;
  background-color: var(-todoBg);

  & > div {
    @apply flex color-#eee gap-10px w-100%;

    &:deep() {
      .n-collapse-item-arrow {
        margin-left: auto !important;
        margin-top: 2px;
      }
    }
  }

  i {
    @apply ml-10px mt-3px cursor-pointer w-20px h-20px;
    transition: all 0.3s;

    &:nth-child(2) {
      &:hover {
        @apply color-#2A3347;
      }
    }

    &:nth-child(3) {
      &:hover {
        @apply color-red;
      }
    }
  }
}

.todo__btn {
  @apply w-100% mt-20px b-rd-10px cursor-pointer flex justify-between items-center text-14px;
  box-shadow: 0 2px 10px rgba(30, 93, 164, 0.2);

  i {
    @apply w-30px h-30px color-#eee;
    transition: all 0.3s;

    &:hover {
      transform: rotate(180deg);
      transition: all 0.3s;
    }
  }
}

/* From Uiverse.io by SelfMadeSystem */
.todo__checkbox {
  cursor: pointer;
}

.todo__checkbox input {
  display: none;
}

.todo__checkbox svg {
  overflow: visible;
}

.todo__checkbox .path {
  fill: none;
  stroke: white;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition:
    stroke-dasharray 0.5s ease,
    stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.todo__checkbox input:checked ~ svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
  stroke: #babfc1;
}
</style>

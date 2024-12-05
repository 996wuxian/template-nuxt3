<template>
  <div class="flex w-full h-full">
    <div class="max-w-230px theme-page p-10px rd-10px">
      <div class="search">
        <i i-solar-minimalistic-magnifer-broken></i>
        <input type="text" placeholder="搜索歌曲" />
      </div>

      <div class="block">
        <div v-for="item in 10" :key="item" class="block__item">
          <div class="w-100%">
            <div class="flex items-center justify-between">
              <span>丑奴儿</span>
              <span class="color-gray text-12px">4:20</span>
            </div>
            <div class="color-gray mt-10px">
              草东没有派对
              <i></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="music__content">
      <div class="player" :class="{ 'is-playing': isPlaying, 'is-stopped': !isPlaying }">
        <div class="record">
          <div class="label">
            <h2>我们</h2>
          </div>
          <div class="spindle"></div>
        </div>
        <div class="arm-container">
          <div class="knob weight bottom"></div>
          <div class="arm"></div>
          <div class="knob weight top">
            <button class="play" @click="togglePlay"></button>
          </div>
        </div>
        <div class="speaker">
          <div class="hole"></div>
          <div class="hole"></div>
          <div class="hole"></div>
          <div class="hole"></div>
          <div class="hole"></div>
          <div class="hole"></div>
          <div class="hole"></div>
          <div class="hole"></div>
        </div>
        <div class="knob volume bottom">
          <div class="down"></div>
          <div class="up"></div>
        </div>
        <div class="knob volume top"></div>
      </div>
      <div class="music__lyric flex flex-col gap-20px max-h-300px overflow-auto w-80% text-center">
        <div v-for="item in 20" :key="item" class="lyric__item text-14px ml-20px">
          我听着那少年的声音
        </div>
      </div>
      <div class="music__time">
        <p class="musicTime__current">00:12</p>
        <div class="flex flex-col items-center gap-5px text-15px">
          我们
          <span>草东没有派对</span>
        </div>
        <p class="musicTime__last">04:48</p>
      </div>
      <div id="progress" class="music__bar">
        <div id="length" class="music__bar__length">
          <div class="button music__bar__circle">
            <div class="music__bar__circlePoint"></div>
          </div>
        </div>
      </div>
      <div class="flex mt-20px items-center text-20px justify-between w-80%">
        <div class="flex cursor-pointer">
          <i i-solar-repeat-line-duotone></i>
          <i v-show="false" i-solar-repeat-one-line-duotone></i>
        </div>

        <div class="music__button">
          <span>
            <i i-solar-skip-previous-bold></i>
          </span>
        </div>
        <div class="music__button">
          <span>
            <i i-solar-play-bold></i>
            <i v-show="false" i-solar-pause-bold></i>
          </span>
        </div>
        <div class="music__button">
          <span>
            <i i-solar-skip-next-bold></i>
          </span>
        </div>
        <div class="flex cursor-pointer">
          <i i-solar-volume-loud-broken></i>
          <i v-show="false" i-solar-volume-cross-broken></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { awesome } = useAppConfig()
definePageMeta({ layout: 'home' })
useHead({ titleTemplate: '首页', title: awesome?.name || 'text' })

const isPlaying = ref(false)

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
}
</script>

<style scoped lang="scss">
.search {
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

.block {
  @apply mt-20px flex flex-col gap-10px h-[calc(100%-50px)] overflow-auto pb-10px;
}

.block__item {
  @apply flex  gap-10px cursor-pointer  rd-10px p-10px items-center;
  background-color: rgba(238, 238, 238, 0.2);
  transition: all 0.3s;

  &:hover {
    background: #3981b4;
    transition: all 0.3s;
  }
}

@import url(https://fonts.googleapis.com/css?family=Dosis:400,700);

$color-arm: #ededed;
$color-bg: #f7f7f7;
$color-knob: $color-arm;
$color-player: #f4f3f2;
$color-player-border: #aeaeae;
$color-record: #363636;
$color-record-label: #ff4e5b;
$color-record-label-text: darken($color-record-label, 40%);
$color-speaker: #262626;
$color-spindle: #ededed;

@mixin pos($position: absolute) {
  @apply top-0 right-0 bottom-0 left-0 m-auto;
  position: $position;
}

@mixin circle {
  &:after {
    @apply block pb-100%;
    content: '';
  }
}

@mixin bg-lines(
  $c1: darken($color-record-label, 5%),
  $c2: $color-record-label,
  $px1: 1px,
  $px2: 3px,
  $deg: -45deg
) {
  background: repeating-linear-gradient($deg, $c1, $c1 $px1, $c2 $px1, $c2 $px2);
}

@mixin gradient-knob {
  background: linear-gradient(to right, rgba(242, 242, 242, 1) 0%, rgba(254, 254, 254, 1) 100%);
}

.music__content {
  @apply box-border w-full h-full flex items-center flex-col justify-center;
}

.player {
  @apply relative w-60% rd-25% box-border w-180px h-180px my-20px;
  background-color: $color-player;
  @include bg-lines(darken($color-player, 5%), $color-player, 1px, 10%, 90deg);
  border: 1px solid $color-player-border;
  box-shadow:
    inset rgba(white, 1) 0 0 2px 1px,
    inset rgba(black, 0.06) 0 0 48px,
    rgba(black, 0.2) 0 15px 30px -10px;
  @include circle;
  &:before {
    @apply w-full h-full rd-25%;
    content: '';
    @include pos;
    @include bg-lines(darken($color-player, 2%), transparent, 1px, 4px, -45deg);
  }
}

.record {
  @apply w-70% h-70% box-border rd-100%;
  @include pos;
  background-color: $color-record;
  background: linear-gradient(
    to right,
    rgba(54, 54, 54, 1) 0%,
    rgba(102, 102, 102, 1) 40%,
    rgba(97, 97, 97, 1) 60%,
    rgba(31, 30, 31, 1) 100%
  );
  box-shadow:
    inset darken($color-record, 20%) 0 0 0 1px,
    inset rgba(white, 0.3) 0 0 0 2px;
  transform: rotate(0) translateZ(0);
  &:before,
  &:after {
    content: '';
    @include pos;
    background: linear-gradient(
      to right,
      rgba(54, 54, 54, 1) 0%,
      rgba(102, 102, 102, 1) 41%,
      rgba(97, 97, 97, 1) 61%,
      rgba(31, 30, 31, 1) 100%
    );
    border-radius: 100%;
  }
  &:before {
    @apply w-88% h-88%;
    background-color: lighten($color-record, 10%);
    box-shadow:
      inset darken($color-record, 10%) 0 0 0 1px,
      inset rgba(white, 0.4) 0 0 0 2px,
      inset darken($color-record, 5%) 0 0 0 3px;
  }
  &:after {
    @apply w-48% h-48%;
    background-color: $color-record;
    box-shadow:
      inset rgba(black, 0.2) 0 0 0 1px,
      rgba(black, 0.1) 0 0 2px 3px;
    transform: rotate(5deg);
  }
}

.record .label {
  @apply w-36% h-36% px-6% py-4.5% text-center rd-100% box-border z-2;
  @include pos;
  background-color: $color-record-label;
  @include bg-lines;
  &:before,
  &:after {
    @apply rd-100% z-[-1];
    content: '';
    @include pos;
  }
  &:before {
    @apply w-35% h-35%;
    background-color: darken($color-record-label, 6%);
  }
  &:after {
    @apply w-30% h-30%;
    @include bg-lines;
  }
  h2 {
    @apply font-700 text-9px z-4 color-#fff;
  }
  p {
    @apply absolute top-50% right-10% bottom-0 m-auto;
  }
}

.spindle {
  @apply w-25% h-25% bg-black rd-100% z-3;
  @include pos;
  box-shadow: rgba(black, 0.1) 0 0 12px 2px;
  transform: scale(0.2);
  &:before {
    @apply w-70% h-70% rd-100% z-4;
    content: '';
    @include pos;
    background-color: $color-spindle;
    background: linear-gradient(
      left,
      rgba(226, 226, 226, 1) 0%,
      rgba(209, 209, 209, 1) 51%,
      rgba(219, 219, 219, 1) 51%,
      rgba(254, 254, 254, 1) 100%
    );
  }
}

.arm-container {
  @apply absolute w-30% h-5% top-15% right-19%;
  transform-origin: 94.2%;
  transform: rotate(-120deg);
}

.arm {
  @apply absolute top-0 right-[-25%] w-full h-full rd-[12px] z-[2];
  background-color: $color-arm;
  @include gradient-knob;
  border: 1px solid darken($color-arm, 4%);
  box-shadow:
    inset white 0 -1px 2px,
    inset rgba(black, 0.1) -2px -4px 12px,
    rgba(black, 0.06) -4px 4px 6px;
}

.knob {
  @apply absolute rd-full z-[2];
  background-color: $color-knob;
  @include circle;
  transform: translateZ(0);
  &.bottom {
    background-color: darken($color-knob, 6%);
    border: 1px solid darken($color-knob, 8%);
    border-radius: 100%;
  }
  &.top {
    @include gradient-knob;
    border: 1px solid darken($color-knob, 4%);
    box-shadow:
      inset white 0 -1px 2px,
      inset rgba(black, 0.06) -6px -6px 18px,
      rgba(black, 0.06) -4px 4px 6px,
      rgba(black, 0.15) 2px 2px 6px;
  }
}

.weight {
  &.bottom {
    @apply top-[-61%] right-[-13.5%] w-38%;
  }
  &.top {
    @apply top-[-40%] right-[-9.5%] w-30%;
    &:before {
      @apply absolute top-35% right-245% w-25% h-25% rd-100% z-4;
      content: '';
      background-color: lighten($color-record-label, 5%);
      border: 1px solid darken($color-record-label, 2%);
      box-shadow: inset rgba(white, 0.6) 2px 2px 4px;
      transform: translateZ(0);
    }
  }
}

button.play {
  @apply w-full h-full b-none bg-transparent rd-100% outline-none cursor-pointer;
  @include pos;
  font-family: 'Dosis', sans-serif;
  transform: rotate(120deg);
}

.volume {
  &.bottom {
    @apply bottom-[13.5%] left-14% w-11%;
    transform: translateZ(0);
    div {
      @apply absolute w-20% h-5%;
      background-color: darken($color-knob, 10%);
      transform: translateZ(0);
      &:first-child {
        @apply bottom-110% right-80%;
      }
      &:last-child {
        @apply top-85% left-105%;
        &:after {
          @apply w-100% h-100% bg-inherit;
          content: '';
          @include pos;
          transform: rotate(90deg);
        }
      }
    }
  }
  &.top {
    @apply bottom-14.8% left-15.3% w-8.5%;
    &:before {
      @apply bottom-55% w-5% h-25% rd-24px;
      content: '';
      @include pos;
      background-color: darken($color-knob, 10%);
    }
  }
}

.speaker {
  @apply absolute right-5% bottom-4% w-20%;
  @include circle;
  transform: scale(0.4);
  .hole {
    @apply mr-12% mb-12% w-13% float-left rd-100%;
    @include circle;
    background-color: $color-speaker;
  }
}

.record {
  .is-playing & {
    animation: spin-on 4s 0.51s linear infinite;
  }
  .is-stopped & {
    animation: spin-off 0.51s ease-out forwards;
  }
}

.arm-container {
  .is-stopped & {
    animation: arm-off 0.51s ease-out forwards;
  }
  .is-playing & {
    animation:
      arm-on 0.5s 0.01s ease-out forwards,
      arm-playing 3s 0.51s linear infinite;
  }
}

.music__time {
  @apply w-80% flex justify-between text-12px color-#a3a496 items-end mt-20px mb-15px;
}

.music__bar {
  @apply w-78% h-4px rd-5px bg-#f5f6e7 cursor-pointer relative;

  &__length {
    @apply block w-0% bg-#9eccee h-100% rd-5px;
    transition: width linear 200ms;
  }
  &__circle {
    @apply absolute left-0 top-0 w-24px h-24px block rd-50% flex-center mt-1px;
    transform: translate(-50%, -50%);

    &::before {
      @apply absolute left-50% top-50% bg-#f5f6e7 w-60% h-60% inline-block rd-50% z-[-1];
      transform: translate(-50%, -50%);
      content: '';
      box-shadow: 0px 1px 5px #9eccee;
      background-size: 50%;
      background-repeat: no-repeat;
    }
  }
  &__circlePoint {
    @apply w-7px h-7px rd-50% bg-#154994;
  }
}

.music__button {
  @apply flex-center w-40px h-40px rd-50% border-none cursor-pointer text-15px;
  background: #4b5574;
  transition: all 0.3s;

  span {
    @apply flex-center border-box w-100% h-100% rd-50% bg-#164995;
    // border: 2px solid #2b6188;
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateY(-4px);
    transition: all 0.3s;
  }
  &:active span {
    transform: translateY(0);
    transition: all 0.3s;
  }
}

@keyframes tooltip {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin-on {
  to {
    transform: rotate(360deg) translateZ(0);
  }
}

@keyframes spin-off {
  to {
    transform: rotate(360deg) translateZ(0);
  }
}

@keyframes arm-playing {
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-47deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}

@keyframes arm-off {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-120deg);
  }
}

@keyframes arm-on {
  100% {
    transform: rotate(-45deg);
  }
}
</style>

<template>
  <div class="switch">
    <input :checked="modelValue === 'light'" type="checkbox" name="toggle" @input="handleInput" />

    <label for="toggle">
      <i class="bulb">
        <span class="bulb-center"></span>
        <span class="filament-1"></span>
        <span class="filament-2"></span>
        <span class="reflections">
          <span></span>
        </span>
        <span class="sparks">
          <i class="spark1"></i>
          <i class="spark2"></i>
          <i class="spark3"></i>
          <i class="spark4"></i>
        </span>
      </i>
    </label>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel('modelValue', { type: String })

const handleInput = () => {
  if (modelValue.value === 'light') {
    modelValue.value = 'dark'
  } else {
    modelValue.value = 'light'
  }
}
</script>

<style scoped>
.switch {
  position: relative;
}
.switch input {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 100;
  cursor: pointer;
}
.switch label {
  height: 24px;
  width: 48px;
  background-color: #0f2a71;
  border-radius: 12px;
  display: block;
  box-shadow:
    inset 0 0 6px rgba(0, 0, 0, 0.2),
    inset 0 0 1px -1px rgba(0, 0, 0, 0.4);
}
.switch label .bulb {
  height: 18px;
  width: 18px;
  background-color: #0f2a71;
  border-radius: 50%;
  position: relative;
  top: 3px;
  left: 3px;
  display: block;
  transition: 0.7s;
  box-shadow:
    inset 0 0 1px 1px #13428e,
    inset 0 0 2px 3px #13428e,
    0 6px 9px -3px rgba(0, 0, 0, 0.4);
}
.switch label .bulb .bulb-center {
  position: absolute;
  display: block;
  height: 8px;
  width: 8px;
  background-color: #13428e;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transition: 0.7s;
  transform: translate(-50%, -50%);
  box-shadow: inset 0 0 0 1px #13428e;
}
.switch label .bulb .bulb-center:after {
  content: '';
  display: block;
  height: 4px;
  width: 4px;
  background-color: #13428e;
  border-radius: 50%;
  position: absolute;
  transition: 0.7s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 1px 1px #13428e;
}
.switch label .bulb .filament-1,
.switch label .bulb .filament-2 {
  position: absolute;
  display: block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.switch label .bulb .filament-1:after,
.switch label .bulb .filament-2:after,
.switch label .bulb .filament-1:before,
.switch label .bulb .filament-2:before {
  content: '';
  display: block;
  height: 2px;
  width: 5px;
  border-radius: 50%;
  border: 1px solid #13428e;
  position: absolute;
  transition: 0.7s;
  top: -1px;
  left: -1px;
  transform: rotate(-10deg);
}
.switch label .bulb .filament-1:before,
.switch label .bulb .filament-2:before {
  left: 4px;
  transform: rotate(10deg);
}
.switch label .bulb .filament-2 {
  transform: translate(-50%, -50%) rotate(45deg) !important;
}
.reflections {
  height: 100%;
  width: 100%;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  z-index: 90;
  perspective: 20px;
}
.reflections span {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-image: linear-gradient(-135deg, transparent 10%, rgba(255, 255, 255, 0.3));
  position: absolute;
  left: -9px;
  bottom: -11px;
}
.reflections span:after {
  content: '';
  display: block;
  height: 8px;
  width: 5px;
  position: absolute;
  top: -8px;
  right: -9px;
  border-radius: 50%;
  box-shadow: 1px -1px 0 -1px rgba(255, 255, 255, 0.4);
  filter: blur(1px);
  transform: rotate(-10deg);
}
.reflections:after {
  content: '';
  display: block;
  height: 18px;
  width: 12px;
  background-image: linear-gradient(80deg, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0.5));
  border-radius: 10% 20% 50% 30%/30% 60% 30% 40%;
  position: absolute;
  transform-style: preserve-3d;
  transform: rotateX(-25deg) rotate(-35deg) skewx(-15deg) translate(3px, -6px);
  top: -2px;
  left: -2px;
}
.reflections:before {
  content: '';
  display: block;
  position: absolute;
  height: 3px;
  width: 9px;
  background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15));
  bottom: 3px;
  right: 0px;
  transform: rotate(45deg);
}
.sparks .spark1 {
  display: block;
  height: 1px;
  width: 1px;
  background-color: #d1b82b;
  position: absolute;
  right: -1px;
  border-radius: 50%;
  bottom: 5px;
  transition: 0.4s;
  opacity: 0;
}
.sparks .spark2 {
  display: block;
  height: 1px;
  width: 1px;
  background-color: #d1b82b;
  position: absolute;
  right: 5px;
  border-radius: 50%;
  bottom: 18px;
  transition: 0.4s;
  opacity: 0;
}
.sparks .spark3 {
  display: block;
  height: 1px;
  width: 1px;
  background-color: #d1b82b;
  position: absolute;
  left: 5px;
  border-radius: 50%;
  bottom: 18px;
  transition: 0.4s;
  opacity: 0;
}
.sparks .spark4 {
  display: block;
  height: 1px;
  width: 1px;
  background-color: #d1b82b;
  position: absolute;
  left: 5px;
  border-radius: 50%;
  bottom: 5px;
  transition: 0.4s;
  opacity: 0;
}
.switch input:checked ~ label .bulb {
  left: 27px;
  background-color: #a7694a;
  box-shadow:
    inset 0 0 1px 1px #a56758,
    inset 0 0 2px 3px #6b454f,
    0 6px 9px -3px rgba(0, 0, 0, 0.4),
    0 0 10px 12px rgba(253, 184, 67, 0.1);
}
.switch input:checked ~ label .bulb > .bulb-center {
  background-color: #feed6b;
  box-shadow:
    inset 0 0 0 1px #fdec6a,
    0 0 4px 3px #bca83c,
    0 0 6px 4px #a1664a;
}
.switch input:checked ~ label .bulb > .bulb-center:after {
  background-color: #fef401;
  box-shadow: 0 0 1px 1px #fdb843;
}
.switch input:checked ~ label .bulb > .filament-1:before,
.switch input:checked ~ label .bulb > .filament-2:before,
.switch input:checked ~ label .bulb > .filament-1:after,
.switch input:checked ~ label .bulb > .filament-2:after {
  border-color: #fef4d5;
}
.switch input:checked ~ label .bulb > .sparks .spark1 {
  height: 1px;
  width: 1px;
  -webkit-animation: spark1 2s ease-in-out;
  animation: spark1 2s ease-in-out;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.switch input:checked ~ label .bulb > .sparks .spark2 {
  height: 1px;
  width: 1px;
  -webkit-animation: spark2 2.4s ease-in-out;
  animation: spark2 2.4s ease-in-out;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.switch input:checked ~ label .bulb > .sparks .spark3 {
  height: 1px;
  width: 1px;
  -webkit-animation: spark3 2s ease-in-out;
  animation: spark3 2s ease-in-out;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
.switch input:checked ~ label .bulb > .sparks .spark4 {
  height: 1px;
  width: 1px;
  -webkit-animation: spark4 1.7s ease-in-out;
  animation: spark4 1.7s ease-in-out;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes spark1 {
  0% {
    right: -1px;
    height: 1px;
    width: 1px;
    opacity: 0;
  }
  20% {
    height: 1px;
    width: 1px;
    right: 0px;
    opacity: 1;
  }
  30% {
    right: -1px;
    opacity: 1;
    height: 1px;
    width: 1px;
  }
  70% {
    height: 1px;
    width: 1px;
  }
  100% {
    right: -12px;
    bottom: 10px;
    opacity: 0;
  }
}
@keyframes spark1 {
  0% {
    right: -1px;
    height: 1px;
    width: 1px;
    opacity: 0;
  }
  20% {
    height: 1px;
    width: 1px;
    right: 0px;
    opacity: 1;
  }
  30% {
    right: -1px;
    opacity: 1;
    height: 1px;
    width: 1px;
  }
  70% {
    height: 1px;
    width: 1px;
  }
  100% {
    right: -12px;
    bottom: 10px;
    opacity: 0;
  }
}
@-webkit-keyframes spark2 {
  0% {
    height: 1px;
    width: 1px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    right: -5px;
    bottom: 24px;
    opacity: 0;
  }
}
@keyframes spark2 {
  0% {
    height: 1px;
    width: 1px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    right: -5px;
    bottom: 24px;
    opacity: 0;
  }
}
@-webkit-keyframes spark3 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    height: 1px;
    width: 1px;
  }
  100% {
    left: 0px;
    bottom: 24px;
    opacity: 0;
    height: 1px;
    width: 1px;
  }
}
@keyframes spark3 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    height: 1px;
    width: 1px;
  }
  100% {
    left: 0px;
    bottom: 24px;
    opacity: 0;
    height: 1px;
    width: 1px;
  }
}
@-webkit-keyframes spark4 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    height: 1px;
    width: 1px;
  }
  100% {
    left: -5px;
    bottom: -3px;
    opacity: 0;
    height: 1px;
    width: 1px;
  }
}
@keyframes spark4 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    height: 1px;
    width: 1px;
  }
  100% {
    left: -5px;
    bottom: -3px;
    opacity: 0;
    height: 1px;
    width: 1px;
  }
}
</style>

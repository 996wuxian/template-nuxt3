<template>
  <div class="login">
    <div class="login__content">
      <h1 class="login__title">Carper Diem</h1>
      <div class="login__form">
        <div class="login__input">
          <i i-solar-letter-unread-broken></i>
          <input placeholder="邮箱" type="text" name="text" class="input" />
        </div>

        <div class="login__input">
          <i i-solar-shield-keyhole-broken></i>
          <input placeholder="验证码" type="text" name="text" class="input" />
        </div>

        <button class="login__btn" @click="login">登录</button>

        <ClientOnly>
          <div class="login__third">
            <div>
              <svg-icon name="github"></svg-icon>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

const login = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.login {
  @apply w-100vw h-100vh flex-center;
  background: url('@/assets/imgs/bg-blue.svg') no-repeat center center;
  background-size: cover;
}

.login__content {
  @apply p-40px b-rd-8px w-300px min-w-300px flex flex-col;
}

.login__title {
  @apply color-white text-center text-32px mb-40px font-700;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px;
}

.login__form {
  @apply p-40px b-rd-12px flex flex-col gap-20px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
}

.login__input {
  @apply w-100% relative;

  & > i {
    @apply flex absolute left-10px top-50% z-999;
    transform: translateY(-50%);
  }

  & > input {
    @apply outline-none w-[calc(100%-45px)]  pl-35px h-35px b-rd-5px bg-#b7cfe3;
    border: 1px solid #b7cfe3;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;

    &:hover {
      box-shadow: 0px 0px 20px -17px;
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

.login__btn {
  @apply mt-10px py-10px b-none outline-none bg-#151515 color-#eee b-rd-7px font-600 cursor-pointer;
  transition: all 0.25s ease-out;

  &:hover {
    transform: translateY(-3px);
  }
}

.login__third {
  @apply flex justify-center items-center;

  & > div {
    @apply p-6px bg-#AFBDD7 b-rd-50% cursor-pointer;
  }
}
</style>

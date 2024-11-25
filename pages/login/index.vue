<template>
  <div class="login">
    <div class="login__content">
      <h1 class="login__title">Carper Diem</h1>
      <div class="login__form">
        <div class="phone-input">
          <span class="area-code">+86</span>
          <input type="text" placeholder="手机号" />
          <span class="verify-link">获取验证码</span>
        </div>

        <div class="verify-input">
          <input type="text" placeholder="6位验证码" />
        </div>

        <div class="agreement">
          <input id="agree" type="checkbox" />
          <label for="agree">
            我已阅读并同意
            <a href="#">服务协议</a> 和
            <a href="#">隐私政策</a>
          </label>
        </div>

        <button class="login-btn">登录</button>

        <div class="social-login">
          <!-- <a href="#"><img src="[GitHub图标]" alt="GitHub" /></a> -->
          <!-- <a href="#"><img src="[微信图标]" alt="WeChat" /></a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以添加需要的逻辑
</script>

<style scoped lang="scss">
.login {
  @apply w-100vw h-100vh flex-center;
  background: url('@/assets/imgs/bg-blue.svg') no-repeat center center;
  background-size: cover;
}

.login__content {
  @apply p-40px b-rd-8px w-400px flex flex-col;
}

.login__title {
  color: white;
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  font-weight: 700;
}

.login__form {
  @apply p-40px b-rd-10px;
  padding: 30px 48px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  border-radius: 12px;
}

.phone-input,
.verify-input {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.area-code {
  color: white;
  margin-right: 10px;
}

input {
  background: transparent;
  border: none;
  color: white;
  flex: 1;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.verify-link {
  color: #4a90e2;
  cursor: pointer;
}

.agreement {
  color: white;
  margin: 15px 0;
}

.agreement a {
  color: #4a90e2;
  text-decoration: none;
}

.login-btn {
  width: 100%;
  background: #000;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  margin: 20px 0;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-login img {
  width: 24px;
  height: 24px;
}
</style>

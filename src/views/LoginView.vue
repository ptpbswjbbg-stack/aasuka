<template>
  <div class="login-container">
    <h1>体检预约-登录</h1>
    <div class="form-box">
      <div class="input-item">
        <i class="user-icon"></i>
        <input type="text" placeholder="输入手机号" v-model="phone" />
      </div>
      <div class="input-item">
        <i class="lock-icon"></i>
        <input type="password" placeholder="输入密码" v-model="password" />
      </div>
      <div class="link-group">
        <router-link to="/register">注册</router-link>
        <router-link to="/forgot">忘记密码?</router-link>
      </div>
      <button class="login-btn" @click="handleLogin">登录</button>
    </div>
    <div class="service-info">
      <p>有疑问请联系客服</p>
      <p>4008-XXX-XXX</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      phone: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      if (!this.phone || !this.password) {
        alert('手机号和密码不能为空');
        return;
      }
      console.log('登录请求：', { phone: this.phone, password: this.password });
      // 登录成功后跳转到首页
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right top, #2c7be5, #66d37e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.login-container h1 {
  font-size: 28px;
  margin-bottom: 30px;
}

.form-box {
  width: 320px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
}

.input-item {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 0 10px;
}

.input-item i {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  display: inline-block;
}

.user-icon {
  background: url('@/assets/PNG/用户.png') no-repeat center;
  background-size: contain;
}

.lock-icon {
  background: url('@/assets/PNG/密码.png') no-repeat center;
  background-size: contain;
}

.input-item input {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
}

.link-group {
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px;
}

.link-group a {
  color: #2c7be5;
  text-decoration: none;
  font-size: 14px;
}

.login-btn {
  width: 100%;
  height: 40px;
  background: #6fafb9;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-btn:hover {
  background: #00a0b6;
}

.service-info {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}
</style>
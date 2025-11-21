<template>
  <div class="register-container">
    <div class="register-header">
      <div class="header-left" @click="goBack">
        <i class="fa fa-arrow-left back-icon"></i>
      </div>
      <div class="header-center">
        <span class="header-title">注册</span>
      </div>
      <div class="header-right"></div>
    </div>

    <div class="register-content">
      <h1 class="welcome-title">欢迎注册</h1>

      <form class="register-form" @submit.prevent="handleSubmit">
        <div class="form-item">
          <label class="form-label">手机号</label>
          <input 
            type="tel" 
            class="form-input" 
            placeholder="请输入手机号" 
            v-model="formData.phone"
            required
          />
        </div>

        <div class="form-item">
          <label class="form-label">真实姓名</label>
          <input 
            type="text" 
            class="form-input" 
            placeholder="真实姓名便于查看体检报告" 
            v-model="formData.realName"
            required
          />
        </div>

        <div class="form-item">
          <label class="form-label">生日</label>
          <div class="date-input-wrapper">
            <input 
              type="text" 
              class="form-input date-input" 
              placeholder="yyyy / mm / dd"
              v-model="formData.birthday"
              @focus="showDatePicker"
              required
            />
            <i class="fa fa-calendar calendar-icon"></i>
            <input 
              type="date" 
              class="date-picker-hidden" 
              ref="datePicker"
              @change="handleDateChange"
            />
          </div>
        </div>

        <div class="form-item">
          <label class="form-label">性别</label>
          <div class="radio-group">
            <label class="radio-item">
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                v-model="formData.gender"
                checked
              />
              <span class="radio-label">男</span>
            </label>
            <label class="radio-item">
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                v-model="formData.gender"
              />
              <span class="radio-label">女</span>
            </label>
          </div>
        </div>

        <div class="form-item">
          <label class="form-label">密码</label>
          <input 
            type="password" 
            class="form-input" 
            placeholder="请输入密码" 
            v-model="formData.password"
            required
          />
        </div>

        <div class="form-item">
          <label class="form-label">确认密码</label>
          <input 
            type="password" 
            class="form-input" 
            placeholder="请再次输入密码" 
            v-model="formData.confirmPassword"
            required
          />
        </div>

        <button type="submit" class="submit-btn">完成</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const datePicker = ref(null)

const formData = ref({
  phone: '',
  realName: '',
  birthday: '',
  gender: 'male',
  password: '',
  confirmPassword: ''
})

const goBack = () => {
  router.go(-1)
}

const showDatePicker = () => {
  if (datePicker.value) {
    datePicker.value.showPicker()
  }
}

const handleDateChange = (e) => {
  const date = e.target.value
  if (date) {
    const [year, month, day] = date.split('-')
    formData.value.birthday = `${year} / ${month} / ${day}`
  }
}

const handleSubmit = () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }
  
  console.log('注册表单数据：', formData.value)
}
</script>

<style scoped>
.register-container {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.register-header {
  padding: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333;
  flex: 1;
}

.back-icon {
  font-size: 20px;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.header-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.header-right {
  flex: 1;
}

.register-content {
  flex: 1;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 30px 20px;
  margin-top: 20px;
}

.welcome-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
  margin-left: 5px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e0e0e0;
}

.form-label {
  min-width: 80px;
  font-size: 15px;
  color: #333;
  flex-shrink: 0;
}

.form-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
  background: transparent;
  padding: 0;
}

.form-input::placeholder {
  color: #999;
}

.date-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}

.date-input {
  flex: 1;
}

.calendar-icon {
  position: absolute;
  right: 0;
  color: #999;
  font-size: 18px;
  pointer-events: none;
}

.date-picker-hidden {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.radio-group {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 30px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio-item input[type="radio"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #00BFA5;
}

.radio-label {
  font-size: 15px;
  color: #333;
}

.submit-btn {
  width: 100%;
  height: 50px;
  background-color: #00BFA5;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:active {
  background-color: #00a693;
}
</style>
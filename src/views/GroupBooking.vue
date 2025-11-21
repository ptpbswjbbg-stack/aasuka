<template>
  <div class="group-booking-container">
    <header class="top-nav">
      <div class="nav-content">
        <div class="nav-left" @click="goBack">
          <i class="fa fa-arrow-left back-icon"></i>
        </div>
        <div class="nav-center">
          <span class="nav-title">用户体检预约</span>
        </div>
        <div class="nav-right"></div>
      </div>
    </header>

    <main class="content">
      <div class="banner-section">
        <img :src="bannerImg" alt="健康主题" class="banner-image" />
        <div class="button-group">
          <button class="booking-btn personal-btn" @click="goPersonalBooking">本人预约</button>
          <button class="booking-btn family-btn" @click="goFamilyBooking">家属预约</button>
        </div>
      </div>
    </main>

    <footer class="bottom-nav">
      <div class="nav-item" v-for="(item, index) in bottomNav" :key="index" :class="{ active: index === 0 }">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import bannerImg from '@/img/logo.png'

const router = useRouter()

const bottomNav = ref([
  { name: '云医院', icon: 'fa fa-home' },
  { name: '商城', icon: 'fa fa-shopping-cart' },
  { name: '发现', icon: 'fa fa-compass' },
  { name: '我', icon: 'fa fa-user' }
])

const goBack = () => {
  router.go(-1)
}

const goPersonalBooking = () => {
  router.push('/personalBooking')
}

const goFamilyBooking = () => {
  router.push('/familyBooking')
}
</script>

<style scoped>
.group-booking-container {
  max-width: 400px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
  padding-bottom: 60px;
}

.top-nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 50px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 15px;
}

.nav-left {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
}

.back-icon {
  font-size: 20px;
  color: #333;
}

.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.nav-right {
  flex: 1;
}

.content {
  margin-top: 50px;
  padding: 15px;
}

.banner-section {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

.button-group {
  display: flex;
  gap: 15px;
  padding: 20px 15px;
}

.booking-btn {
  flex: 1;
  height: 45px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.3s;
}

.personal-btn {
  background-color: #FFC107;
}

.family-btn {
  background-color: #4CAF50;
}

.booking-btn:active {
  opacity: 0.8;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #999;
  flex: 1;
}

.nav-item i {
  font-size: 22px;
}

.nav-item.active {
  color: #17A2B8;
}

.nav-item span {
  font-size: 12px;
}

.nav-item:active {
  opacity: 0.6;
}
</style>

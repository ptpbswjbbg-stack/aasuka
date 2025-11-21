<template>
  <div class="booking-container">
    <header class="top-nav">
      <div class="nav-content">
        <div class="nav-left" @click="goBack">
          <i class="fa fa-arrow-left back-icon"></i>
        </div>
        <div class="nav-center">
          <span class="nav-title">请您选择体检机构</span>
        </div>
        <div class="nav-right"></div>
      </div>
    </header>

    <main class="content">
      <div class="hospital-list">
        <div class="hospital-card" v-for="(hospital, index) in hospitals" :key="index">
          <div class="hospital-header">
            <div class="hospital-title-bar"></div>
            <h3 class="hospital-name">{{ hospital.name }}</h3>
            <i class="fa fa-chevron-right arrow-icon"></i>
          </div>
          <div class="hospital-body">
            <img :src="hospital.image" :alt="hospital.name" class="hospital-image" />
            <div class="hospital-details">
              <div class="detail-item">
                <span class="detail-label">营业时间：</span>
                <span class="detail-value">{{ hospital.hours }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">采血截止：</span>
                <span class="detail-value">{{ hospital.bloodCutoff }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">电话：</span>
                <span class="detail-value">{{ hospital.phone }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">地址：</span>
                <span class="detail-value">{{ hospital.address }}</span>
              </div>
            </div>
          </div>
          <div class="hospital-actions">
            <button class="action-btn contact-btn" @click="handleContact(hospital)">
              <i class="fa fa-phone"></i>
              <span>联系我们</span>
            </button>
            <button class="action-btn location-btn" @click="handleLocation(hospital)">
              <i class="fa fa-map-marker"></i>
              <span>查找位置</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <footer class="bottom-nav">
      <div class="nav-item" v-for="(item, index) in bottomNav" :key="index">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import hospita1 from '@/img/hospita1.png'
import hospita2 from '@/img/hospita2.png'

const router = useRouter()

const hospitals = ref([
  {
    name: '沈阳熙康云医院-和平院区',
    hours: '周一至周五 7:30-15:30 (周六截止12:00)',
    bloodCutoff: '采血截止时间 10:30',
    phone: '52433456',
    address: '文体路7号世贸大厦商都 (五里河茶城) 四楼西区',
    image: hospita1
  },
  {
    name: '沈阳熙康云医院-浑南院区',
    hours: '周一至周六 7:30-11:30',
    bloodCutoff: '10:30',
    phone: '52713658',
    address: '创新路175号 (与智慧大厦交汇处)',
    image: hospita2
  }
])

const bottomNav = ref([
  { name: '云医院', icon: 'fa fa-home' },
  { name: '商城', icon: 'fa fa-shopping-cart' },
  { name: '发现', icon: 'fa fa-compass' },
  { name: '我', icon: 'fa fa-user' }
])

const goBack = () => {
  router.go(-1)
}

const handleContact = (hospital) => {
  alert(`正在联系 ${hospital.name}\n电话：${hospital.phone}`)
  console.log('联系医院：', hospital)
}

const handleLocation = (hospital) => {
  alert(`查找 ${hospital.name} 的位置\n地址：${hospital.address}`)
  console.log('查找位置：', hospital)
}
</script>

<style scoped>
.booking-container {
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
  align-items: center;
  height: 100%;
  padding: 0 15px;
  position: relative;
}

.nav-left {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 15px;
  z-index: 1;
}

.back-icon {
  font-size: 20px;
  color: #333;
}

.nav-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.nav-right {
  position: absolute;
  right: 15px;
  width: 20px;
}

.content {
  margin-top: 50px;
  padding: 15px;
  padding-bottom: 20px;
}

.hospital-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hospital-card {
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.hospital-header {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.hospital-title-bar {
  width: 4px;
  height: 20px;
  background-color: #17A2B8;
  margin-right: 10px;
  flex-shrink: 0;
}

.hospital-name {
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.arrow-icon {
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}

.hospital-body {
  display: flex;
  padding: 15px;
  gap: 15px;
}

.hospital-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
}

.hospital-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-item {
  font-size: 13px;
  line-height: 1.5;
  color: #666;
}

.detail-label {
  color: #333;
  font-weight: 500;
}

.detail-value {
  color: #666;
}

.hospital-actions {
  display: flex;
  gap: 10px;
  padding: 0 15px 15px 15px;
}

.action-btn {
  flex: 1;
  height: 36px;
  border: 1px solid #17A2B8;
  background-color: transparent;
  color: #17A2B8;
  border-radius: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-btn i {
  font-size: 14px;
}

.action-btn:active {
  background-color: #17A2B8;
  color: #fff;
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

.nav-item span {
  font-size: 12px;
}

.nav-item:active {
  opacity: 0.6;
}
</style>
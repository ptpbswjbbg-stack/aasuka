<template>
  <div class="home-container">
    <header class="top-nav">
      <div class="nav-content">
        <div class="nav-left">
          <span class="nav-title">沈阳云医院</span>
          <i class="fa fa-chevron-down nav-menu-icon" @click="toggleDropdown"></i>
          <div class="dropdown-menu" v-if="showDropdown">
            <div class="dropdown-item">医院选择</div>
            <div class="dropdown-item">科室选择</div>
            <div class="dropdown-item">个人中心</div>
            <div class="dropdown-item">设置</div>
          </div>
        </div>
        <div class="nav-right">
          <i class="fa fa-envelope nav-icon"></i>
        </div>
      </div>
    </header>

    <main class="content">
      <div class="banner">
        <img :src="bannerImg" alt="Banner" />
      </div>

      <div class="feature-section">
        <div class="feature-item" v-for="(item, index) in features" :key="index" @click="handleFeatureClick(item.name)">
          <div class="feature-card">
            <img :src="item.icon" :alt="item.name" class="feature-icon-img" />
            <div class="feature-text">
              <div class="feature-name">{{ item.name }}</div>
              <div class="feature-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="report-section">
        <div class="section-bar"></div>
        <div class="report-content">
          <div class="report-left">
            <div class="report-title">我的健康报告</div>
            <div class="report-desc">随时随地查看体检报告</div>
          </div>
          <button class="report-btn" style="outline: none; border: none;">立即查看</button>
        </div>
      </div>

      <div class="doctor-section">
        <div class="section-header">
          <div class="section-bar"></div>
          <h3 class="section-title">推荐医生</h3>
        </div>
        <div class="doctor-grid">
          <div class="doctor-card" v-for="(doctor, index) in doctors" :key="index">
            <img :src="doctor.avatar" :alt="doctor.name" class="doctor-avatar" />
            <div class="doctor-name">{{ doctor.name }}</div>
            <div class="doctor-title">{{ doctor.title }}</div>
          </div>
        </div>
      </div>

      <div class="assess-section">
        <div class="section-header">
          <div class="section-bar"></div>
          <h3 class="section-title">健康评估</h3>
          <span class="more-link">更多</span>
        </div>
        <div class="assess-list">
          <img v-for="(item, index) in assessments" :key="index" :src="item.image" :alt="item.title" class="assess-image" />
        </div>
      </div>

      <div class="news-section">
        <div class="section-header">
          <div class="section-bar"></div>
          <h3 class="section-title">健康咨询</h3>
        </div>
        <div class="news-list">
          <div class="news-card" v-for="(item, index) in news" :key="index">
            <img :src="item.image" :alt="item.title" class="news-image" />
            <div class="news-content">
              <div class="news-title">{{ item.title }}</div>
              <div class="news-subtitle">{{ item.subtitle }}</div>
            </div>
            <div class="news-meta">
              <i class="fa fa-comment"></i>
              <span>{{ item.comments }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-safe"></div>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import bannerImg from '@/img/logo.png'
import doctor1 from '@/img/doctor1.jpg'
import doctor2 from '@/img/doctor2.jpg'
import doctor3 from '@/img/doctor3.jpg'
import doctor4 from '@/img/doctor4.jpg'
import doctor5 from '@/img/doctor5.jpg'
import doctor6 from '@/img/doctor6.jpg'
import doctor7 from '@/img/doctor7.jpg'
import doctor8 from '@/img/doctor8.jpg'
import assess1 from '@/img/assess1.png'
import assess2 from '@/img/assess2.png'
import info1 from '@/img/info1.png'
import info2 from '@/img/info2.png'
import menu01 from '@/img/menu01.png'
import menu02 from '@/img/menu02.png'
import menu03 from '@/img/menu03.png'
import menu04 from '@/img/menu04.png'
import menu05 from '@/img/menu05.png'
import menu06 from '@/img/menu06.png'

const router = useRouter()

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleClickOutside = (event) => {
  const navLeft = event.target.closest('.nav-left')
  if (!navLeft && showDropdown.value) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const features = ref([
  { name: '免费咨询', desc: '新型冠状病毒肺炎', icon: menu01 },
  { name: '网络问诊', desc: '图文视频网络咨询', icon: menu02 },
  { name: 'e心门诊', desc: '复旦医科大学专家', icon: menu03 },
  { name: '慢病管理', desc: '血压血糖健康管理', icon: menu04 },
  { name: '上门护理', desc: '网上购买上门服务', icon: menu05 },
  { name: '团检预约', desc: '团体体检套餐定制', icon: menu06 }
])

const doctors = ref([
  { name: '刘长胜', title: '主任医师', avatar: doctor1 },
  { name: '孙鹿', title: '副主任医师', avatar: doctor2 },
  { name: '吕文达', title: '主任医师', avatar: doctor3 },
  { name: '李若辰', title: '主治医师', avatar: doctor4 },
  { name: '张石凡', title: '主任医师', avatar: doctor5 },
  { name: '赵桂凤', title: '副主任医师', avatar: doctor6 },
  { name: '李文', title: '主治医师', avatar: doctor7 },
  { name: '吴晓梦', title: '主任医师', avatar: doctor8 }
])

const assessments = ref([
  { title: '新型冠状病毒', subtitle: '在线初步自我评测', image: assess1, bgColor: '#17A2B8' },
  { title: 'HRA', subtitle: '健康风险评估', image: assess2, bgColor: '#007BFF' }
])

const news = ref([
  { title: '查出肺结核,我是不是要得肺...', subtitle: '肺结核一定会导致肺癌吗?', comments: '3699', image: info1 },
  { title: '体检发现甲状腺结节,怎么办?', subtitle: '日常需注意什么?', comments: '4256', image: info2 }
])

const bottomNav = ref([
  { name: '云医院', icon: 'fa fa-home' },
  { name: '商城', icon: 'fa fa-shopping-cart' },
  { name: '发现', icon: 'fa fa-compass' },
  { name: '我', icon: 'fa fa-user' }
])

const handleFeatureClick = (name) => {
  if (name === '团检预约') {
    router.push('/groupBooking')
  }
}
</script>

<style scoped>
.home-container {
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
  gap: 8px;
  position: relative;
}

.nav-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.nav-menu-icon {
  font-size: 14px;
  color: #666;
  cursor: pointer;
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 150px;
  z-index: 1001;
  padding: 8px 0;
}

.dropdown-item {
  padding: 12px 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.nav-right {
  display: flex;
  align-items: center;
}

.nav-icon {
  font-size: 20px;
  color: #666;
  cursor: pointer;
}

.content {
  margin-top: 50px;
  padding: 15px;
  padding-bottom: 20px;
}

.banner {
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.banner img {
  width: 100%;
  height: auto;
  display: block;
}

.feature-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.feature-item {
  width: 100%;
  cursor: pointer;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.feature-icon-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.feature-text {
  text-align: center;
  width: 100%;
}

.feature-name {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 12px;
  color: #999;
  line-height: 1.3;
}

.report-section {
  position: relative;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-bar {
  position: absolute;
  left: 0;
  top: 15px;
  bottom: 15px;
  width: 4px;
  background-color: #17A2B8;
}

.report-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 12px;
}

.report-left {
  flex: 1;
}

.report-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
}

.report-desc {
  font-size: 12px;
  color: #999;
}

.report-btn {
  background-color: #17A2B8;
  color: #fff;
  border: none;
  padding: 8px 20px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  box-shadow: none;
}

.report-btn:active {
  opacity: 0.8;
}

.doctor-section {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}

.section-header .section-bar {
  position: static;
  width: 4px;
  height: 18px;
  margin-right: 8px;
  top: auto;
  bottom: auto;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
  flex: 1;
}

.more-link {
  font-size: 14px;
  color: #999;
  cursor: pointer;
}

.doctor-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.doctor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.doctor-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f0f0f0;
}

.doctor-name {
  font-size: 12px;
  font-weight: 500;
  color: #333;
  text-align: center;
}

.doctor-title {
  font-size: 11px;
  color: #999;
  text-align: center;
}

.assess-section {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.assess-list {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 5px;
}

.assess-list::-webkit-scrollbar {
  display: none;
}

.assess-image {
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  flex-shrink: 0;
  border: none;
  background: none;
  display: block;
}

.news-section {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.news-card {
  display: flex;
  gap: 12px;
  align-items: center;
}

.news-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
  border: none;
  background: none;
  display: block;
}

.news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  margin-bottom: 6px;
}

.news-subtitle {
  font-size: 12px;
  color: #666;
  line-height: 1.4;
}

.news-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  color: #999;
  flex-shrink: 0;
  margin-left: 10px;
}

.news-meta i {
  font-size: 12px;
}

.bottom-safe {
  height: 10px;
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
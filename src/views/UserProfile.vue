<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="avatar">
        <img src="src/img/user.png" alt="uese" />
      </div>
      <div class="user-info">
        <h2>{{ username }}</h2>
        <p>账号: {{ phone }}</p>
      </div>
    </div>
    <ul class="profile-menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a :href="item.link">
          <i :class="item.icon"></i> {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '黄药师',
      phone: '156****4589',
      menuItems: [
        { title: '我的预约', icon: 'icon-appointment', link: '#' },
        { title: '我的服务', icon: 'icon-service', link: '#' },
        { title: '我的医生', icon: 'icon-doctor', link: '#' },
        { title: '问诊订单', icon: 'icon-order', link: '#' },
        { title: '商城订单', icon: 'icon-shopping', link: '#' },
        { title: '退出登录', icon: 'icon-logout', link: '#' }
      ]
    };
  }
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.user-info {
  margin-left: 20px;
}

.profile-menu {
  list-style: none;
  padding: 0;
}

.profile-menu li {
  margin-bottom: 10px;
}

.profile-menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.profile-menu i {
  margin-right: 10px;
}
</style>
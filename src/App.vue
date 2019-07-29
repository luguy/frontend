<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
      style="background: rgb(255, 255, 255)"
    >
      <div class="logo" />
      <a-menu mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to="/register">
            <a-icon type="user" />
            <span>
                挂号挂号
            </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/dept">
            <a-icon type="video-camera" />
            <span>
                科室管理    
            </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/doctor">
            <a-icon type="upload" />
            <span>
                医生管理
            </span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="4">
          <a-icon type="bar-chart" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="cloud-o" />
          <span class="nav-text">nav 5</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="appstore-o" />
          <span class="nav-text">nav 6</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="team" />
          <span class="nav-text">nav 7</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="shop" />
          <span class="nav-text">nav 8</span>
        </a-menu-item>

      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: rgb(255, 255, 255); padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '560px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      collapsed: false,
    }
  }
}
</script>



<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgb(255, 255, 255);
  margin: 16px;
}
.alignleft { 
  display: inline; 
} 
</style>
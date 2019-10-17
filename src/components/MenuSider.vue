<template>
  <div style=" text-align: left;height: 100vh;background: white;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      v-for="(menu,index) in content"
      :key="index"
      >
        <el-submenu v-if="menu.children">
          <template slot="title">
            <i v-bind:class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <div v-for="(child, num) in menu.children" v-bind:key='num'>
            <router-link :to="child.path">
              <el-menu-item>
                {{ child.name }}
              </el-menu-item>
            </router-link>
          </div>
      </el-submenu>
      <router-link v-else :to="menu.path">
        <el-menu-item  v-bind:index="index">
          <i v-bind:class='menu.icon'></i>
          <span slot="title">
            {{ menu.name }}
          </span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      content: [{
        name: '首页',
        icon: 'el-icon-menu',
        path: '/homepage'
      }, {
        name: '用户管理',
        icon: 'el-icon-menu',
        path: '',
        children: [{
          name: '用户查询',
          path: '/checkuser'
        }, {
          name: '新增用户',
          path: '/adduser'
        }, {
          name: '角色维护',
          path: '/manageuser'
        }]
      }]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
<style>
a{
  color: #333333;
  text-decoration: none;
}
</style>

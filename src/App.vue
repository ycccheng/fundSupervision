<template>
  <div id="app">
    <el-container>
      <!-- 头部 -->
      <el-header style="height: 80px">
        <img :src='bocLogo' class="logo" alt="">
        <div class="title">资金监管平台</div>
      </el-header>
      <!-- 容器 -->
      <el-container>
        <!-- 菜单栏 -->
        <el-aside width="20%">
          <Menu />
        </el-aside>
        <!-- 主功能区 -->
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Menu from './components/MenuSider'
export default {
  name: 'App',
  data () {
    return {
      bocLogo: require('./assets/bocLogo.png')
    }
  },
  components: {
    Menu
  }
}
</script>

<style>
.logo{
  float: left;
  width: 180px;
  margin-left: 30px;
  margin-top: 10px
}
.title{
  width: 100%;
    font-size: 28px;
    font-weight: 700;
    width: 100%;
    /* font-family: Microsoft YaHei; */
}
</style>

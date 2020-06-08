<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#041527"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconshouye"></use>
      </svg>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconxitong1"></use>
        </svg>
        <span>生死簿</span>
      </template>
      <el-menu-item index="2-1">用户管理</el-menu-item>
      <el-menu-item index="2-2">数据同步</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondagou"></use>
      </svg>
      <span slot="title">勾魂管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconshenpanzhihang"></use>
      </svg>
      <span slot="title">阎王殿审批记录</span>
    </el-menu-item>
    <el-menu-item index="5">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icondao1"></use>
      </svg>
      <span slot="title">十八层地狱</span>
    </el-menu-item>
    <el-menu-item index="6">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconlunhui-zhihang"></use>
      </svg>
      <span slot="title">六道轮回</span>
    </el-menu-item>
    <el-menu-item index="7">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconqianbi"></use>
      </svg>
      <span slot="title">冥币管理</span>
    </el-menu-item>
    <el-menu-item index="8" disabled>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconrizhi"></use>
      </svg>
      <span slot="title">日志管理</span>
    </el-menu-item>
    <el-menu-item index="9">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconsystem"></use>
      </svg>
      <span slot="title">角色权限</span>
    </el-menu-item>
    <el-menu-item index="10">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconxitong1"></use>
      </svg>
      <span slot="title">系统管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        isCollapse: false,
      }
    },

    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>

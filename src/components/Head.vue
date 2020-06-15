<template>
  <div class="life-header">
    <div class="title" @click="changeMenu">
      <svg class="icon icon-font">
        <use :xlink:href="isCollapse ? '#icondakai' : '#iconzhedie'"></use>
      </svg>
    </div>
    <div class="badge">
      <el-dropdown trigger="click">
        <span>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">个鬼信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-badge :value="messageCount" :hidden="!messageCount" type="primary">
        <svg class="icon icon-font" aria-hidden="true">
          <use xlink:href="#icontongzhi"></use>
        </svg>
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: ["isCollapse", "messageCount"],

  methods: {
    changeMenu() {
      this.$emit("changeMenu");
    }
  }
};
</script>

<style lang="less" scoped>
.life-header {
  height: 100%;
  .title {
    float: left;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
  .badge {
    float: right;
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }
}
</style>

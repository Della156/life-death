<template>
  <div class="life-header">
    <div class="title"><span>地府管理系统</span></div>
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
      <el-badge :value="3" class="item">
        <i class="el-icon-message-solid" style="font-size: 30px"></i>
      </el-badge>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Head"
  }
</script>

<style lang="less" scoped>
.life-header {
  height: 100%;
  .title {
    float: left;
    width: 229px;
    height: 100%;
    background-color: #041527;
    span {
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      position: absolute;
      margin-left: 2%;
      margin-top: 2%;

    }
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

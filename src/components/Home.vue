<template>
  <div class="life-container">
    <el-header style="padding: 0">
      <Head />
    </el-header>
    <el-container style="height: calc(100% - 60px)">
      <el-aside width="230px">
        <Slider />
      </el-aside>
      <el-container>
        <el-main style="background-color: #F7F9FC;">
          <div class="life-warp"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Slider from "./Slider";
import Head from "./Head";
export default {
  name: "Home",
  components: {
    Slider,
    Head
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .life-container {
    height: 100%;
    width: 100%;
    position: relative;
    overflow-y: hidden;
    .life-warp {
      height: 100%;
      background-color: #fff;

    }
  }

</style>

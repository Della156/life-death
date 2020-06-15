<template>
  <div class="life-container">
    <el-container style="height: 100%">
      <el-aside :width="isCollapse ? '55px' : '230px'">
        <Slider :isCollapse="isCollapse" />
      </el-aside>
      <el-container style="calc(100% - 60px)">
        <el-header style="padding: 0">
          <Head :isCollapse="isCollapse" :messageCount="messageCount" @changeMenu="toggleChange" />
        </el-header>
        <el-main style="background-color: #F7F9FC;">
          <div class="life-warp">
            <router-view></router-view>
          </div>
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
  },
  data() {
    return {
      isCollapse: true,
      messageCount: 0,
    };
  },

  mounted() {
    this.fetchMessage()
  },

  methods: {
    toggleChange() {
      this.isCollapse = !this.isCollapse;
    },
    fetchMessage() {
      this.axios.get("/mock/message").then(({ data }) => {
        this.messageCount = data.number
      });
    }
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

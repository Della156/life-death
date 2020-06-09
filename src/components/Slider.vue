<template>
  <el-menu
    ref="slider_menu"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    :collapse="isCollapse"
    background-color="#041527"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div v-for="sliderItem in slider" :key="sliderItem.url">
      <el-submenu v-if="sliderItem.key" :index="sliderItem.url">
        <template slot="title">
          <svg class="icon">
            <use :xlink:href="sliderItem.icon"></use>
          </svg>
          <span>{{ sliderItem.title }}</span>
        </template>
        <el-menu-item
          v-for="child in sliderItem.children"
          :key="child.url"
          :index="child.url"
        >
          <template slot="title">
            <span>{{ child.title }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="sliderItem.url">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="sliderItem.icon"></use>
        </svg>
        <span slot="title">{{ sliderItem.title }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      isCollapse: false,
      slider: [
        {
          url: "firstPage",
          title: "首页",
          icon: "#iconshouye",
          key: false
        },
        {
          url: "lifeDeath",
          title: "生死簿",
          icon: "#iconbenzi",
          key: true,
          children: [
            {
              url: "userManger",
              title: "用户管理"
            },
            {
              url: "dataSynchronize",
              title: "数据同步"
            }
          ]
        },
        {
          url: "hookManager",
          title: "勾魂管理",
          icon: "#icondagou",
          key: false
        },
        {
          url: "approvalRecord",
          title: "阎王殿审批记录",
          icon: "#iconshenpanzhihang",
          key: false
        },
        {
          url: "eighthFool",
          title: "十八层地狱",
          icon: "#icondao1",
          key: false
        },
        {
          url: "reincarnation",
          title: "六道轮回",
          icon: "#iconlunhui-zhihang",
          key: false
        },
        {
          url: "moneyManager",
          title: "冥币管理",
          icon: "#iconqianbi",
          key: false
        },
        {
          url: "dailyManager",
          title: "日志管理",
          icon: "#iconrizhi",
          key: false
        },
        {
          url: "roleLimit",
          title: "角色权限",
          icon: "#iconsystem",
          key: false
        },
        {
          url: "systemManger",
          title: "系统管理",
          icon: "#iconxitong1",
          key: false
        }
      ]
    };
  },

  watch: {
    $route(val, old) {
      let routerPath = val.path;
      let page = "";
      if (routerPath.startsWith("/")) {
        page = routerPath.substr(1, routerPath.length);
      } else {
        page = routerPath;
      }
      this.$refs.slider_menu.activedIndex = page;
    }
  },

  methods: {
    handleSelect(key) {
      this.$router.push(key);
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
}
</style>

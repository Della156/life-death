<template>
  <div class="user-manger">
    <header>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <div style="width: 50%; display: flex;justify-content: space-around; align-items: center">
        <div>
          {{percentage < 100 ? '批阅进度' : '今日工作已完成' }}
          </div>
        <div style="width: 80%">
          <el-progress
            :percentage="percentage"
            :format="format"
            :color="customColorMethod"
          ></el-progress>
        </div>
      </div>
    </header>
    <main>
      <el-table
        :data="tableData.filter(data => !search || data.id.includes(search))"
        height="100%"
        tooltip-effect="dark"
        v-loading="loading"
        element-loading-text="拼命加载中"
        :row-class-name="tableRowClassName"
        element-loading-spinner="el-icon-loading"
        empty-text="暂无审批工作，您老可以歇会儿了～～"
      >
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-form label-position="left" class="demo-table-expand">
              <el-form-item label="死者编号">
                <span>{{ scope.row.id }}</span>
              </el-form-item>
              <el-form-item label="死亡时间">
                <span>{{ scope.row.deadTime }}</span>
              </el-form-item>
              <el-form-item label="生平概况">
                <span>{{ scope.row.main }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="编号" prop="id" min-width="150">
        </el-table-column>
        <el-table-column
          label="生平大事记"
          show-overflow-tooltip
          prop="main"
          min-width="300"
        >
        </el-table-column>
        <el-table-column label="死亡时间" prop="deadTime" min-width="200">
        </el-table-column>
        <el-table-column label="享年" prop="age"> </el-table-column>
        <el-table-column label="审批人" prop="approve"> </el-table-column>
        <el-table-column align="right" min-width="200">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入编号ID" />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="againApprove(scope.$index, scope.row)"
              >重新审判</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="nextLife(scope.$index, scope.row)"
              >去投胎</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </main>
  </div>
</template>

<script>
export default {
  name: "userManger",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [],
      count: 0,
      search: "",
      loading: false
    };
  },

  mounted() {
    this.fetchApproveInfo();
  },

  computed: {
    percentage: function() {
      const percent = (1 - this.tableData.length / this.count).toFixed(2) * 100;
      return percent;
    }
  },

  methods: {
    fetchApproveInfo() {
      this.axios
        .get("/mock/users")
        .then(({ data }) => {
          this.loading = false;
          this.tableData = data.userData;
          this.count = data.count;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    onSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.fetchApproveInfo();
      }, 300);
    },

    againApprove(index, row) {
      this.tableData = this.tableData.filter(item => item !== row);
      this.$notify({
        title: row.id,
        message: "该用户已被打回审批池",
        showClose: false,
        duration: 3000,
        position: "top-left",
        type: "error"
      });
    },

    nextLife(index, row) {
      this.tableData = this.tableData.filter(item => item !== row);
      this.$notify({
        title: row.id,
        message: "该用户已经去往投胎",
        showClose: false,
        duration: 3000,
        position: "top-left",
        type: "success"
      });
    },

    tableRowClassName({ row, rowIndex }) {
      if (row.age < 30) {
        return "warning-row";
      }
      return "";
    },

    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },

    format(percentage) {
      return percentage === 100 ? "" : `${percentage}%`;
    }
  }
};
</script>

<style lang="less" scoped>
.user-manger {
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
<style lang="less">
.user-manger {
  .el-table .warning-row {
    background: #fa5555;
  }

  .el-table__body tr.hover-row > td {
    background-color: transparent !important;
  }
  .el-table__body tr:hover > td {
    background-color: transparent !important;
  }
}
</style>

<template>
  <div>
    <h1>股票交易系统 - 管理客户端</h1>
    <h2>用户列表</h2>
    <el-table :data="tableData">
      <el-table-column type="expand">
      </el-table-column>

      <!--<el-table-column prop="name" label="股票名称"/>-->
      <!--warning! there should be a method to sort the instructions in decreasing order by price!-->
      <el-table-column prop="user" label="用户名称"/>
      <el-table-column prop="buyTime" label="上次交易时间"/>
      <el-table-column prop="status" label="用户状态"/>
      <!--every instruction shown here must haven't been accepted.
        <el-table-column prop="acceptTime" label="接受时间"/>
        -->
      <el-table-column label="操作" min-width="220">
        <template slot-scope="scope">
          <el-button size="mini" v-if="scope.row.status=='正常'" plain @click="open1">封禁用户</el-button>
          <el-button size="mini" v-else palin @click="open2">解封用户</el-button>
        </template>
        
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  name: "UserInstruction",
  data() {
    return {
      tableData: [
        {
          state: 0,
          user: "唯我",
          status: "正常",
          buyTime: "2019.1.30 06:45:15",
        },
        {
          "state": 1,
          "user": "尚文",
          "status": "正常",
          "buyTime": "2019.2.30 23:45:15",
        },
        {
          "state": 0,
          "user": "真奥",
          "status": "封禁",
          "buyTime": "2019.3.17 09:45:35",
        }
      ]
    };
  },
  methods: {
     open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '封禁成功')
        });
      },

      open2() {
        const u = this.$createElement;
        this.$notify({
          title: '提示',
           message: u('i', { style: 'color: #67C23A'}, '解封成功')
        });
      }
  }
};
</script>

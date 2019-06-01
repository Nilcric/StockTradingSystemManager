<template>
  <div>
    <h1>指令列表</h1>

    <el-table :data="tableData">
      <el-table-column prop="id" label="股票代码"/>
      <el-table-column prop="name" label="股票名称"/>
      <el-table-column prop="command" label="指令"/>
      <el-table-column prop="price" label="价格"/>
      <el-table-column prop="amount" label="数量"/>
      <el-table-column prop="status" label="状态"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" :disabled="scope.row.status!='交易中'">撤销</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: null,
      tableData: [
        {
          id: "300059",
          name: "东方财富",
          command: "购买",
          price: 12.34,
          amount: 108,
          status: "交易中"
        },
        {
          id: "000066",
          name: "中国长城",
          command: "出售",
          price: 10.12,
          amount: 53.12,
          status: "已撤销"
        },
        {
          id: "002161",
          name: "远望谷",
          command: "购买",
          price: 7.99,
          amount: 217,
          status: "已完成"
        }
      ]
    };
  }
};
</script>

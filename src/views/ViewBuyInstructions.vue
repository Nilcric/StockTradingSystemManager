<template>
  <div>
    <h1>查看购买指令</h1>
    <el-table :data="tableData">
      <el-table-column type="expand">
      </el-table-column>
      <el-table-column prop="id" label="股票代码"/>
      <!--<el-table-column prop="name" label="股票名称"/>-->
      <!--warning! there should be a method to sort the instructions in decreasing order by price!-->
      <el-table-column prop="user" label="用户"/>
      <el-table-column prop="price" label="购入价格"/>
      <el-table-column prop="amount" label="购入数量"/>
      <el-table-column prop="buyTime" label="发起时间"/>
      <!--every instruction shown here must haven't been accepted.
        <el-table-column prop="acceptTime" label="接受时间"/>
        -->
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
          "state": 0,
          "id": "300059",
          "user": "唯我",
          "price": 100.34,
          "amount": 123,
          "buyTime": "2019.1.30 06:45:15",
          "acceptTime": "2019.2.15 0:53:26"
        },
        {
          "state": 1,
          "id": "303459",
          "user": "尚文",
          "price": 15.44,
          "amount": 53,
          "buyTime": "2019.2.30 23:45:15",
          "acceptTime": "2019.5.31 0:42:46"
        },
        {
          "state": 0,
          "id": "324418",
          "user": "真奥",
          "price": 12.42,
          "amount": 9,
          "buyTime": "2019.3.17 09:45:35",
          "acceptTime": "2019.6.12 01:40:46"
        }
      ]
    };
  },
  methods: {
  }
};
</script>

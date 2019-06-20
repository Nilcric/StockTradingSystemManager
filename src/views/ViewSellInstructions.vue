<template>
  <div>
    <h1>查看出售指令</h1>
    <el-table :data="tableData">
      <el-table-column type="expand">
      </el-table-column>
      <el-table-column prop="id" label="股票代码"/>
      <!--<el-table-column prop="name" label="股票名称"/>-->
      <!--warning! there should be a method to sort the instructions in increasing order by price!-->
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
          "id": "556787",
          "user": "唯我",
          "price": 13.34,
          "amount": 54,
          "buyTime": "2018.5.30 06:15:35",
          "acceptTime": "2019.6.15 07:53:26"
        },
        {
          "state": 1,
          "id": "335678",
          "user": "尚文",
          "price": 42.44,
          "amount": 23,
          "buyTime": "2019.1.30 23:35:15",
          "acceptTime": "2019.6.31 01:42:46"
        },
        {
          "state": 0,
          "id": "979544",
          "user": "真奥",
          "price": 172.42,
          "amount": 122,
          "buyTime": "2019.2.17 22:45:35",
          "acceptTime": "2019.6.10 0:40:46"
        }
      ]
    };
  },
  methods: {
  }
};
</script>

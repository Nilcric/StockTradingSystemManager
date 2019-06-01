<template>
  <div>
    <h1>设置提醒</h1>

    <el-form ref="form" :model="form" label-width="96px">
      <el-form-item label="股票代码">
        <el-input v-model="form.id"/>
      </el-form-item>
      <el-form-item label="提醒价格">
        <el-input v-model="form.price"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">添加提醒</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <h3>当前提醒列表</h3>

    <el-table :data="tableData">
      <el-table-column prop="id" label="股票代码"/>
      <el-table-column prop="name" label="股票名称"/>
      <el-table-column prop="price" label="提醒价格"/>
      <el-table-column label="操作">
        <template>
          <el-button size="mini">取消提醒</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      form: {
        id: null,
        price: null
      },
      tableData: [
        {
          id: "300059",
          name: "东方财富",
          amount: 140.3,
          price: 12.32,
          cost: 12.81,
          profit: 13.92
        },
        {
          id: "000066",
          name: "中国长城",
          amount: 107.1,
          price: 10.23,
          cost: 9.74,
          profit: 21.42
        },
        {
          id: "002161",
          name: "远望谷",
          amount: 93.7,
          price: 7.92,
          cost: 8.28,
          profit: -8.03
        },
        {
          id: "002195",
          name: "二三四五",
          amount: 84.98,
          price: 5.1,
          cost: 4.5,
          profit: 13.92
        }
      ]
    };
  }
};
</script>

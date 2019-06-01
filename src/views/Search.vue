<template>
  <div>
    <h1>查询股票</h1>
    <el-input placeholder="请输入股票名称或代码" v-model="keyword">
      <el-button slot="append" icon="el-icon-search"/>
    </el-input>

    <el-table :data="tableData">
      <el-table-column prop="id" label="股票代码"/>
      <el-table-column prop="name" label="股票名称"/>
      <el-table-column prop="latest" label="最新"/>
      <el-table-column prop="buy" label="购买"/>
      <el-table-column prop="sell" label="出售"/>
      <el-table-column prop="day" label="当日成交"/>
      <el-table-column prop="week" label="本周成交"/>
      <el-table-column prop="month" label="本月成交"/>
      <el-table-column label="操作" min-width="150">
        <template slot-scope="scope">
          <el-button size="mini">购买</el-button>
          <el-button size="mini">出售</el-button>
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
          latest: 12.32,
          buy: 12.44,
          sell: 12.32,
          day: "12.12~12.44",
          week: "12.18~12.84",
          month: "12.09~12.93"
        },
        {
          id: "000066",
          name: "中国长城",
          latest: 10.23,
          buy: 10.33,
          sell: 10.13,
          day: "10.15~10.34",
          week: "10.08~10.42",
          month: "10.02~10.55"
        },
        {
          id: "002161",
          name: "远望谷",
          latest: 7.92,
          buy: 7.99,
          sell: 7.92,
          day: "7.92~7.99",
          week: "7.85~8.10",
          month: "7.70~8.25"
        },
        {
          id: "002195",
          name: "二三四五",
          latest: 5.1,
          buy: 5.1,
          sell: 4.99,
          day: "4.99~5.12",
          week: "4.99~5.24",
          month: "4.81~5.25"
        },
        {
          id: "002131",
          name: "利欧股份",
          latest: 2.04,
          buy: 2.04,
          sell: 1.9,
          day: "1.90~2.12",
          week: "1.87~2.24",
          month: "1.87~2.25"
        },
        {
          id: "002177",
          name: "御银股份",
          latest: 6.23,
          buy: 6.23,
          sell: 6.2,
          day: "6.20~6.23",
          week: "6.20~6.35",
          month: "6.12~6.44"
        }
      ]
    };
  }
};
</script>

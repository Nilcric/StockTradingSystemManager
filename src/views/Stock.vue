<template>

  <div>
    
    <el-dialog
      title="设置涨跌停限制"
      v-bind:visible.sync="dialogSetingVisible"
      width="30%">
      <el-form
        :model="passForm"
          status-icon
        ref="passForm"
        label-width="0px"
        class="demo-ruleForm">
        <el-form-item label="">
          <el-input
            :type="'text'"
            v-model="passForm.newPass"
            placeholder="单位：元">
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="checkPass">
          <template>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" v-on:click="dialogSetingVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" v-on:click="dialogSetingVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <h1>查看股票</h1>
    <el-table :data="tableData">
      <el-table-column type="expand">
        <template slot-scope="props">
          <h3>最近交易</h3>
          <el-table :data="recent(props.row)">
            <el-table-column prop="time" label="时间"/>
            <el-table-column prop="price" label="价格"/>
            <el-table-column prop="amount" label="数量"/>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="股票代码"/>
      <el-table-column prop="name" label="股票名称"/>
      <el-table-column prop="status" label="状态"/>
      <el-table-column prop="price" label="最新成交价格"/>
      <el-table-column prop="amount" label="最新成交数量"/>
      <el-table-column label="最新成交数量">
        <template
          slot-scope="scope"
        >{{((scope.row.price - scope.row.cost) * scope.row.amount).toFixed(2)}}</template>
      </el-table-column>
      <el-table-column label="操作" min-width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogSetingVisible = true">设置涨跌停限制</el-button>
          <el-button size="mini" v-if="scope.row.status=='正常'">暂停交易</el-button>
          <el-button size="mini" v-else>重启交易</el-button>
        </template>
        
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Stock",
  data() {
    return {
      passForm:{
        oldPass:'',
        newPass:'',
        checkPass:''
      },
      dialogSetingVisible: false,
      options: [{
          value: '0',
          label: '涨停限制'
        }, {
          value: '1',
          label: '跌停限制'
        },
      ],
      value: '',
      tableData: [
        {
          id: "300059",
          name: "东方财富",
          status: "正常",
          amount: 140.3,
          price: 12.32,
          cost: 12.81,
          profit: 13.92
        },
        {
          id: "000066",
          name: "中国长城",
          status: "正常",
          amount: 107.1,
          price: 10.23,
          cost: 9.74,
          profit: 21.42
        },
        {
          id: "002161",
          name: "远望谷",
          status: "正常",
          amount: 93.7,
          price: 7.92,
          cost: 8.28,
          profit: -8.03
        },
        {
          id: "002195",
          name: "二三四五",
          status: "正常",
          amount: 84.98,
          price: 5.1,
          cost: 4.5,
          profit: 13.92
        },
        {
          id: "002131",
          name: "利欧股份",
          status: "正常",
          amount: 70.04,
          price: 2.04,
          cost: 2.1,
          profit: 21.42
        },
        {
          id: "002177",
          name: "御银股份",
          status: "暂停",
          amount: 65.23,
          price: 6.23,
          cost: 5.1,
          profit: -8.03
        }
      ]
    };
  },
  methods: {
    recent(stock) {
      var ans = [];
      for (var i = 0; i < 4; i++) {
        ans.push({
          time:
            "2019.5.28 " +
            Math.floor(Math.random() * 24) +
            ":" +
            Math.floor(Math.random() * 50 + 10) +
            ":" +
            Math.floor(Math.random() * 50 + 10),
          price: (
            stock.price *
            (1 + 0.1 * Math.random() - 0.1 * Math.random())
          ).toFixed(2),
          amount: (
            stock.amount *
            (0.2 + 0.1 * Math.random() - 0.1 * Math.random())
          ).toFixed(2)
        });
      }
      return ans;
    }
  }
};
</script>

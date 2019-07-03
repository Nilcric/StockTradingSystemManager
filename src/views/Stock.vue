<template>
  <div>
    <h1>查看股票</h1>
    <el-table ref="table" :data="tableData" highlight-current-row @current-change="onClick">
      <el-table-column prop="id" label="股票代码" />
      <el-table-column prop="name" label="股票名称" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="price" label="最新成交价格" />
      <el-table-column prop="amount" label="最新成交数量" />
      <el-table-column label="最新成交数量">
        <template
          slot-scope="scope"
        >{{((scope.row.price - scope.row.cost) * scope.row.amount).toFixed(2)}}</template>
      </el-table-column>
    </el-table>

    <el-dialog title="股票详情" :visible.sync="showDialog" :before-close="onCloseDialog">
      <h3>最近交易</h3>
      <el-table v-if="selected" :data="recent(selected)">
        <el-table-column prop="time" label="时间" />
        <el-table-column prop="price" label="价格" />
        <el-table-column prop="amount" label="数量" />
      </el-table>
      {{selected}}
      <span slot="footer" class="dialog-footer">
        <el-button @click="onCloseDialog">取消</el-button>
        <el-button @click="dialogSetingVisible=true" type="primary">修改涨跌停限制</el-button>
        <el-button type="primary">暂停交易</el-button>
      </span>
    </el-dialog>

    <el-dialog title="设置涨跌停限制" v-bind:visible.sync="dialogSetingVisible" width="30%">
      <el-form :model="passForm" status-icon ref="passForm" label-width="0px" class="demo-ruleForm">
        <el-form-item label>
          <el-input :type="'text'" v-model="passForm.newPass" placeholder="单位：元"></el-input>
        </el-form-item>
        <el-form-item label prop="checkPass">
          <template>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" v-on:click="dialogSetingVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" v-on:click="dialogSetingVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Stock",
  data() {
    return {
      selected: null,
      showDialog: false,
      keyword: "",
      page: 0,
      perpage: 100,
      passForm: {
        oldPass: "",
        newPass: "",
        checkPass: ""
      },
      dialogSetingVisible: false,
      options: [
        {
          value: "0",
          label: "涨停限制"
        },
        {
          value: "1",
          label: "跌停限制"
        }
      ],
      value: "",
      tableData: []
    };
  },
  methods: {
    onSubmit() {
      server.getStockList(
        {
          name: this.keyword,
          from: this.page * this.perpage,
          to: (this.page + 1) * this.perpage
        },
        data => {
          this.tableData = data.infos;
          this.$notify({
            title: "获取股票列表成功",
            type: "success",
            offset: 64
          });
        },
        data => {
          this.$notify({
            title: "获取股票列表失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    },
    onClick(val) {
      this.selected = val;
      if (val) {
        this.showDialog = true;
      }
    },
    onCloseDialog() {
      this.showDialog = false;
      setTimeout(() => {
        this.$refs.table.setCurrentRow();
      }, 500);
    },

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
  },
  mounted() {
    this.onSubmit();
  }
};
</script>

<template>
  <div>
    <h1>查看股票</h1>
    <el-table ref="table" :data="tableData" highlight-current-row @current-change="onClick">
      <el-table-column prop="stockid" label="股票代码" />
      <el-table-column prop="name" label="股票名称" />
      <el-table-column label="状态">
        <template slot-scope="scope">{{scope.row.status ? '正常' : '暂停'}}</template>
      </el-table-column>
      <el-table-column prop="price" label="最新价" />
      <el-table-column prop="lowest_sell_price" label="出售价" />
      <el-table-column prop="highest_buy_price" label="购买价" />
    </el-table>

    <el-dialog title="股票详情" :visible.sync="showDialog" :before-close="onCloseDialog">
      <h3>最近交易</h3>
      <el-table v-if="selected" :data="selectedInsts">
        <el-table-column label="状态">
          <template slot-scope="scope">{{scope.row.type ? '购买' : '出售'}}</template>
        </el-table-column>
        <el-table-column prop="time" label="时间" />
        <el-table-column prop="price" label="价格" />
        <el-table-column prop="amount" label="数量" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onCloseDialog">取消</el-button>
        <el-button @click="dialogSetingVisible=true" type="primary">修改涨跌停限制</el-button>
        <el-button @click="onSetStatus" v-if="selected && selected.status" type="primary">暂停交易</el-button>
        <el-button @click="onSetStatus" v-else type="primary">重启交易</el-button>
      </span>
    </el-dialog>

    <el-dialog title="设置涨跌停限制" v-bind:visible.sync="dialogSetingVisible" width="30%">
      <el-form :model="limit" status-icon ref="passForm" label-width="0px" class="demo-ruleForm">
        <el-form-item>
          <el-input v-model="limit.limitUp" placeholder="涨幅限制 / 元"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="limit.limitDown" placeholder="跌幅限制 / 元"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button size="mini" v-on:click="dialogSetingVisible = false">取消</el-button>
        <el-button size="mini" type="primary" v-on:click="onSetLimit">确定</el-button>
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
      limit: {
        limitUp: null,
        limitDown: null
      },
      value: "",
      tableData: []
    };
  },
  computed: {
    selectedInsts() {
      return this.selected.insts.filter(x => x);
    }
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
      this.dialogSetingVisible = false;
      setTimeout(() => {
        this.$refs.table.setCurrentRow();
      }, 500);
    },

    onSetLimit() {
      server.setStockLimit(
        {
          stockid: this.selected.stockid,
          limitup: this.limit.limitUp,
          limitdown: this.limit.limitDown
        },
        data => {
          this.$notify({
            title: "修改成功",
            type: "success",
            offset: 64
          });
          this.onSubmit();
          this.onCloseDialog();
        },
        data => {
          this.$notify({
            title: "修改失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    },
    onSetStatus() {
      server.setStockStatus(
        {
          stockid: this.selected.stockid,
          status: !this.selected.status
        },
        data => {
          this.$notify({
            title: "修改成功",
            type: "success",
            offset: 64
          });
          this.onSubmit();
          this.onCloseDialog();
        },
        data => {
          this.$notify({
            title: "修改失败",
            message: data,
            type: "error",
            offset: 64
          });
        }
      );
    }
  },
  mounted() {
    this.onSubmit();
  }
};
</script>

<template>
  <div>
    <h1>购买股票</h1>
    <el-form ref="form" :model="form" label-width="96px">
      <el-form-item label="股票代码">
        <el-input v-model="form.id"/>
      </el-form-item>
      <el-form-item label="购买价格">
        <el-input v-model="form.price"/>
      </el-form-item>
      <el-form-item label="购买数量">
        <el-input v-model="form.amount"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">购买</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Buy",
  data() {
    return {
      form: {
        id: null,
        price: null,
        amount: null
      }
    };
  }
};
</script>

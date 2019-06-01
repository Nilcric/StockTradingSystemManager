<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :offset="4">
        <el-form ref="form" :model="form" label-width="96px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pass" show-password/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: null,
        pass: null
      }
    };
  }
};
</script>

<style>
.login {
  padding: 64px 0;
}
</style>

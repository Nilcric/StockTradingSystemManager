<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :offset="4">
        <el-form ref="form" :model="form" label-width="96px">
          <el-form-item label="旧密码">
            <el-input v-model="form.old" show-password />
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="form.new" show-password />
          </el-form-item>
          <el-form-item label="重复新密码">
            <el-input v-model="form.new2" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改密码</el-button>
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
        old: null,
        new: null,
        new2: null
      }
    };
  },
  methods: {}
};
</script>

<style>
.login {
  padding: 64px 0;
}
</style>

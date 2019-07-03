<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :offset="4">
        <el-form ref="form" :model="form" label-width="96px">
          <el-form-item label="用户名">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pass" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import server from "@/functions/server";
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: null,
        pass: null
      }
    };
  },
  methods: {
    onSubmit() {
      server.login(
        this.form.name,
        this.form.pass,
        data => {
          localStorage["username"] = this.form.name;
          this.$root.$emit("login");
          this.$router.push("/");
          this.$notify({
            title: "登录成功",
            type: "success",
            offset: 64
          });
        },
        data => {
          this.$notify({
            title: "登录失败",
            message: "错误代码 " + data.error_code,
            type: "error",
            offset: 64
          });
        }
      );
    }
  },
  mounted() {
    return;
    server.getMyInfo(
      {},
      data => {
        this.$root.$emit("login");
        this.$router.push("/");
        this.$notify({
          title: "登录成功",
          type: "success",
          offset: 64
        });
      },
      data => {
        localStorage["username"] = "";
      }
    );
  }
};
</script>

<style>
.login {
  padding: 64px 0;
}
</style>

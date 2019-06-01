<template>
  <div class="header-container">
    <div class="header-item">股票交易系统 - 管理客户端</div>
    <div class="header-item header-item-right">
      <router-link to="Login">
        <el-button to="Login">登录</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.header-container {
  color: #409eff;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
}

.header-item {
  margin: 0 16px;
}

.header-item-right {
  flex: 1;
  text-align: right;
}
</style>

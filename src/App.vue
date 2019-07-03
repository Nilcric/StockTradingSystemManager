<template>
  <div v-if="authenticated" id="app">
    <div class="view">
      <router-view />
    </div>
    <div class="nav">
      <Nav id="nav" />
    </div>
    <div class="header">
      <Header />
    </div>
  </div>

  <div v-else>
    <div class="login-view">
      <Login />
    </div>
    <div class="header">
      <Header />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Header from "./components/Header";
import Login from "./views/Login";

export default {
  name: "app",
  components: {
    Nav,
    Header,
    Login
  },
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
    this.$root.$on("login", () => {
      this.authenticated = true;
    });
    this.$root.$on("logout", () => {
      localStorage["username"] = "";
      this.authenticated = false;
    });
  }
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #303133;
  line-height: 1.5em;
  padding: 1em 0;
}

p {
  color: #606266;
  line-height: 1.5em;
  padding: 0.5em 0;
}

.el-notification {
  h2,
  p {
    padding: 0;
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.nav {
  position: fixed;
  top: 64px;
  left: 0;
  width: 256px;
  height: calc(100vh - 64px);
  overflow: auto;
}

#nav {
  height: calc(100vh - 64px);
}

.header {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  z-index: 3000;
}

.view {
  padding: 64px 0 0 256px;
  margin: 16px;
}

.login-view {
  padding: 64px 0 0 0;
  margin: 16px;
}

body {
  background-color: rgb(233, 233, 235);
}
</style>

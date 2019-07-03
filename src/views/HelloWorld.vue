
<template>
  <div class="demo-image">
    <h1>欢迎来到股票交易系统 - 管理客户端</h1>

    <i class="el-icon-edit"></i>
    <i class="el-icon-user"></i>
    <h5 style="font-family:'PingFang SC';color:#409EFF ">请按照规定对股票与交易进行管理</h5>

    <p></p>
    <div class="block">
      <el-image :src="url">
        <div slot="placeholder" class="image-slot">
          加载中
          <span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>



<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: require("../assets/logo.png")
    };
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

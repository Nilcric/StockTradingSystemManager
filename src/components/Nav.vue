<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
    <el-menu-item index="/">
      <i class="el-icon-menu"/>
      <span slot="title">交易管理系统</span>
    </el-menu-item>
    <el-menu-item index="/Home">
      <i class="el-icon-s-home"/>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-menu-item index="/Stock">
      <i class="el-icon-s-marketing"/>
      <span slot="title">查看股票</span>
    </el-menu-item>
    <el-menu-item index="/ViewBuyInstructions">
      <i class="el-icon-s-goods"/>
      <span slot="title">查看买指令</span>
    </el-menu-item>
    <el-menu-item index="/ViewSellInstructions">
      <i class="el-icon-s-marketing"/>
      <span slot="title">查看卖指令</span>
    </el-menu-item>
    <el-menu-item index="Claim">
      <i class="el-icon-key"/>
      <span slot="title">修改密码</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Nav"
};
</script>

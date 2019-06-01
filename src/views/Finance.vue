<template>
  <div>
    <h1>资金帐户</h1>

    <h3>
      可用资金：
      <span style="float: right">¥ 2,192,143.29</span>
    </h3>
    <p>可用资金指投资者可以用来购买股票或者立即取出的资金数额。</p>

    <h3>
      冻结资金：
      <span style="float: right">¥ 3,829,105,689.21</span>
    </h3>
    <p>冻结资金指投资者已经发出股票购买指令所需要的资金，虽然股票购买指令尚未执行，但是这部分资金已经冻结。当投资者发出撤销指令成功，冻结的资金又可以转化为可用资金。</p>
  </div>
</template>

<script>
export default {
  name: "Finance"
};
</script>

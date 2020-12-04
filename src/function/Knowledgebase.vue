<template>
  <div id="knowledgebase">
    <Header title="知识库"></Header>
    <van-empty description="暂无数据" />
  </div>
</template>
<script>
import { Empty } from "vant";
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>
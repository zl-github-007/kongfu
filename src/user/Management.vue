<template>
  <div id="management">
    <Header title="用户资料"></Header>
    <van-form @submit="onSubmit">
      <van-field v-model="name" name="name" label="姓名" placeholder="请填写姓名" />
      <van-field v-model="sex" name="sex" label="性别" placeholder="请选择性别" @click="show = true" />
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" cancel-text="取消" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { ActionSheet } from "vant";
import Header from "../components/Header";
export default {
  data() {
    return {
      name: "",
      sex: "",
      show: false,
      actions: [{ name: "男" }, { name: "女" }]
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    onSelect(item) {
      console.log(item.name);
      this.show = false;
      this.sex = item.name;
    }
  },
  components: {
    Header
  }
};
</script>
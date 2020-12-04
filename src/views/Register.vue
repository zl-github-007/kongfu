<template>
  <div id="register">
    <Header title="用户注册"></Header>
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="账号" placeholder="请填写登录账号" />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请填写登录密码"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <p>
      注册即视为同意
      <span class="span1" @click="to">用户使用条款</span>
    </p>
  </div>
</template>
<script>
import { Dialog } from "vant";
import Header from "../components/Header";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    to() {
      this.$router.push({
        path: "termsofuse"
      });
    },
    onSubmit(values) {
      if (this.username == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "账号不能为空，请输入账号！"
        }).then(() => {});
      } else if (this.password == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "密码不能为空，请输入密码！"
        }).then(() => {});
      } else {
        Dialog.alert({
          message: "注册成功"
        }).then(() => {
          localStorage.setItem("user", JSON.stringify(values));
          this.$router.go(-1);
        });
      }
    }
  },
  components: {
    Header
  }
};
</script>
<style scoped>
p {
  margin-left: 10px;
  font-size: 10px;
  float: left;
}
.span1 {
  color: aqua;
}
</style>
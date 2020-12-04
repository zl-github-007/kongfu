<template>
  <div id="modify">
    <Header title="修改密码"></Header>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        type="password"
        label="旧密码"
        placeholder="请输入旧密码"
      />
      <van-field
        v-model="password"
        name="password"
        type="password"
        label="新密码"
        placeholder="请输入新密码"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { Form } from "vant";
import Header from "../components/Header";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      var user = JSON.parse(localStorage.getItem("user"));
      console.log(this.username);
      console.log(user.password);
      if (this.username == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请输入旧密码"
        }).then(() => {
          // on close
        });
      } else if (this.password == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请输入新密码"
        }).then(() => {
          // on close
        });
      } else if (this.username != user.password) {
        Dialog.alert({
          title: "温馨提示",
          message: "旧密码错误，请重新输入!"
        }).then(() => {
          // on close
        });
      } else {
        user.password = this.password;
        localStorage.setItem("user", JSON.stringify(user));
        Dialog.alert({
          title: "温馨提示",
          message: "修改成功,请重新登录!"
        }).then(() => {
          this.$router.push({
            path: "/"
          });
        });
      }
    }
  },
  components: {
    Header
  }
};
</script>
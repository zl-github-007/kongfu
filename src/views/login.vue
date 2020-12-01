<template>
  <div id="login">
    <img src="../../img/6.png" id="img1" />
    <p class="name">武功果业APP</p>
    <div class="form">
      <van-icon name="user-circle-o" />
      <input type="text" placeholder="账号" v-model="user" />
      <br />
      <van-icon name="user-circle-o" />
      <input type="password" placeholder="密码" v-model="pwd" />
      <br />
      <button @click="go">登录</button>
      <span class="span1" @click="to">还没有账号？立即注册</span>
    </div>
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    go() {
      if (this.user == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "账号不能为空，请输入账号！"
        }).then(() => {});
      }else if(this.pwd==""){
         Dialog.alert({
          title: "温馨提示",
          message: "密码不能为空，请输入密码！"
        }).then(() => {});
      }else if(this.user!="123" || this.pwd!="123"){
         Dialog.alert({
          title: "温馨提示",
          message: "账号或密码输入有误，请重新输入！"
        }).then(() => {});
      }
    },
    to(){
      this.$router.push({
        path:"register"
      })
    }
  }
};
</script>
<style scoped>
#login {
  height: 100%;
  background: linear-gradient(
    rgba(153, 254, 160, 1),
    rgba(90, 195, 77, 1),
    rgba(32, 140, 2, 1)
  );
}
#img1 {
  margin-top: 40px;
  width: 60%;
}
.name {
  font-size: 30px;
  color: #fff;
}
.van-button--info {
  font-size: 25px;
  color: rgba(62, 167, 127, 1);
  background: #fff;
  border: none;
}
input {
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: rgba(90, 195, 77, 1);
  padding: 5px 5px 5px 40px;
}
.van-icon {
  position: relative;
  left: 30px;
  top: 3px;
}
button {
  margin-left: 20px;
  text-align: center;
  width: 67%;
  margin-top: 20px;
  border-radius: 30px;
  border: 1px solid #fff;
  background: #fff;
  color: rgba(65, 174, 132, 1);
  padding: 7px 5px;
}
.span1 {
  padding: 0 0 0 100px;
  color: #fff;
}
.form {
  margin-top: 55px;
}
</style>
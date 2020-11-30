<template>
  <div id="login">
    <img src="../../img/6.png" id="img1" />
    <p class="name">武功果业APP</p>
    <div class="form">
      <form>
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          <input type="text" placeholder="账号">
          <input type="password" placeholder="密码">
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>
<style scoped>
#login {
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
</style>
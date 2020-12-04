<template>
  <div id="footer">
    <ul>
      <router-link tag="li" to="/index">
        <van-icon name="wap-home-o" />
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/function">
        <van-icon name="apps-o" />
        <p>平台功能</p>
      </router-link>
      <router-link tag="li" to="/user">
        <van-icon name="user-o" />
        <p>个人中心</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Tabbar"
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  list-style: none;
  flex: 1;
  height: 40px;
}
#footer li.active {
  color: rgb(86, 152, 246);
}
#footer li.router-link-active {
  color: rgb(86, 152, 246);
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  margin-top: -5px;
  font-size: 12px;
  line-height: 18px;
}
</style>
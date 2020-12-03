<template>
  <div id="function">
    <Header title="武功果业APP"></Header>
    <img src="../../img/22.png" class="img1" />
    <van-row class="van-row2">
      <p>环境监测</p>
      <van-col span="8" @click="to">
        <img src="../../img/23.png" />
        <p>实时监测</p>
      </van-col>
      <van-col span="8" @click="to">
        <img src="../../img/24.png" />
        <p>GIS展示</p>
      </van-col>
    </van-row>
    <van-row class="van-row2">
      <p>视频监控</p>
      <van-col span="8" @click="to">
        <img src="../../img/25.png" />
        <p>设备状态</p>
      </van-col>
      <van-col span="8" @click="to">
        <img src="../../img/26.png" />
        <p>实时监测</p>
      </van-col>
      <van-col span="8" @click="to">
        <img src="../../img/27.png" />
        <p>GIS展示</p>
      </van-col>
    </van-row>
    <van-row class="van-row2">
      <p>果业知识</p>
      <router-link to="problem">
        <van-col span="8">
          <img src="../../img/28.png" />
          <p>常见问题</p>
        </van-col>
      </router-link>
      <router-link to="literature">
        <van-col span="8">
          <img src="../../img/29.png" />
          <p>文献中心</p>
        </van-col>
      </router-link>
      <router-link to="knowledgebase">
        <van-col span="8">
          <img src="../../img/30.png" />
          <p>知识库</p>
        </van-col>
      </router-link>
    </van-row>
    <div class="kon"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import { Toast } from "vant";
import Header from "../components/HeaderTwo";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer
  },
  methods: {
    to() {
      Toast({
        message: "暂时没有权限，请联系管理员分配权限！",
        position: "bottom"
      });
    }
  }
};
</script>
<style scoped>
#function {
  background: rgba(247, 247, 247, 1);
}
.img1 {
  width: 100%;
}
.van-row {
  background: #fff;
}
.van-row2 {
  padding: 10px 0 10px 0;
  margin-top: 5px;
}
.van-row2 img {
  width: 22%;
}
.van-row2 p {
  color: #000;
  margin-top: -2px;
  font-size: 10px;
}
.van-row2 > p {
  font-size: 14px;
  margin-left: 10px;
  text-align: left;
}
.kon {
  background: rgba(247, 247, 247, 1);
  height: 50px;
}
</style>
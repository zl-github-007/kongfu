<template>
  <div id="index">
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <Header title="武功果业APP"></Header>
      <img src="../../img/7.png" class="img1" />
      <van-row class="van-row1">
        <router-link to="workingcondition">
          <van-col span="6">
            <img src="../../img/8.png" />
            <p>工作动态</p>
          </van-col>
        </router-link>
        <router-link to="povertyalleviation">
          <van-col span="6">
            <img src="../../img/9.png" />
            <p>产业扶贫</p>
          </van-col>
        </router-link>
        <router-link to="demonstrationhouseholds">
          <van-col span="6">
            <img src="../../img/10.png" />
            <p>科技示范户</p>
          </van-col>
        </router-link>
        <router-link to="train">
          <van-col span="6">
            <img src="../../img/11.png" />
            <p>宣传培训</p>
          </van-col>
        </router-link>
        <router-link to="headlines">
          <van-col span="6">
            <img src="../../img/12.png" />
            <p>果业头条</p>
          </van-col>
        </router-link>
        <router-link to="notice">
          <van-col span="6">
            <img src="../../img/13.png" />
            <p>通知公告</p>
          </van-col>
        </router-link>
        <router-link to="news">
          <van-col span="6">
            <img src="../../img/14.png" />
            <p>行业新闻</p>
          </van-col>
        </router-link>
        <router-link to="Policy">
          <van-col span="6">
            <img src="../../img/15.png" />
            <p>最新政策</p>
          </van-col>
        </router-link>
      </van-row>
      <van-row class="van-row2">
        <p>技术交流</p>
        <router-link to="/growseedlings">
          <van-col span="12">
            <img src="../../img/16.png" />
            <p>育苗技术</p>
          </van-col>
        </router-link>
        <router-link to="pestcontrol">
          <van-col span="12">
            <img src="../../img/17.png" />
            <p>病虫害防治</p>
          </van-col>
        </router-link>
      </van-row>
      <van-row class="van-row2">
        <p>行业资讯</p>
        <router-link to="exhibition">
          <van-col span="12">
            <img src="../../img/18.png" />
            <p>果业展会</p>
          </van-col>
        </router-link>
        <router-link to="policytwo">
          <van-col span="12">
            <img src="../../img/19.png" />
            <p>果业政策</p>
          </van-col>
        </router-link>
      </van-row>
      <van-row class="van-row2">
        <p>果农服务</p>
        <router-link to="cooperation">
          <van-col span="12">
            <img src="../../img/20.png" />
            <p>项目合作</p>
          </van-col>
        </router-link>
        <router-link to="meteorologicalwarning">
          <van-col span="12">
            <img src="../../img/21.png" />
            <p>气象预警</p>
          </van-col>
        </router-link>
      </van-row>
      <div class="kon"></div>
    </van-pull-refresh>
    <Footer></Footer>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { PullRefresh } from "vant";
import Header from "../components/HeaderTwo";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    }
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
#index {
  background: rgba(247, 247, 247, 1);
}
.img1 {
  width: 100%;
}
.van-row1 img {
  width: 50%;
}
.van-row1 {
  padding-top: 20px;
}
.van-row1 p {
  color: #000;
  margin-top: -2px;
  font-size: 10px;
}
.van-row {
  background: #fff;
}
.van-row2 {
  padding: 10px 0 10px 0;
  margin-top: 15px;
}
.van-row2 img {
  width: 90%;
}
.van-row2 p {
  color: #000;
  margin-top: -2px;
  font-size: 10px;
}
.van-row2 > p {
  font-size: 15px;
  margin-left: 10px;
  text-align: left;
}
.kon {
  height: 50px;
}
</style>
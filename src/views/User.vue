<template>
  <div id="user">
    <div class="user-header">
      <img src="../../img/35.png" alt="点击跟换头像" />
      <p>{{username}}</p>
    </div>
    <van-row class="van-row2">
      <router-link to="collection">
        <van-col span="6">
          <img src="../../img/31.png" />
          <p>我的收藏</p>
        </van-col>
      </router-link>
      <router-link to="download">
        <van-col span="6">
          <img src="../../img/32.png" />
          <p>文献下载</p>
        </van-col>
      </router-link>
      <router-link to="putquestionsto">
        <van-col span="6">
          <img src="../../img/33.png" />
          <p>我的提问</p>
        </van-col>
      </router-link>
      <van-col span="6" @click="go">
        <img src="../../img/34.png" />
        <p>数据上报</p>
      </van-col>
    </van-row>
    <div class="user-title">
      <router-link to="management">
        <van-cell title="用户资料管理" icon="orders-o" is-link />
      </router-link>
      <router-link to="modify">
        <van-cell title="修改密码" icon="edit" is-link />
      </router-link>
      <van-cell title="扫描推荐" icon="scan" is-link @click="showPopup" />
      <van-popup v-model="show">
        <img src="../../img/36.png" class="img1" />
      </van-popup>
      <van-cell title="下载使用手册" icon="down" is-link @click="download" />
      <van-cell title="检查新版本" icon="upgrade" is-link @click="inspect" />
    </div>
    <button @click="to">退出账号</button>
    <div class="kon"></div>
    <Footer></Footer>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Popup } from "vant";
import { Cell, CellGroup } from "vant";
import { Dialog } from "vant";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      username: "",
      show: false
    };
  },
  created() {
    this.login();
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    inspect() {
      Toast({
        message: "当前已是最新版本，无需升级！",
        position: "bottom"
      });
    },
    download() {
      Dialog.confirm({
        title: "温馨提示",
        message: "下载武功果业APP使用手册"
      })
        .then(() => {
          const toast = Toast.loading({
            duration: 0,
            forbidClick: true,
            message: "下载中..."
          });

          let second = 3;
          const timer = setInterval(() => {
            second--;
            if (second) {
              toast.message = `下载中...`;
            } else {
              Toast.success("下载成功");
              clearInterval(timer);
            }
          }, 1000);
        })
        .catch(() => {
          // on cancel
        });
    },
    go() {
      Dialog.alert({
        title: "温馨提示",
        message: "暂时没有权限操作该功能"
      }).then(() => {});
    },
    login() {
      var user = JSON.parse(localStorage.getItem("password"));
      console.log(user);
      if (user) {
        this.username = user.username;
      }
    },
    to() {
      Dialog.confirm({
        title: "温馨提示",
        message: "确认要退出吗"
      })
        .then(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("password");
          this.$router.push({
            path: "/"
          });
        })
        .catch(() => {});
    }
  },
  components: {
    Footer
  }
};
</script>
<style scoped>
#user {
  background: rgba(247, 247, 247, 1);
}
.user-header {
  margin: 0px;
  background: rgba(62, 135, 238, 1);
}
.user-header p {
  margin: 0px;
}
.user-header img {
  width: 40%;
}
.user-header p {
  padding-bottom: 20px;
  color: #fff;
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
  width: 40%;
}
.van-row2 p {
  color: #000;
  font-size: 10px;
}
.user-title {
  margin-top: 10px;
  text-align: left;
}
.kon {
  height: 50px;
}
button {
  margin: 25px 0;
  color: #fff;
  border: none;
  background: rgba(225, 102, 0, 1);
  width: 100%;
  padding: 10px 0;
}
.van-popup {
  width: 80%;
}
</style>
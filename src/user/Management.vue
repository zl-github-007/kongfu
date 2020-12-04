<template>
  <div id="management">
    <Header title="用户资料"></Header>
    <van-form @submit="onSubmit">
      <van-field v-model="name" name="name" label="姓名" placeholder="请填写姓名" />
      <van-field
        v-model="sex"
        name="sex"
        label="性别"
        placeholder="请选择性别"
        @click="show = true"
        readonly
      />
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" cancel-text="取消" />
      <van-field v-model="date" name="date" label="出生日期" placeholder="请填写出生日期" />
      <van-field v-model="userid" name="userid" label="身份证号" placeholder="请填写身份证号" />
      <van-field v-model="phone" name="phone" label="联系电话" placeholder="请填写联系电话" />
      <van-field v-model="mailbox" name="mailbox" label="电子邮箱" placeholder="请填写电子邮箱" />
      <van-field v-model="wechat" name="wechat " label="微信号" placeholder="请填写微信号" />
      <van-field v-model="address" name="address" label="住址" placeholder="请填写住址" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { Calendar } from "vant";
import { ActionSheet } from "vant";
import Header from "../components/Header";
export default {
  data() {
    return {
      name: "",
      sex: "",
      date: "",
      userid: "",
      phone: "",
      mailbox: "",
      wechat: "",
      address: "",
      show: false,
      actions: [{ name: "男" }, { name: "女" }]
    };
  },
  methods: {
    onSubmit(values) {
      if (this.name == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写姓名！"
        }).then(() => {
          // on close
        });
      } else if (this.sex == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请选择性别"
        }).then(() => {
          // on close
        });
      } else if (this.date == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写出生日期"
        }).then(() => {
          // on close
        });
      } else if (this.userid == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写身份证号"
        }).then(() => {
          // on close
        });
      } else if (this.phone == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写联系电话"
        }).then(() => {
          // on close
        });
      } else if (this.mailbox == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写电子邮箱"
        }).then(() => {
          // on close
        });
      } else if (this.wechat == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写微信号"
        }).then(() => {
          // on close
        });
      } else if (this.address == "") {
        Dialog.alert({
          title: "温馨提示",
          message: "请填写住址"
        }).then(() => {
          // on close
        });
      } else {
        Dialog.alert({
          title: "成功提示",
          message: "填写个人用户信息成功！"
        }).then(() => {
          this.$router.go(-1);
        });
      }
    },
    onSelect(item) {
      this.show = false;
      this.sex = item.name;
    }
  },
  components: {
    Header
  }
};
</script>
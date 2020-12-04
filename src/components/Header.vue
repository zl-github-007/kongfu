<template>
  <header id="header">
    <van-icon name="arrow-left" @click="to" />
    <span>{{title}}</span>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String
    }
  },
  methods: {
    to() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
#header {
  width: 100%;
  height: 50px;
  color: #ffffff;
  background: rgba(67, 138, 236, 1);
  position: relative;
}

#header span {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}

#header i {
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>
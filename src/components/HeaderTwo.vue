<template>
    <header id="header">
        <van-icon name="manager-o"/>
        <span>{{title}}</span>
    </header>
</template>
<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String,
            }
        }
    }
</script>
<style scoped>
    #header {
        width: 100%;
        height: 50px;
        background: #fff;
        position: relative;
    }
    #header span {
        font-family: '楷体';
        font-weight: bold;
        color: green;
        font-size: 25px;
        text-align: center;
        line-height: 50px;
    }
    #header i {
        position: absolute;
        left: 5px;
        top: 50%;
        margin-top: -13px;
        font-size: 26px;
    }
</style>
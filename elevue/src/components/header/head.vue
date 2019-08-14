<template>
  <section class="container-fluid" >
    <nav class="nv navbar navbar-fixed-top firstHead">
      <router-link class="pull-left" :to="{path:'login'}">ele.me</router-link>
      <div class="pull-right">
        <span><router-link :to="{path:'login'}">登录</router-link></span>
        <span>|</span>
        <span><router-link :to="{path:'login'}">注册</router-link></span>
      </div>
      <div class="pull-right">
        <span><router-link :to="{path:'login'}"><i class="iconfont">&#xe71d;</i></router-link></span>
      </div>
    </nav>
    <!--第二个头部 当前城市-->
    <nav class="nv navbar navbar-fixed-top firstHead">
      <i class="pull-left iconfont" @click="back">&#xe682</i>
      <router-link :to="{path:'login'}" class="centerContent">123</router-link>
      <span class="pull-right">切换城市</span>
    </nav>
    <nav class="nv navbar navbar-fixed-top firstHead">
      <router-link class="pull-left" :to="{name:'search'}"><i class="iconfont">&#xe62c;</i></router-link>
      <span class="dome-span">
        <router-link :to="{path:'login'}">123</router-link>
      </span>
      <div class="pull-right">
        <span><router-link :to="{path:'login'}">登录</router-link></span>
        <span>|</span>
        <span><router-link :to="{path:'login'}">注册</router-link></span>
      </div>
      <div class="pull-right">
        <span><router-link :to="{path:'login'}"><i class="iconfont">&#xe71d;</i></router-link></span>
      </div>
    </nav>
    <!--第四个头部 商家界面-->
    <nav class="nv navbar navbar-fixed-top bg-warning fourModule">
      <i class="iconfont toLeft">&#xe682</i>
      <!--<img :src="" class="pull-left fourModuleImg">-->
      <div class="introduce">
        <p class="introduce_name">123</p>
        <p class="introduceC">
          <span>商家配送</span>
          <span>/</span>
          <span>123送达</span>
          <span>/</span>
          <span>配送费¥</span>
        </p>
        <p class="introduceC">公告:</p>
      </div>
      <i class="iconfont goFoodDetail">&#xe634</i>
      <div  class="leftSmall">
          <span class="pull-left leftSmallL">
            <span class="leftSmallLP">123</span>
            <span>123(APP专享)</span>
          </span>
        <i class="iconfont leftSmallR pull-right">1个活动 &#xe634 </i>
      </div>
    </nav>
    <!--第五个头部food的头部-->
    <nav class="nv navbar navbar-fixed-top firstHead">
      <i class="pull-left iconfont" >&#xe682;</i>
      <router-link :to="{path:'login'}" class="centerContent">123</router-link>
      <span class="pull-right">
        <span>编辑</span>
        <span>完成</span>
      </span>
    </nav>
    <div class="activityPage">
      <p class="activityPageTitle">123</p>
      <span class="activityPageC">优惠信息</span>
      <span class="activityPageD">
          <span class="leftSmallLP">123</span>
          <span>(APP专享)</span>
        </span>
      <span class="activityPageC">商家公告</span>
      <span class="activityPageD">123</span>
      <i class="iconfont goBackShop">&#xe618</i>
    </div>
  </section >
</template>

<script>
  export default {
    name: "Header"
  }

</script>

<style scoped>
  .nv a{
    color: #fff;
    text-decoration: none;
  }
  .nv{
    padding: 0.12rem;
    color: white;
    width: 100%;
    height: 0.2rem;
  }
  .leftSmallImg{
    position: absolute;
    left:0;
    bottom:0.05rem;
  }
  .firstHead{
    width: 100%;
    background-color: #008de1;
    text-align: center;
  }
  .bottomContent{
    position: absolute;
    right:0;
    bottom:0.1rem;
  }
  .fourModule{
    width: 100%;
    height: 1.5rem;
    background:#BBBBBB;
    opacity:0.9;
    padding:0.1rem 0.2rem;
  }
  .toLeft{
    color:white;
    position: absolute;
    left:0;
  }
  .fourModuleImg{
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.1rem;
    margin-right: 0.1rem;
  }
  .introduce_name{
    font-size: 0.2rem;
    font-weight: bold;
    margin-bottom: 0.15rem;
  }
  .introduceC{
    font-size: 0.12rem;
    margin-bottom: 0.15rem;
  }
  .goFoodDetail{
    position: absolute;
    right:0.05rem;
    bottom:0.5rem;
    z-index: 5;
    margin-left: 0.1rem;
    height: 0.4rem;
    font-family: initial;
    font-weight: bold;
  }
  .leftSmall{
    width: 100%;
    padding-top: 0.1rem;
  }
  .leftSmallLP{
    background-color: red;
    padding: 0.02rem;
    border-radius: 0.04rem;
  }
  .dome-span {
    position: absolute;
    text-align: center;
    left: 0.7rem;
    width: 2.0rem;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .activityPage{
    width: 100%;
    height: 100%;
    background: black;
    position: absolute;
    z-index:100 ;
    top:0;
    left:0;
    color:white;
  }
  .goBackShop{
    font-size: 0.3rem;
    position: absolute;
    bottom: 0.1rem;
    left: 45%;
    border: 0.02rem solid #555;
    color: #555;
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    padding-top: 0.02rem;
  }
  .activityPageC{
    display: inline-block;
    font-size:0.12rem;
    border: 0.02rem solid #555;
    border-radius: 0.5rem;
    padding:0.05rem 0.1rem;
    margin:0.1rem 0 0.2rem 1.5rem;
  }
  .activityPageTitle{
    text-align: center;
    font-size: 0.25rem;
    margin: 0.2rem 0 0.4rem 0;
  }
  .activityPageD{
    display: inline-block;
    margin: 0 0 0.2rem 0.3rem;
  }
</style>

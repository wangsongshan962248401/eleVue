<template>
  <div class="footD">
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container-fluid nav_icons">
        <router-link :to="{path:'msite'}">
          <i class="iconfont">&#xe722;</i>
          <p>外卖</p>
        </router-link>
        <router-link :to="{path:'search'}">
          <i class="iconfont">&#xe718;</i>
          <p>搜索</p>
        </router-link>
        <router-link :to="{path:'orderDetail'}">
          <i class="iconfont">&#xe75f;</i>
          <p>订单</p>
        </router-link>
        <router-link :to="{path:'profile'}">
          <i class="iconfont">&#xe60b;</i>
          <p>我的</p>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  // 底部公共组件
  export default {
    name: "footGuide"
  }
</script>

<style scoped>
  .fonc{
    color: #008de1 !important;

  }
  .nav_icons{
    display: flex;
    justify-content: space-between;
    background-color: white;
  }
  .nav_icons>a{
    text-align: center;
    display: inline-block;
    text-decoration: none;
    margin-top: 0.1rem;
  }
  .nav_icons>a>i{
    color: #000;
  }
  .nav_icons p{
    color: #000;
  }
  .footD {
    width: 100%;
    z-index: 100;
    position: absolute;
    bottom: 0;
    height: 0.36rem;
  }
</style>

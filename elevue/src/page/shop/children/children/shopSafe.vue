<template>
  <div class="shop" ref="modality">
    <i @click="btn_skip" class="search_1">&#xe61a;</i>
    <div class="wrapper clearfix">
      <div class="left_img">
        <img src="" alt="">
      </div>
      <div class="top_content">
        <span>寿司工坊</span>
        <br/>
        <span>商家配送</span>
        <span>/</span>
        <span>分钟送达</span>
        <span>/</span>
        <span>配送费5</span>
        <br/>
        <span>公告：</span>
        <span>22</span>
      </div>
      <div class="description_footer">
        <span>
          <span class="subtract">减</span>
          <span class="satisfy">满30减5，满60减8(APP专享)</span>
        </span>
        <span class="activity">1个活动</span>
      </div>
    </div>
    <div class="change_show_type">
      <div>
        <router-link :to="{path:'shopDetail'}">
          <span class="activity_show">商品</span>
        </router-link>
      </div>
      <div>
        <router-link :to="{path:'foodDetail'}">
          <span>评价</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopSafe",
    data(){
      return{
        activeKey: 0
      }
    },
    methods:{
      btn_skip(){
        this.$router.push({path:"msite"});
      }
    },
    mounted(){
      this.$refs.modality.style.height= window.innerHeight+'px';
    }
  }
</script>

<style scoped>
  .shop{
    background-color: #F5F5F5;
  }
  .wrapper{
    height: 1.2rem;
    background-color: #BAB4BE;
    padding:0.13rem 0.1rem;
  }
  .search_1{
    display: inline-block;
    color: white;
    font-size: 0.2rem;
    position: absolute;
    left: 0.06rem;
    top: 0.06rem;
  }
  .left_img{
    width: 0.5rem;
    height: 0.5rem;
    background-color: black;
    float: left;
  }
  .top_content{
    float: left;
    padding-left: 0.1rem;
  }
  .top_content span{
    display: inline-block;
    padding-bottom: 0.1rem;
  }
  .top_content :nth-child(1){
    font-size: 0.18rem;
    color: #fff;
    font-weight: 600;
  }
  .top_content :nth-child(n+2){
    font-size: 0.12rem;
    color: #fff;
    font-weight: 300;
  }
  .description_footer{
    float: left;
  }
  .activity{
    padding-left: 1rem;
    color: #fff;
    font-size: 0.13rem;
    font-weight: 400;
  }
  .subtract{
    background-color: rgb(240, 115, 115);
    border-color: rgb(240, 115, 115);
    color: #fff;
    font-size: 0.11rem;
  }
  .satisfy{
    font-size: 0.13rem;
    color: #fff;
  }
  .change_show_type{
    display: flex;
    background-color: #fff;
    padding: 0.15rem 0 0.17rem;
    border-bottom: 1px solid #ebebeb;
  }
  .change_show_type div{
    flex: 1;
    text-align: center;
  }
</style>

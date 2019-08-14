<template>
  <div class="wrapper" ref="modality">
    <div class="head">
      <div class="search_1">&#xe61e;</div>
      <!--<span class="title_text">{{a.city}}</span>-->
      <div class="head_span">
        <span class="allSpan" @click="skip">{{price2}}</span>
        <span class="allSpan">|</span>
        <span class="allSpan" @click="skip">{{price3}}</span>
      </div>
    </div>
    <div class="neck">
      <van-swipe>
        <van-swipe-item>
          <div v-for="index in value_1">
            <ul>
              <router-link :to="{path:'allshop'}">
                <li class="all_li"><img :src="'https://fuss10.elemecdn.com/'+index.image_url" alt="">
                  <br/>
                  {{index.title}}
                </li>
              </router-link>
            </ul>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div v-for="index in value_2">
            <ul>
              <li><img :src="'https://fuss10.elemecdn.com/'+index.image_url" alt="">
                <br/>
                {{index.title}}
              </li>
            </ul>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="enjoy"></div>
    </div>
    <div class="foot" ref="modality_o">
      <!--商家头部-->
      <div class="head_top">
        <i class="search_1">&#xe61f;
          <span class="nearby">附近商家</span>
        </i>
      </div>
      <!--商家展示-->
      <router-link :to="{path:'shop'}">
        <div class="head_body"  v-for="data in value_3">
          <ul>
            <li class="head_portrait">
              <img :src="'//elm.cangdu.org/img/'+data.image_path" alt="">
            </li>
            <li class="head_content">
              <div class="brand">
                <span class="sign">品牌</span>
                <span class="reputation">{{data.name}}</span>
              </div>
              <br/>
              <span class="star">
                <van-rate v-model="value" />
              </span>
              <span class="evaluate">{{data.rating}}</span>
              <span class="onSale">月售108单</span>
              <br/>
              <span class="present">20起送</span>
              <span class="slash">/</span>
              <span class="cost">配送费约5</span>
            </li>
            <li class="head_footer">
              <span>保</span>
              <span>准</span>
              <span>达</span>
              <br/>
              <span class="mango">蜂鸟送达</span>
              <span class="punctuality">准时达</span>
              <br/>
              <span class="km">{{data.distance}}</span>
              <span class="slash">/</span>
              <span class="time">14小时44分</span>
            </li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "shop",
    data(){
      return{
        // price1:"中原区尚中尚酒店(...",
        price2:"登录",
        price3:"注册",
        value_1:[],
        value_2:[],
        value_3:[],
        value: 5,
        a:""
      }
    },
    methods:{
      skip(){
        this.$router.push({path:"login"});
      }
    },
    mounted(){
   this.a=JSON.parse(localStorage.getItem("allinfor"));
      this.$refs.modality.style.height= window.innerHeight+'px';
      this.$refs.modality_o.style.height= window.innerHeight+'px';
      Vue.axios.get('https://elm.cangdu.org/v2/index_entry',null).then((res)=>{
        this.value_1=res.data.splice(0,8);
        console.log(this.value_1);
        this.value_2=res.data;
        console.log(this.value_2)
      }).catch((error)=>{
        console.log(error);
      })
      Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762',null).then((res)=>{
        this.value_3=res.data;
        console.log(this.value_3);
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .all_ul{
    height: 1.6rem;
  }
  .wrapper{
    background-color: #FFFFFF;
  }
  .head{
    height: 0.45rem;
    background-color: #3190E8;
    position: relative;
  }
  .head .search_1{
    font-size: 0.23rem;
    color: white;
    position: absolute;
    left: 0.13rem;
    top: 0.13rem;
  }
  .title_text{
    color: #fff;
    font-weight: 500;
    font-size: 0.2rem;
    display: flex;
    justify-content: center;
    line-height: 0.45rem;
  }
  .allSpan{
    color: white;
    font-size: 0.15rem;
  }
  .head_span{
    position: absolute;
    right: 0.16rem;
    top: 0.15rem;
  }
  li{
    width: 25%;
    float: left;
    text-align: center;
  }
  img{
    width: 60%;
    height: 60%;
  }
  /*灰色线条*/
  .enjoy{
    margin-top: 0.1rem;
    height: 0.1rem;
    background-color: #F5F5F5;
  }
  .search_1{
    color: #9F9F9F;
  }
  .nearby {
    font-size: 0.13rem;
    font-weight: 200;
    color: #333333;
  }
  .head_top{
    margin: 0.16rem;
    top: 0.16rem;
  }
  .head_body{
    height: 1rem;
    border-bottom: 0.01rem solid #F3F3F3;
    color: #666;
  }
  .head_portrait{
    width: 0.7rem;
    height: 0.7rem;
    margin: 0.14rem 0 0.14rem 0.14rem;
  }
  .head_portrait img{
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
  }
  .head_content{
    width: 1.4rem;
    height: 0.7rem;
    margin-top: 0.14rem;
  }
  .sign{
    color: #333;
    background-color: #ffd930;
    padding: 0 .02rem;
    font-size: 0.12rem;
    border-radius: 0.02rem;
  }
  .reputation{
    display: inline-block;
    width: 1rem;
    font-size: 0.15rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    color: #333;
  }
  .star{
    font-size: 0.1rem;
    /*padding:0 0.06rem;*/
    display: inline-block;
  }
  .evaluate{
    font-size: 0.13rem;
    color: #ff6000;
  }
  .onSale{
    font-size: 0.1rem;
    font-weight: 500;
  }
  .head_footer{
    width: 1.5rem;
    height: 0.7rem;
    margin-top: 0.14rem;
  }
  .head_footer :nth-child(1){
    color: #999;
    border: 0.02rem solid #f1f1f1;
    padding: 0 .01rem;
    border-radius: 0.02rem;
    margin-left: 0.05rem;
    font-size: 0.01rem;
    margin-left: 0.86rem;
  }
  .head_footer :nth-child(2){
    color: #999;
    border: 0.02rem solid #f1f1f1;
    padding: 0 .01rem;
    border-radius: 0.02rem;
    margin-left: 0.01rem;
    font-size: 0.01rem;
  }
  .head_footer :nth-child(3){
    color: #999;
    border: 0.02rem solid #f1f1f1;
    padding: 0 .01rem;
    border-radius: 0.02rem;
    margin-left: 0.01rem;
    font-size: 0.01rem;
  }
  .punctuality{
    color: #3190e8;
    border: 0.02rem solid #f1f1f1;
    border-radius: 0.02rem;
    font-size: 0.01rem;
  }
  .mango{
    color: white;
    border: 0.02rem solid #f1f1f1;
    border-radius: 0.02rem;
    font-size: 0.01rem;
    margin-left: 0.58rem;
    background-color: #3190e8;
    display: inline-block;
    margin-top: 0.2rem;
  }
  .present{
    font-size: 0.12rem;
    display: inline-block;
    margin:0.1rem 0 0 0.1rem;
  }
  .slash{
    font-size: 0.13rem;
  }
  .cost {
    font-size: 0.13rem;
  }
  .km{
    display: inline-block;
    font-size: 0.11rem;
  }
  .time{
    margin-top: 0.09rem;
    display: inline-block;
    font-size: 0.13rem;
    color:#3190e8;
  }
  .van-rate__item{
    padding: 0;
  }
  .van-icon{
    font-size: 0.1rem;
  }
  .all_li{
    font-size: 0.13rem;
    padding-top: 0.1rem;
    color: #666;
  }
</style>

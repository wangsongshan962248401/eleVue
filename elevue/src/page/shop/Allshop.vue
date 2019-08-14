<template>
      <div class="wrapper" ref="modality">
        <div class="absolutely">
        <div class="header">
            <section class="head_goback"></section>
            <section class="title_head">
              <span @click="go_back" class="search_1">&#xe61a;</span>
              <span>甜品饮品</span>
            </section>
        </div>
        <div class="content">
          <div @click="show_hidden">
            <span class="commodity" @click="request_data">甜品饮品</span>
            <span class="search_1">&#xe634;</span>
          </div>
          <div class="rank">
            <span class="commodity">排序</span>
            <span class="search_1">&#xe634;</span>
          </div>
          <div>
            <span class="commodity">筛选</span>
            <span class="search_1">&#xe634;</span>
          </div>
        </div>
        </div>
        <div class="footer" ref="modality">
          <!---->
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
                    <!-- -->
                <van-rate v-model="value"/>
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
          <section class="listbox clearfix" v-if="isHas">
            <ul class="left_ul">
              <li class="category_left_li clearfix" v-for="i in store">
                <section class="restaurant">
                  <img :src="getImgPath(i.image_url)" alt="">
                  <span>{{i.name}}</span>
                </section>
                <section class="category_section">
                  <span  class="category_count">2175</span>
                  <span class="btn_span">></span>
                </section>
              </li>
            </ul>
            <section class="right_section">
              <!--发起axios请求拿到数据进行处理-->
              <li class="category_left_li box_bottom clearfix">
                <section class="restaurant_span">
                  <span>异国料理</span>
                </section>
                <section class="category_box">
                  <span  class="category_count">2175</span>
                </section>
              </li>
            </section>
          </section>
        </div>
      </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Allshop",
      data(){
          return{
            value_3:"",
            value: 5,
            store:"",
            isHas:false
          }
      },
      methods:{
        go_back(){
          this.$router.push({path:"msite"});
        },
        getImgPath(path){
          //传递过来的图片地址需要处理后才能正常使用
          let suffix;
          if (!path) {
            return '//elm.cangdu.org/img/default.jpg'
          }
          if (path.indexOf('jpeg') !== -1) {
            suffix = '.jpeg'
          } else {
            suffix = '.png'
          }
          let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
          return 'https://fuss10.elemecdn.com' + url
        },
        request_data(){
          Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category',null).then((res)=>{
            this.store=res.data;
            console.log(this.store);
          }).catch((error)=>{
            console.log(error);
          })
        },
        show_hidden(){
          if(this.isHas == true){
            this.isHas=false
          }else{
            this.isHas=true
            console.log(123)
          }
        }
      },
      mounted(){
        this.$refs.modality.style.height= window.innerHeight+'px';
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762',null).then((res)=>{
          this.value_3=res.data;
          // console.log(this.value_3);
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
</script>

<style scoped>
  .absolutely{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }
  .footer{
    height: 100%;
    position: relative;
    margin-top: 0.83rem;
  }
  .listbox{
    position: fixed;
    left: 0;
    top: 0.83rem;
    width: 100%;
    height: 3.75rem;
    background-color: #FFFFFF;
  }
  .left_ul{
    width: 46%;
    height: 100%;
    background-color: #F1F1F1;
    float: left;
  }
  .right_section{
    width: 54%;
    height: 100%;
    float: left;
  }
  .category_left_li{
    width: 100%;
    padding:0.11rem 0.1rem;
  }
  .box_bottom{
    border-bottom: 0.01rem solid #e4e4e4;
  }
  .category_left_li img{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
  }
  .restaurant{
    font-size: 0.13rem;
    color: #666;
    float: left;
  }
  .restaurant_span{
    font-size: 0.13rem;
    color: #666;
    float: left;
    margin-top: 0.03rem;
  }
  .category_section{
    margin-top: 0.02rem;
    float: right;
  }
  .category_count{
    background-color: #ccc;
    border-radius: 0.1rem;
    padding: 0 0.04rem;
    font-size: 0.1rem;
    color: #fff;
    margin: 0;
  }
  .btn_span{
    display: inline-block;
    color: #ccc;
  }
  /**/
  .header{
    height:0.46rem;
    background-color: #3190E8;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .title_head span{
    font-size: 0.18rem;
    color: #fff;
    font-weight: 700;
  }
  .title_head .search_1{
    position: absolute;
    left: 0.1rem;
    top: 0.15rem;
  }
  .content .search_1{
    font-size: 0.16rem;
  }
  .content{
    height:0.37rem;
    padding: 0.1rem 0;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
    background-color: white;
  }
  .content div{
    width: 33.3%;
    height: 0.23rem;
    float: left;
    text-align: center;
  }
  .rank{
    border-left: 1px solid #f1f1f1;
    border-right: 1px solid #f1f1f1;
  }
  .commodity{
    font-size: 0.13rem;
    color: #333;
    font-weight: 400;
  }
  .category_box{
    float: right;
  }
  /**/

  li{
    width: 25%;
    float: left;
    text-align: center;
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

<template>
  <div class="wrapper">
    <div class="wrap">
      <nav class="navbar navbar-inverse head_top">
        <router-link :to="{path:'home'}" class="navbar-brand head_logo">ele.me</router-link>
        <router-link :to="{path:'/login'}" class="pull-right navbar-text login_span login_r">注册</router-link>
        <span  class="pull-right navbar-text login_span">|</span>
        <router-link :to="{path:'/login'}" class="pull-right navbar-text login_span">登录</router-link>
      </nav>
      <nav class="navbar navbar-inverse city_tip head_contennt">
        <div class="navbar-text present">当前定位城市:</div>
        <div class="navbar-text pull-right present">定位不准时,请在定位列表中选择</div>
      </nav>
      <nav class="navbar navbar-inverse city_tip head_contennt guess_city">
        <router-link :to="{path:'home'}" class="navbar-text present chengchow">{{currentCity.name}}</router-link>
        <router-link :to="{path:'searchAddress'}" class="navbar-text pull-right glyphicon glyphicon glyphicon-menu-right"></router-link>
      </nav>
    </div>
    <div class="hotCity container-fluid">
      <div class="hots">
        <p>热门城市</p>
        <ul class="row rowS ">
          <li v-for="(item , index) in hot_city"  class="col-xs-3 citys"><router-link :to="{path:'searchAddress',query:{i:item.name,id:item.id}}">{{item.name}}</router-link></li>
        </ul>
      </div>
    </div>
    <div class="hotCityT navbar-text" v-for="item in allCity" >
      <p>{{item.cityNum}}</p>
      <ul class="row rowT ">
        <li v-for="i in item.city" class="col-xs-3 citys"><router-link :to="{path:'searchAddress',query:{i:i.name}}">{{i.name,i.id}}</router-link></li>
        <br>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "home",
    data() {
      return {
        // 定位城市
        currentCity: '',
        // 热门城市
        hot_city: [],
        // 全部城市
        allCity: [],
        // 热门城市编号
        hot_cityNum: [],
      }
    },
    mounted(){
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess',null).then((res)=>{
        this.currentCity = res.data;
        console.log(this.currentCity);
      }).catch((error)=>{
        console.log(error)
      }),
        Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot',null).then((res)=>{
          // 把请求到的数据遍历一下,获取城市对应的name,存入hot_city数组
          this.hot_city = res.data.map((item)=>{return item})
          // 把请求到的数据遍历一下,获取城市对应的id,存入cityNum数组
          this.hot_cityNum = res.data.map((item)=>{return item.id})
          console.log(this.hot_cityNum);
        }).catch((error)=>{
          console.log(error)
        }),
        Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group',null).then((res)=>{
          // 把请求到所有城市的数据遍历一下,存入数组
          let arr = Object.keys(res.data).sort();
          for (let i = 0; i < arr.length; i++) {
            const obj = {cityNum: arr[i], city: res.data[arr[i]]};
            this.allCity.push(obj);
          }
        }).catch((error)=>{
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  .wrapper{
    background-color: white;
    overflow-x: hidden;
  }
  .wrap{
    padding: 0 0 10px 0;
    background-color: #F5F5F5;
  }
  .head_top{
    background-color: #3190e8;
    border: 0;
    padding: 0;
    margin: 0;
  }
  .head_logo{
    color: #fff;
  }
  .login_span{
    color: #fff;
    font-size:16px;
  }
  .login_r{
    margin-right: 13px;
  }
  .city_tip{
    background: white;
    border: 0;
  }
  .head_contennt{
    padding: 0 10px;
    margin-bottom: 0;
  }
  .present{
    display: inline-block;
  }
  .chengchow{
    color: #3190e8;
    font-size: 20px;
  }
  .guess_city{
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
  }
  .hotCity p{
    line-height: 40px;
    padding-left: 10px;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .rowS li{
    width: 25%;
    font-size: 18px;
    line-height: 40px;
    list-style: none;
    color: #6aaFee;
    text-align: center;
    background: white;
    border: 0.1rem solid #e4e4e4;
  }
  .rowT li{
    width: 25%;
    font-size: 18px;
    line-height: 40px;
    list-style: none;
    text-align: center;
    border: 0.1rem solid #e4e4e4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: white;
  }
  .rowT{
    background-color: white;
    border-bottom: 10px solid #F5F5F5;
  }
  .hotCity{
    padding-left: 0;
    padding-bottom: 10px;
    padding-right: 0;
    background-color: #F5F5F5;
  }
  .hotCityT p{
    padding-left: 0;
    margin-bottom: 0;
    padding-right: 0;
    background-color: white;
    text-indent:16px;
    line-height: 40px;
  }
  .hotCityT a{
    color: #666;
    font-size: 16px;
  }
  .hots{
    background-color: white;
  }
  .hots p{
    margin-bottom: 0;
  }
  .hotCityT{
    margin: 0;
    background-color: white;
  }
  .wrapper li{
    background-color: white;
    border: 0;
  }
  .navbar-text{
    font-size: 0.14rem;
  }
</style>

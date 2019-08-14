<template>
  <div class="wrapper"  ref="hhhhhh">
    <div class="wrap">
      <van-nav-bar
        :title="cityname"
        left-text=""
        right-text="切换城市"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <p class="p_o"></p>
      <form class="for_m">
        <div>
          <input v-model="alldata" class="input_o" type="text" placeholder="输入学校、商务楼、地址">
          <van-button @click="submitcity" type="primary" size="large">提交</van-button>
        </div>
      </form>
      <p class="p_t">搜索历史</p>
      <ul class="allData" v-if="isHas">
        <li class="li_data" v-for="(v) in register" @click="toshop(v)">
          <h4>{{v.name}}</h4>
          <p>{{v.address}}</p>
        </li>
        <footer class="clear_all_history" @click="empty_all">清空所有</footer>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Search",
    data(){
      return{
        register:[],
        cityname:"",
        cityID:"",
        isHas:true,
        alldata:"",
        abc:"",
        geohash1:'',
        }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path:'home'});
      },
      onClickRight() {
        this.$router.go(-1);
      },
      // submit(){
      //   this.$router.push({path:'shop'});
      // }
      empty_all(){
        this.isHas=false
      },
      toshop(v){
        this.$router.push({path:"/msite",query:{geohash:v.geohash}})

      },
      submitcity(){
        Vue.axios.get("https://elm.cangdu.org/v1/pois",{params:{
          city_id:this.cityID,
          keyword:this.alldata,
        }}).then((res)=>{
          this.register=res.data;
          console.log(res.data)
        }).catch((error)=>{
          console.log(error);
        })
      },
    },
    mounted(){
      this.$refs.hhhhhh.style.height= window.innerHeight+'px';
      this.cityname=this.$route.query.i;
      this.cityID=this.$route.query.id;
    }
  }
</script>

<style scoped>
  .wrapper{
    overflow-x: hidden;
    background-color: #F5F5F5;
  }
  .van-nav-bar{
    background-color: #3190e8;
  }
  .van-icon{
    color: white;
    font-size: 0.2rem;
  }
  .van-nav-bar__text{
    color: white;
    font-size: 0.15rem;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 0.18rem;
  }
  .p_o{
    height: 0.15rem;
  }
  .van-button {
    width: 3.3rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: #3190E8;
    margin: 0.1rem 0 0 0.2rem;
  }
  .for_m{
    background-color: white;
    padding: 0.1rem 0;
  }
  .input_o{
    width: 3.3rem;
    margin-left: 0.2rem;
    height: 0.3rem;
    line-height: 0.3rem;
    border: 1px solid #e4e4e4;
    padding: 0.1rem;
    border-radius: 0.03rem;
  }
  .p_t{
    padding: 0.05rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.1rem;
  }
  .allData{
    background-color: #FFFFFF;
  }
  .allData li{
    margin: 0 auto;
    padding-top: 0.1rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .li_data h4{
    margin: 0 auto 0.1rem;
    width: 90%;
    font-size: 0.16rem;
    color: #333;
  }
  .li_data p{
    width: 90%;
    margin: 0 auto 0.1rem;
    font-size: 0.1rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .clear_all_history{
    font-size: 0.16rem;
    color: #666;
    text-align: center;
    line-height: 0.6rem;
    background-color: #fff;
  }
</style>

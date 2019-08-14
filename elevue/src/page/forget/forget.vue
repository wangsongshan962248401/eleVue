<template>
  <div class="wrapper" ref="hhh">
    <div class="head">
      <van-nav-bar
        title="密码登录"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <p class="pOne"></p>
    <form class="for_a">
      <van-cell-group>
        <van-field v-model="username" placeholder="账号"/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="password" placeholder="旧密码"/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="newun" placeholder="请输入新密码"/>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="newps" placeholder="请确认密码"/>
      </van-cell-group>
      <!--<van-cell title="验证码" size="large" v-model="code">-->
      <!--<img src="getImg" class="getImgO">-->
      <!--<p class="p_n"  @click="codeImg">看不清</p>-->
      <!--<p  @click="codeImg">换一张</p>-->
      <!--</van-cell>-->
      <van-cell-group>
        <van-field v-model="code" placeholder="验证码" />
        <img :src="getImg" class="getImgO">
        <div class="content">
          <p class="p_n" @click="codeImg">看不清</p>
          <p @click="codeImg" class="trade">换一张</p>
        </div>
      </van-cell-group>
      <van-button type="primary" size="large" @click="confirmLogin">确认登录</van-button>
    </form>
  </div>

</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Password",
    data(){
      return{
        button:"密码登录",
        checked: true,
        getImg:'',
        username:"",
        password:"",
        code:"",
        newun:"",
        newps:''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path:'home'});
      },
      onClickRight() {
        console.log('按钮');
      },
      codeImg(){
        Vue.axios.post('https://elm.cangdu.org/v1/captchas',null).then((res)=>{
          this.getImg=res.data.code
        }).catch((error)=>{
          console.log(error)
        })
      },
      confirmLogin(){
        if(this.username==""){
          this.$toast("请输入您的账号");
          return;
        }else if(this.password==""){
          this.$toast('请输入您的密码');
          return;
        }else if(this.newun!=this.newps){
          this.$toast('两次输入密码不一致');
          return;
        }else{
          console.log("调用接口")
          Vue.axios.post('https://elm.cangdu.org/v2/login',{username:this.username,password:this.password,captcha_code:1234}).then((res)=>{
            console.log(res.data);
            this.$router.push({path:'home'});
          }).catch((error)=>{
            console.log(error)
          })
        }
      }
    },
    mounted(){
      this.$refs.hhh.style.height= window.innerHeight+'px';
      this.codeImg()
    },
  }
</script>

<style scoped>
  .wrapper{
    overflow-x: hidden;
    background-color: #F5F5F5;
  }
  .van-nav-bar{
    background-color: #3190E8;
  }
  .van-nav-bar__title{
    color: white;
    font-size: 0.2rem;
    font-weight: 700;
  }
  .van-icon-arrow-left{
    color: white;
    font-size: 0.2rem;
  }
  .pOne{
    height: 0.15rem;
  }
  .van-button{
    width: 3.6rem;
    margin-left: 0.08rem;
  }

  .van-button{
    margin-top: 0.2rem;
  }
  .van-cell-group{
    position: relative;
  }
  .getImgO{
    width: 1rem;
    height: 0.3rem;
    position: absolute;
    right: 0.8rem;
    top: 0.06rem;
  }
  .van-cell{
    font-size: 0.18rem;
  }
  .van-switch{
    position: absolute;
    right: 0.05rem;
    top: 0.07rem;
  }
  .trade{
    margin-top: 0.06rem;
  }
  .content{
    width: 0.5rem;
    height: 0.42rem;
    position: absolute;
    right: 0.2rem;
    top: 0.01rem;
  }

</style>

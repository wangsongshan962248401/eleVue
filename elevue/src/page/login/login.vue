<template>
  <div class="wrapper" ref="hhh">
    <div class="head">
      <van-nav-bar
        title="密码登录"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <p class="pOne"></p>
    <form class="for_a">
      <van-cell-group>
        <van-field v-model="value1" placeholder="账号" />
      </van-cell-group>
      <van-cell-group>
        <span class="letter">abc</span>
        <span class="omit">...</span>
        <van-cell-group>
          <van-field v-model="value2" placeholder="密码" />
          <van-switch
            v-model="checked"
            active-color="#4CD94"
            inactive-color="#CCCCC"
          />
        </van-cell-group>
      </van-cell-group>
      <van-cell-group>
        <van-field placeholder="验证码" v-model="value3"/>
        <img :src="code" class="codeOne">
        <div class="content">
          <p class="p_n" @click="getCode">看不清</p>
          <p @click="getCode" class="trade">换一张</p>
        </div>
      </van-cell-group>
      <p class="p_t">
        温馨提示：未注册过的账号，登录时将自动注册
      </p>
      <p class="p_t">
        注册过的用户可凭账号密码登录
      </p>
      <van-button type="primary" size="large" @click="register">登录</van-button>
      <router-link :to="{path:'forget'}">重置密码?</router-link>
    </form>
  </div>

</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Login",
    data() {
      return {
        value1: "",
        value2: "",
        value3: "",
        button: "密码登录",
        checked: false,
        code: '',
        storage: []
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        console.log('按钮');
      },
      getCode() {
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
          console.log("拿到验证码", res.data)
          this.code = res.data.code
        }).catch((error) => {
          console.log(error)
        })
      },
      register() {
        if (this.value1 == "") {
          this.$toast("请输入您的账号");
          return;
        } else if (this.value2 == "") {
          this.$toast('请输入您的密码');
          return;
        } else {
          console.log("调用接口");
          Vue.axios.post('https://elm.cangdu.org/v2/login', {
            username: this.value1,
            password: this.value2,
            captcha_code: this.value3,
          }).then((res) => {
            console.log(res.data)
            this.code = res.data;
            this.getCode()
            localStorage.setItem("allinfor",JSON.stringify(res.data))
            console.log()
          }).catch((error) => {
            console.log(error)
          })
        }
      },
    },
    mounted() {
      this.$refs.hhh.style.height = window.innerHeight + 'px';
      this.getCode()
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
  .van-cell__title span{
    font-size: 0.2rem;
    font-weight: 100;
    color: #666;
  }
  .van-cell-group{
    position: relative;
  }
  .van-switch__node{
    z-index: 20;
  }
  .letter{
    position: absolute;
    top: 0.12rem;
    right: 0.27rem;
    z-index: 10;
  }
  .omit{
    position: absolute;
    top: 0.09rem;
    right: 0.16rem;
    z-index: 10;
  }
  .van-cell__value p{
    color: #3b95e9;
  }
  .van-cell__value .p_n{
    color: #666;
  }
  .p_t{
    color: red;
    font-size: 0.12rem;
    padding: 0.08rem;
  }
  .van-button{
    width: 3.6rem;
    margin-left: 0.08rem;
  }
  .for_a a{
    position: absolute;
    right: 0.15rem;
    top: 3.35rem;
  }
  .codeOne{
    width: 1rem;
    height: 0.3rem;
    position: absolute;
    right: 0.8rem;
    top: 0.06rem;
  }
  .content{
    width: 0.5rem;
    height: 0.42rem;
    position: absolute;
    right: 0.2rem;
    top: 0.01rem;
  }
  .trade{
    margin-top: 0.06rem;
  }
  .van-cell{
    font-size: 0.18rem;
  }
  .van-switch{
    position: absolute;
    right: 0.05rem;
    top: 0.07rem;
  }
</style>

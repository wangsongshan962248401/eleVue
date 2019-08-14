<template>
    <div class="wrapper"  ref="hhhhhh">
      <div class="wrap">
        <van-nav-bar
          title="郑州"
          left-text=""
          right-text="切换城市"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
        <p class="p_o"></p>
        <form class="for_m">
          <div>
            <input class="input_o" type="text" placeholder="输入学校、商务楼、地址">
            <van-button type="primary" size="large" @click="submit">提交</van-button>
          </div>
        </form>
        <p class="p_t">搜索历史</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      methods: {
        onClickLeft() {
          this.$router.push({path:'home'});
        },
        onClickRight() {
          this.$router.go(-1);
        },
        submit(){
          this.$router.push({path:'mutual'});
        }
      },
      mounted(){
        this.$refs.hhhhhh.style.height= window.innerHeight+'px';
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
</style>

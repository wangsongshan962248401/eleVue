<template>
  <div class="top">
    <ShopSafe></ShopSafe>
  </div>
</template>

<script>
    import ShopSafe from "./children/shopSafe";
    export default {
      name: "shopDetail",
      components: {ShopSafe},
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
  .box{
    display: flex;
  }
  .box_left{
    width: 23%;
  }
  .box_right{
    width: 77%;
    background-color: #FFFFFF;
  }
  .head_span{
    padding: 0.16rem 0;
    position: relative;
    background-color: #F5F5F5;
  }
  .head_span :nth-child(1){
    font-size: 0.17rem;
    color: #666;
    font-weight: 700;
  }
  .head_span :nth-child(2){
    font-size: 0.13rem;
    color: #999;
    font-weight: 400;
  }
  .head_span :nth-child(3) {
    position: absolute;
    right: 0.1rem;
    top: 0.11rem;
    color: #BBBBBB;
    font-size: 0.2rem;
  }
  .menu_detail_list{
    padding: 0.1rem;
  }
  .right_p{
    padding-left: 0.1rem;
    float: left;
  }
  .p_1{
    margin-top: 0.01rem;
    font-size: 0.2rem;
    color: #333;
  }
  .p_2{
    font-size: 0.14rem;
    color: #999;
    line-height: 0.2rem;
  }
  .span_1{
    font-size: 0.13rem;
    color: #333;
  }
  .p_3{
    font-size: 0.1rem;
    border: 1px solid currentColor;
    border-radius: 0.1rem;
    padding: 0.03rem;
    display: inline-block;
    transform: scale(0.8);
    margin:0.05rem 0 0.06rem -0.13rem;
    color: #F8B9B9;
  }
  .money_p{
    display: inline-block;
  }
  .money_span{
    color: #f60;
    font-weight: 700;
  }
  .rise{
    color: #666;
    font-size: 0.13rem;
  }
  .specification{
    margin-left: 1rem;
    font-size: 0.13rem;
    color: #fff;
    padding: 0.02rem 0.04rem;
    background-color: #3190e8;
    border-radius: 0.08rem;
    border: 1px solid #3190e8;
  }

</style>

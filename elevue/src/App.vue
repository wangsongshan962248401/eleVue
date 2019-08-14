<template>
  <div id="app">
    <router-view></router-view>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import FootGuide from "./components/footer/footGuide";
  export default {
    name: 'App',
    components: {FootGuide},
  }
</script>

<style>
html,body{
   width: 100%;
   min-height: 100%;
 }
@font-face {
  font-family: 'iconfont';  /* project id 1330883 */
  src: url('//at.alicdn.com/t/font_1330883_evpfvhcbg55.eot');
  src: url('//at.alicdn.com/t/font_1330883_evpfvhcbg55.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1330883_evpfvhcbg55.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1330883_evpfvhcbg55.woff') format('woff'),
  url('//at.alicdn.com/t/font_1330883_evpfvhcbg55.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1330883_evpfvhcbg55.svg#iconfont') format('svg');
}
.search_1{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.1px;
  -moz-osx-font-smoothing: grayscale;}
</style>

<template>
  <div class="shop">
    <shop-safe></shop-safe>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ShopSafe from "./children/children/shopSafe";


  export default {
    name: "shop",
    components: {ShopSafe},
  }
</script>

<style scoped>

</style>

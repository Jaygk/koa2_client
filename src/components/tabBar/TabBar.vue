<template>
  <div class="home-nav">
    <div class="nav-title">XXX管理系统</div>
    <router-link tag="div" to="/home" class="user-m">用户管理</router-link>
    <!-- <div class="shop-m">商品管理</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
  .home-nav {
  height: 49px;
  background-color: #343a40;
  display: flex;
  align-items: center;
}

.home-nav div {
  height: 40px;
  line-height: 40px;
  color: #fff;
  /* width: 200px; */
  /* display: inline-block; */
}

.home-nav .nav-title {
    font-weight: normal;
    font-size: 20px;
    margin: 0 25px;
}

.user-m {
    margin-right: 10px;
}
</style>

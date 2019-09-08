<template>
  <div class="box">
    <header>沐恩</header>
    <main>
      <swiper  ref="mySwiper">
        <swiper-slide>11</swiper-slide>
        <swiper-slide>22</swiper-slide>
        <swiper-slide>33</swiper-slide>
      </swiper>
    </main>
    <footer>
      <span v-for="(item,index) in list" :key="index">{{item}}</span>
    </footer>
  </div>
</template>

<script>
export default {  
  components: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 3000, false);
  },
  data() {
    return {
      list: ["首页", "沐恩动态", "主内资料", "留言板", "我"]
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    line-height: 3rem;
    text-align: center;
    span {
      float: left;
      width: 33.3%;
      line-height: 3rem;
      text-align: center;
    }
    span:hover {
      color: red;
    }
  }
  main {
    flex: 1;
    background: pink;
    .swiper-slide{
      width: 100%;
      height: 100px;
      background: red;
  }
  }
  footer {
    line-height: 3rem;
    span {
      float: left;
      width: 20%;
      font-size: 14px;
      line-height: 3rem;
      text-align: center;
    }
    span:hover {
      color: red;
    }
  }
}
</style>
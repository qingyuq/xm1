<template>
<div>
  <Swiper></Swiper>
  <Referral></Referral>
  <div class="shoye" @click="getIndex">首页</div>
</div>
</template>

<script>
import Swiper from "./components/activitySwiper"
import Referral from "./components/referral"
export default {
  components:{
    Swiper,Referral
  },
  data(){
    return {
    }
  },
  methods: {
    getIndex(){
      wx.navigateTo({
        url: '/pages/index/main'
      })
    }
  },
}
</script>

<style>
.shoye{
  width:50px;
  height:50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  background: rgba(0,255,255,0.2);
  border: 1px solid #CFECF2;
  position: fixed;
  right: 0;
  bottom: 20px;
  color: grey
}
</style>
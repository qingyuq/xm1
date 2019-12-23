<template>
<div>
    <swiper autoplay="true" interval="2000"  indicatorDots="true" class="swiperDiv">
        <swiper-item>
          <image class="tup" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1725053002,2454504071&fm=26&gp=0.jpg"></image>
        </swiper-item>
         <swiper-item>
          <image class="tup" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=463006571,2395223714&fm=26&gp=0.jpg"></image>
        </swiper-item>
         <swiper-item>
          <image class="tup" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2678300304,109256989&fm=26&gp=0.jpg"></image>
        </swiper-item>
    </swiper>
    <p class="text">热门活动</p>
</div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
    }
  }
}
</script>

<style>
.swiperDiv{
    width: 100%;
    height: 200px
}
.text{
    margin-top:7px;
    border-bottom: 1px solid #EEEEEE;
    font-size: 17px
}
</style>
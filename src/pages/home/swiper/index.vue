<template>
<div>
 <swiper autoplay="true" interval="2000"  indicatorDots="true">
        <swiper-item>
          <image class="tup" :src="Img"></image>
        </swiper-item>
    </swiper>
</div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
      Img:""
    }
  },
  onLoad() {
     let  activityId={
       activityId:this.Global.key
     }
     this.$api.getbanner(activityId).then(res=>{
        this.Img=res.data.coverList[0].url
     })  
  }
  // onShow(){
  //     let  activityId={
  //      activityId:this.Global.key
  //    }
  //    this.$api.getbanner(activityId).then(res=>{
  //       this.Img=res.data.coverList[0].url
  //    })  
  // }
}
</script>

<style>
.tup{
    width: 100%
}
</style>
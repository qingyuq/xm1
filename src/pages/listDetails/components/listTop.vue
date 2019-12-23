<template>
    <div>
        <!-- 选手描述 -->
         <div class="miaos">
           <p>选手描述</p>
           <div class="miaosText">
             {{describe}}
           </div>
         </div>
         <!-- 选手照片 -->
         <div class="zhaop">
           <p>选手照片</p>
           <div class="zhax" v-for="(item,index) in list" :key="index">
             <img :src="item.url" alt="">
           </div>
         </div>
    </div>
</template>

<script>
export default {
  components:{
   
  },
  data(){
    return {
      list:[],
      describe:""
    }
  },
  onLoad() {
     let data={
       activityId:this.Global.key,
       id:this.Global.id
    }
    this.$api.Player(data).then(res=>{
      this.list=res.data.playerImg
      if(res.data.player.describes!=null){
        this.describe=res.data.player.describes
      }else{
        this.describe=""
      }
    })
  }
}
</script>

<style>

.miaos{
  width: 100%;
  background: white;
  margin-top:15px;
}
.miaos p{
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: grey;
  border-bottom: 1px solid #EEEEEE;
  font-size: 15px
}
.miaosText{
  width: 100%;
  height: 65px;
  color: grey;
  font-size: 15px
}
.zhaop{
  width: 100%;
  background: white;
  margin-top:15px 
}
.zhaop p{
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: grey;
  border-bottom: 1px solid #EEEEEE;
  font-size: 15px
}
.zhax{
  width: 100%;
  height: 350px;
}
.zhax img{
  width: 100%;
  height: 350px
}
</style>
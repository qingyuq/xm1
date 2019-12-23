<template>
    <div>
    <!-- 顶部 -->
      <div class="listTop">
       <p>
           <img id="Timg" :src="list.coverImg" alt="">
       </p>
       <p  class="listText">{{list.name}}</p>
       </div>
       <!-- 排行 -->
       <div class="listCenter">
         <div>
           <p>{{list.i}}</p>
           <p>排名</p>
         </div>
         <div>
           <p>{{list.ticket}}</p>
           <p>票数</p>
         </div>
         <div>
           <p>{{list.gift}}</p>
           <p>礼物</p>
         </div>
         <div>
           <p>{{list.browse}}</p>
           <p>浏览量</p>
         </div>
       </div>
    </div>
</template>

<script>
let listDe=require("../data/home")
export default {
  components:{},
  data(){
    return {
      list:[],
    }
  },
 onLoad(){
    let data={
       activityId:this.Global.key,
       id:this.Global.id
    }
    this.$api.Player(data).then(res=>{
    
      this.list=res.data.player
      console.log(1,this.list)
    })
  },
  onShow(){
    let data={
        activityId:this.Global.key,
        id:this.Global.id
    }
    this.$api.Player(data).then(res=>{
      this.list=res.data.player
    })
}
}
</script>

<style>
.listTop{
  width: 100%;
  height:150px;
}
.listTop p{
  text-align: center
}
#Timg{
  height:80px;
  border-radius: 50%;
  margin-top:20px;
  width: 80px;
}
.listText{
  color: grey;
  margin-top:5px;
  font-size: 16px
}
.listCenter{
  width: 100%;
  height:60px;
  background:#31C9B2;
  display: flex;
  justify-content: space-around;
  align-content: center
}
.listCenter div{
  flex: 1;
  margin-top:6px
}
.listCenter p{
 text-align: center;
 font-size: 15px;
 color: white;
 margin-top:3px
}
</style>
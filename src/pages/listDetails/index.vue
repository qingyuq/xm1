<template>
<div>
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
  <div class="listDeta">
    <listTop></listTop>
    <listCenter></listCenter>
  </div>
<div class="listBottom">
    <div class="listBob">
        <div class="listright" @click="getHome()">
            <img class="shy" src="/static/images/shouye2.png" alt="">
            首页
        </div>
        <div class="listright tp">投票</div>
        <div @click="getGift()">
            <img class="shy" src="/static/images/Z.png" alt="">
            送礼
        </div>
    </div>
    <div class="listImg"  @click="vote()">
        <img src="/static/images/toup.png" alt="">
    </div>
</div>
  </div>
</template>

<script>
import listTop from "./components/listTop";
import listCenter from "./components/listCenter"
export default {
  components:{
    listTop,listCenter
  },
  data(){
    return {
      list:[]
    }
  },
  onLoad(){
     let data={
       activityId:this.Global.key,
       id:this.Global.id
    }
    this.$api.Player(data).then(res=>{
      this.list=res.data.player
    })
  },
  methods: {
      getHome(){
          wx.switchTab({
                url: '/pages/home/main'
            })
      },
      getGift(){
         wx.navigateTo({
             url: '/pages/giver/main'
         })
      },
   vote(){
     console.log(this.Global.nickName)
          let data={
              playerId:this.Global.id,
              extend1:this.Global.openid,
              extend2:this.Global.nickName,
              extend3:this.Global.key
          }
          this.$api.vote(data).then(res=>{
            console.log(res)
              if(res.success){
                this.list.ticket++
                  wx.showToast({
                    title: '投票成功',
                    icon: 'success',
                    duration: 2000
                    })
              }
          })
      }
  },
}
</script>

<style>
.listDeta{
  width:95%;
  padding: 10px;
  background: #EDEDED;
}
.listBottom{
    width: 100%;
    height:65px;
    background:#9DE786;
    position:fixed;
    bottom: 0;
}
.listImg{
    width:55px;
    height:55px;
    position:fixed;
    bottom: 20px;
    left: 50%;
    margin-left:-25px
}
.listImg img{
    width: 100%;
    height: 55px;
}
.listBob{
    width: 100%;
    height:65px;
    display: flex;
}
.listBottom div{
    flex: 1;
    height:65px;
    line-height: 65px;
    font-size: 17px;
    text-align: center;
    
    
}
.listright{
    border-right: 1px solid white
}
.shy{ 
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
}
.tp{
    margin-top:15px 
}
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
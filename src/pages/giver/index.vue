<template>
    <div>
      <div>
         <!-- 顶部 -->
      <div class="listTop">
       <p>
           <img id="Timg" :src="list1.coverImg" alt="">
       </p>
       <p  class="listText">{{list1.name}}</p>
       </div>
       <!-- 排行 -->
       <div class="listCenter">
         <div>
           <p>{{list1.i}}</p>
           <p>排名</p>
         </div>
         <div>
           <p>{{list1.ticket}}</p>
           <p>票数</p>
         </div>
         <div>
           <p>{{list1.gift}}</p>
           <p>礼物</p>
         </div>
         <div>
           <p>{{list1.browse}}</p>
           <p>浏览量</p>
         </div>
       </div>
    </div>
        <div id="zxc">
            <div class="presents">
                <p>送礼物加票数</p>
            </div>
            <ul class="send">
                <li v-for="(item,index) in list" :key="index"  @click="show(index)">
                    <p class="flower">{{item.name}}</p>
                    <image :src="item.icon" class="Aimg"></image>
                    <p class="heart">+{{item.ticket}}票</p> 
                </li>
            </ul>
            <div class="addition">
                <div class="change">￥{{zongj}}<span>+{{zongp}}票</span></div>
                <div class="money"><div class="btn1" @click="fn1">-</div>
                <input class="ipt" type="text" v-model="count" disabled>
                <div class="btn2" @click="fn2">+</div></div>
            </div>
        </div>
        <div class="Immediately" @click="countersign">立即送出</div> 
    </div>
</template>
<script>
import userNam from "../../components/userName"
export default {
    name:"giver",
    components:{
        userNam
    },
    data() {
        return {
            key:"0.01",
            key1:"20",
            count:"1",
            index:"0",
            zongj:"0.01",
            zongp:"20",
            balist:[],
            list:[],
            list1:[]
        }
    },
    onLoad(){
        let data={
            activityId:this.Global.key,
            id:this.Global.id
            }
            this.$api.Player(data).then(res=>{
            this.list1=res.data.player
            })
            this.$api.giftList({id:this.Global.id}).then(res=>{
            this.list=res.data.giftList
        })
    },
    methods: {
        show(index){
            this.index=index
            if(this.count>1){
                this.count=1
                this.key = this.list[index].price
                this.key1 = this.list[index].ticket
                this.zongj=(this.key*this.count)
                this.zongp=(this.key1*this.count)
            }else{
                this.key = this.list[index].price
                this.key1 = this.list[index].ticket
                this.zongj=(this.key*this.count)
                this.zongp=(this.key1*this.count)
            }
        },
        fn1(){
            if(this.count==1){
                this.count==1
            }else{
               this.count--
               this.zongj=(this.key*this.count)
               this.zongp=(this.key1*this.count)
            }
        },
        fn2(){
            this.count++
            this.zongj=(this.key*this.count)
            this.zongp=(this.key1*this.count)
        },
        countersign(){
            // console.log(this.list[this.index].id)
            // console.log(this.Global.key)
            // console.log(this.Global.id)
            let data={
                playerId:this.Global.id,
                giftId:this.list[this.index].id,
                quantity:this.count,
                ticket:this.zongp,
                activityId:this.Global.key,
                extend1:this.Global.openid,
                extend2:this.Global.nickName,
                extend3:this.Global.avatarUrl
            }
            this.$api.giftVote(data).then(res=>{
                console.log(res)
                if(res.success){
                    let data={
                        activityId:this.Global.key,
                        id:this.Global.id
                     }
                    this.$api.Player(data).then(res=>{
                    this.list1=res.data.player
                    })
                }
            })
            // console.log(this.zongj)
            // console.log(this.zongp)
        }
    },
    onShow(){
    }
}
</script>
<style>
    body{background:#F5F5F5;margin-bottom:150rpx}
    .myul li p{line-height:60rpx}
    #zxc{width:95%;;height:1200rpx;margin:0 auto;background:#F5F5F5;}
    .presents{width:95%;margin:30rpx auto;background:#fff;margin-top:30rpx;height:30px;line-height:30px;}
    .presents p{display:inline-block;font-size:15px;width:100%;height:30px;line-height:30px;color:gray;}
    .send{width:100%;background:#fff;margin-top:30rpx}
    .send li{width:30%;height:300rpx;float:left;margin-left:2.25%}
    .send .flower{width:100%;height:50rpx;font-size:30rpx;line-height:50rpx;background:#fff;color:gray;text-align:center}
    .send .heart{width:100%;height:50rpx;border-bottom:5rpx solid #99cb41;font-size:30rpx;line-height:50rpx;background:#b3e659;color:gray;text-align:center}
    .Aimg {width:100%;height:180rpx}
    .addition{width:95%;height:100rpx;display:flex;margin:0 auto}
    .change{flex:3;color:gray;font-size:35rpx;margin-top:30rpx}
    .change{color:gray;font-size:30rpx;margin-top:30rpx}
    .money{flex:2;display:flex}
    .btn1{flex:1.5;height:70rpx;font-size:40rpx;color:#000;background:#fff;text-align:center;line-height:70rpx;margin-top:10rpx}
    .ipt{flex:2;height:68rpx;font-size:35rpx;color:gray;background:#fff;text-align:center;line-height:70rpx;margin-top:10rpx}
    .btn2{flex:1.5;height:70rpx;font-size:40rpx;color:#000;background:#fff;text-align:center;line-height:70rpx;margin-top:10rpx}
    .Immediately{width:100%;height:100rpx;background:#1AAD18;position:fixed;left:0;bottom:0;color:#fff;font-size:40rpx;text-align:center;line-height:100rpx}
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
.addition{
 margin-bottom:50px
}
</style>
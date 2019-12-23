<template>
 <div class="home">
 <div v-if="!isHide"> 
    <Swiper></Swiper>
    <Gross></Gross>
    <Finish></Finish>
    <Subject></Subject>
  <div class="kef">
    <ul>
      <li @click="getactivity">列表</li>
      <li>关注</li>
      <li>客服</li>
    </ul> 
  </div> 
  <!-- /static/images/music-stop.png 
 /static/images/music-start.png -->
  <div class="yiny" @click="stopMusic">
    <img class="yinyImg" :src="isPlayMusic?'/static/images/music-start.png':'/static/images/music-stop.png'" alt="">
  </div>
  </div>
  <div class="login" v-if="isHide">
    <div class="logintop">
      <p class="loginImg">
        <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1107263072,1224997471&fm=26&gp=0.jpg" alt="">
      </p>
    </div>
    <div class="loginPoint">
      <p>申请获取以下权限</p>
      <p>获得你的公开信息(昵称，头像等)</p>
    </div>
     <button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">获取用户信息</button>
    <div><button type="primary" open-type="getUserInfo" class="button" @getuserinfo="bindGetUserInfo">授权登录</button></div>
  </div>
</div>
</template>

<script>
import Swiper from "./swiper/index"
import Gross from "./gross/index"
import Finish from "./finish/index"
import Subject from "./subject/index"

export default {
  name:"home",
  components:{
    Swiper,Gross,Finish,Subject
  },
  data(){
    return {
      isHide: true,
      isPlayMusic:this.Global.getlist.isPlayMusic,
      isMusic:""
    }
  },
  created() {
    var This=this
    wx.getSetting({
      success (res) {
        if(res.authSetting['scope.userInfo']){
          This.isHide=false
          wx.getUserInfo({
            success(res) {
               let name=res.userInfo.nickName;
               var ss=name.replace(/\[([^\[\]]+)\]/g,':$1:')
              This.Global.avatarUrl=res.userInfo.avatarUrl
              This.Global.nickName=ss
                wx.login({
                  success (res) {
                     let data={
                        code:res.code
                      }
                    This.$api.Login(data).then(res=>{
                      This.Global.openid=res.openid
                    })
                  }
                })
              }
          })
        }
      }
    })
  },
  onLoad() {   
    let  activityId={
       activityId:this.Global.key
     }
    this.$api.getbanner(activityId).then(res=>{
        this.isMusic=res.data.hdActivity.music
        wx.playBackgroundAudio({
          dataUrl: this.isMusic
        }) 
     }) 
  },
  methods: {
    getactivity(){
      wx.reLaunch({
        url: '/pages/Activity/main'
      })
    },
     bindGetUserInfo(e){
       var This=this
      if(e.mp.detail.userInfo){
        this.isHide=false
         wx.getUserInfo({
            success(res) {
             
              This.Global.avatarUrl=res.userInfo.avatarUrl
              This.Global.nickName=res.userInfo.nickName
                wx.login({
                  success (res) {
                     let data={
                        code:res.code
                      }
                    This.$api.Login(data).then(res=>{
                      This.Global.openid=res.openid
                    })
                  }
                })
              }
          })
      }else{
        wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
            showCancel:false,
            confirmText:"返回授权",
            success (res) {
              if(res.confirm){
                console.log('用户点击了“返回授权”');
              }
            }
        })
      }
    },
    stopMusic(){
      if(this.isPlayMusic==false){
        this.isPlayMusic=true
        wx.pauseBackgroundAudio()
      }else{
        this.isPlayMusic=false
         wx.playBackgroundAudio({
        dataUrl:this.isMusic
      })
      }
      
    }
  },
  onShow(){
     wx.playBackgroundAudio({
        dataUrl:this.isMusic
    })
  },
  onHide(){
    wx.pauseBackgroundAudio()
  }
}
</script>

<style>
.home{
  background: #EDEDED;
}
.kef{
  position: fixed;
  left: 0;
  bottom:10px;
}
.kef li{
  width:40px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: rgb(202, 253, 253);
  border: 1px solid #CFECF2;
  margin-top:5px; 
  color: grey;
}
.yiny{
  position: fixed;
  top:20px;
  right:5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.yinyImg{
  width:50px;
  height:50px;
  border-radius: 50%;
  animation:yiny 2s linear infinite;  
}
 @keyframes yiny{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }
 .login{
  width: 90%;
  height:100vh;
  padding:0 17px 0 17px;
}
.logintop{
  width:100%;
  height:200px;
  border-bottom:1px solid grey;
}
.loginImg{
  width:100%;
  line-height: 200px;
  height:200px;
  text-align: center
}
.loginImg img{
  width:70px;
  height:70px;
  border-radius: 50%
}
.loginPoint{
  margin:30px 0 30px 0;
  font-size: 17px;
}
.button{
  border-radius: 80rpx;
}
</style>
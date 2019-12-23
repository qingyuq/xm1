<template>
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
     <!-- <button open-type="getUserInfo"  @getuserinfo="bindGetUserInfo">获取用户信息</button> -->
    <div><button type="primary" open-type="getUserInfo" class="button" @getuserinfo="bindGetUserInfo">授权登录</button></div>
  </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
      isHide: true
    }
  },
  mounted() {
    var This=this
    console.log(1)
    wx.getSetting({
      success (res) {
        console.log(res)       
        if(res.authSetting['scope.userInfo']){
          This.isHide=false
          wx.getUserInfo({
            success(res) {
                wx.login({
                  success (res) {
                    console.log(res.code)
                  }
                })
              }
          })
        }
      }
    })
  },
  methods:{
    bindGetUserInfo(e){
      if(e.mp.detail.userInfo){
        This.isHide=false
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
    }
  }
}
</script>

<style>
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
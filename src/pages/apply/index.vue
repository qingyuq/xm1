<template>
<div class="baom">
    <div class="xianq">
       <div class="line">在线报名</div>
       <div class="player">
            <lable>选手名称</lable><input type="text" placeholder="请输入选手名称" v-model="isName">
            <lable>手机号</lable><input type="text" placeholder="请输入手机号" v-model="mobile">
            <lable>分组</lable>
             <picker @change="showPicker" :value="index" :range="array">
              <div type="default" class="complete">{{array[index]}}<span><img src="/static/images/jiantou9.png"></span></div>
              </picker>
            <lable>选手描述</lable><textarea placeholder="请输入选手描述"  rows="6" cols="10" v-model="describe"></textarea>
       </div>
       <div class="submit" @click="skip()">提交</div>
    </div>
    <div class="shangc">
      <p>上传选手图片(1-3张)</p>
      <div v-for="(item,index) in tempFilePaths" :key="index" class="tus">
         <img class="tempImg" :src="item" alt="">
     </div>
      <div :class="{tux:bol}" @click="shujsc()">
          {{sss}}
      </div>
    </div>
</div>
</template>
<script>
export default {
    name:"apply",
    components: {
  },
  data() {
    return {
        index:0,
        array:["全部","分组一","分组二"],
        tempFilePaths:[],
        sss:"+",
        bol:true,
        addList:"",
        id:"",
        isName:"",
        mobile:"",
        describe:"",
        img:[]
    }
  },
  onLoad() {
     this.$api.GroupList({activityId:this.Global.key}).then(res=>{
        let arr=res.data.hdGroups
        this.addList=arr
        let array=[
            "选择分组"
        ]
        for(let i of arr){
            let name=i.name
            array.push(name)
        }
        this.array=array
        this.bol=true
        this.sss="+"
     })
  },
  methods: {
    showPicker(e){
        this.index=e.mp.detail.value
        let inx=e.mp.detail.value-1
        this.id=this.addList[inx].id
    },
    shujsc(){
      let This=this
      wx.chooseImage({
        count:3,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
            for (var x = 0; x < res.tempFilePaths.length; x++) {
              wx.getFileSystemManager().readFile({
                  filePath: res.tempFilePaths[x], //选择图片返回的相对路径
                  encoding: "base64",//这个是很重要的
                  success: res => { //成功的回调
                  let usr=res.data
                  This.img.push(
                    {"img":`data:image/jpeg;base64,${usr}`}
                  )
                  console.log()
                 }
              })
              This.tempFilePaths.push(res.tempFilePaths[x])
                let denseKeys = Object.keys(This.tempFilePaths)
                if(denseKeys[2]==2){
                  This.bol=false;
                  This.sss="";
                  wx.showModal({
                    title: '提示',
                    content: '照片最多上传3张!',
                    success(res) {
                      if (res.confirm) {
                        console.log('用户点击确定')
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                }     
            }
          }
        })
    },
    skip(){
      //  mpvue.switchTab({url:"/pages/home/main"})
      let data={
        name:this.isName,
        tel:this.mobile,
        groupId:this.id,
        describes:this.describe,
        activityId:this.Global.key,
        pics:JSON.stringify(this.img),  
      }
      console.log(data)
      this.$api.add(data).then(res=>{
        console.log(res)
      })
    },
  },
  onUnload:function(){
    this.tempFilePaths=[]
  }
}
</script>
<style>
    .baom{
      width: 95%;
      padding: 10px;
    }
    .xianq{
      width: 100%;
    }
    .line{
      width:100%;
      height:100rpx;
      font-size:45rpx;
      line-height:100rpx;
      text-align:center;
      color:#1AAD18;
      border-bottom:1px solid #EEEEEE
      }
    .player{
      width:100%;
      height:280px;
      }
    lable{
      width:30%;
      height:60rpx;
      line-height:60rpx;
      float:left;
      margin-top:20rpx;
      color:grey}
    input{
      margin-top:20rpx;
      height:60rpx;
      background:#EEEEEE;
      border:1rpx solid #EEEEEE;
      width:65%;
      float:left
      }
    input::-webkit-input-placeholder{color: #aaacb0;font-size:30rpx;}
    textarea{
      width:65%;
      color:#aaacb0;
      float:left;
      margin-top:20rpx;
      background:#EEEEEE;
      border:1rpx solid #EEEEEE
      }
    .complete{
      width:65%;
      line-height:60rpx;
      height:60rpx;
      color:grey;
      float:left;
      margin-top:20rpx;
      background:#EEEEEE;
      border:1rpx solid #EEEEEE; 
      outline:none;
      }
      .complete img{
        width: 20px;
        height: 20px;
        float: right;
        margin:5px;
      }
    .submit{
      width:98%;
      height:100rpx;
      line-height:100rpx;
      text-align:center;
      color:white;
      margin:0 auto;
      background:#1aad18;
      position:fixed;
      bottom:10rpx;
      left:8rpx;
      border-radius:5px;
      }
      .shangc{
        width: 100%;
        color:grey;
      }
      .tux{
        float: left;
        margin-top:10px;
        width:80px;
        height:80px;
        line-height: 80px;
        text-align: center;
        border:1px grey dashed;
        font-size:20px;
      }
      .tus{
        float: left;
        margin-top:10px;
        margin-left:10px;
        width:80px;
        height:80px;
      }
      .tempImg{
         width:80px;
        height:80px;
      }
</style>
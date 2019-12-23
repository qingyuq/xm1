<template>
<div>
  <div class="referral" v-for="(item,index) in list" :key="index" @click="clickHome(item.id)">
    <div>{{index+1}}</div>
    <div>{{item.name}}</div>
    <div>{{item.browse}}</div>
    <div><img class="reImg" src="/static/images/huo.png" alt=""></div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
       list:""
    }
  },
  mounted() {
    this.$api.getList().then(res=>{
      console.log(res)
      this.list=res.data
    })
  },
  methods: {
    clickHome(id){
      this.Global.key=id
     wx.reLaunch({
        url: '/pages/home/main'
      })
    }
  },
  onShow(){
    this.$api.getList().then(res=>{
      this.list=res.data
    })
  }
}
</script>

<style>
.referral{
  width: 100%;
  height: 55px;
  display: flex;
  border-bottom: 1px solid #EEEEEE;
}
.referral div{
  height: 55px;
  line-height: 55px
}
.referral :nth-child(1){
  flex:1;
  color: red;
}
.referral :nth-child(2){
  flex:4
}
.referral :nth-child(3){
  flex:2
}
.referral :nth-child(4){
  flex:1
}
.reImg{
  margin-top:10px;
  width:30px;
  height:30px;
}
</style>
<template>
    <div class="finish">
      <div>
        <button class="finBtn" @click="getApply" v-if="!bol">我要报名</button>
      </div>
      <div class="finish-div" v-if="!bol">
          距离活动结束：{{time}}
      </div>
      <div class="finish-div" v-if="bol">
          活动已结束
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      bol:false,
      curStartTime: '2020-12-11 10:00:00',
      time : '',
    }
  },
  mounted() {
    this.countTime()
  },
  methods: {
    getApply(){
      wx.navigateTo({
        url: '/pages/apply/main'
      })
    },
    countTime(){
      //获取当前的时间
      let date= new Date()
      let now = date.getTime()
      //设置截止时间
      let endDate = new Date(this.curStartTime)
      let end = endDate.getTime()
      //时间差
      let leftTime=Math.floor((end-now)/1000)
      //天
      let d=Math.floor(leftTime/(24*60*60))
      //时
      let h=Math.floor(leftTime/60/60%24)
      //分
     
      let m=Math.floor(leftTime/60%60)
      //秒
      let s=Math.floor(leftTime%60)
      
      if(leftTime<0){
          this.bol=true
          this.time=""
      }else{
        this.time =`${d}天${h}小时${m}分${s}秒`
      }
       if (!this.time) {
            return
        } else {
          // 递归每秒调用countTime方法，显示动态时间效果,
            setTimeout(this.countTime, 1000)
        }
    }
  },
}
</script>

<style>
.finish{
    widows: 95%;
    padding:0 10px 10px 10px;
}
.finish-div{
   width: 100%;
   height:30px;
   line-height: 30px;
   background: #F4FEFE;
   text-align: center;
   color: #8B9DA9;
   border:1px solid #CEEAEE;
   border-bottom: none;
   margin-top:10px;
}
.finBtn{width: 70%;background:#30C8B1;height: 30px;color:white;line-height: 30px;}
</style>
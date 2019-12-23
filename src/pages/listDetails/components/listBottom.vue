<template>
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
</template>

<script>
export default {
  components:{},
  data(){
    return {
    }
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
        const pages = getCurrentPages()
        // //声明一个pages使用getCurrentPages方法
        const perpage = pages[pages.length - 1]
         console.log(perpage)
        // //声明一个当前页面
        perpage.onReady()  
        // //执行刷新
          let data={
              playerId:this.Global.id,
              extend1:1,
              extend2:2,
              extend3:this.Global.key
          }
          this.$api.vote(data).then(res=>{
              if(res.success){
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
</style>
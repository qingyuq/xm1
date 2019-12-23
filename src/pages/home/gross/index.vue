<template>
    <div class="gross">
        <div class="grossa">
            <div class="lift">
                {{lints.enroll}}
                <p>已报名</p>
            </div>
            <div class="cenret">
                {{lints.sumVote}}
                 <p>总票数</p>
            </div>
            <div class="right">
                {{lints.browse}}
                 <p>浏览量</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
        lints:""
    }
  },
  onLoad() {
    let  activityId={
       activityId:this.Global.key
     }
      this.$api.getbanner(activityId).then(res=>{
          console.log(res)
          this.lints=res.data.hdActivity
      })
  }
//   onShow(){
//       let  activityId={
//        activityId:this.Global.key
//      }
//       this.$api.getbanner(activityId).then(res=>{
//           this.lints=res.data.hdActivity
//       })
//   }
}
</script>

<style>
.gross{
    width: 95%;
    height:60px;
    padding: 10px
}
.grossa{
    width: 100%;
    height:60px;
    background: #30C8B1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center
}
.grossa div{
    flex: 1;
    color: white;
    font-size: 15px
}
</style>
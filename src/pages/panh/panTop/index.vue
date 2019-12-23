<template>
    <div class="PanTop">
        <div class="PanTop-div">
            票数排行榜
        </div>
        <div class="panhang">
            <div @click="getDetails(Rankinglist1.id)">
                <p class="pam">NO.2</p>
                <p class="sss"><img class="paImg" :src="Rankinglist1.coverImg" alt=""></p>
                <p class="panhang-txt aaa">{{Rankinglist1.name}}</p>
                <p class="pias">{{Rankinglist1.ticket}}票</p>
            </div>
            <div @click="getDetails(Rankinglist.id)">
                <p class="pam"><img class="hg" src="/static/images/champion.png" alt=""></p>
                 <p class="sss"><img class="pamImg" :src="Rankinglist.coverImg" alt=""></p>
                 <p class="diy aaa">{{Rankinglist.name}}</p>
                 <p class="diys">{{Rankinglist.ticket}}票</p>
            </div>
            <div @click="getDetails(Rankinglist2.id)">
                <p class="pam">NO.3</p>
                 <p class="sss"><img class="paImg" :src="Rankinglist2.coverImg" alt=""></p>
                 <p class="panhang-txt aaa">{{Rankinglist2.name}}</p>
                 <p class="pias">{{Rankinglist2.ticket}}票</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        Rankinglist:[],
        Rankinglist1:[],
        Rankinglist2:[]
    }
  },
  created() {
      
  },
  mounted() {
      let  activityId={
       activityId:this.Global.key
     }
      this.$api.Rankinglist(activityId).then(res=>{  
          this.Rankinglist=res.data.playerList[0]
          this.Rankinglist1=res.data.playerList[1]
          this.Rankinglist2=res.data.playerList[2]
      }) 
},
methods: {
    getDetails(id){
          wx.navigateTo({
              url: '/pages/listDetails/main?id='+id
          })
      }
},
}
</script>

<style>
.PanTop{
    widows: 95%;
    padding:10px 10px 0 10px;
}
.PanTop-div{
    text-align: center;
    color: white;
    background:#31C9B2 ;
    width: 100%;
    height:35px; 
    line-height: 35px;
    font-size: 14px
}
.panhang{
    background:white;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-items: center;
}
.panhang div{
    flex: 1
}
.pam{
    text-align: center;
    color: #FDD502;
     margin-top: 20px;
}
.paImg{
    width:60px;
    height: 60px;
    border-radius: 50%
}
.pamImg{
     width:70px;
    height:70px;
    border-radius: 50%
}
.sss{
    text-align: center
}
.panhang-txt{
    text-align: center;
    font-size: 13px;
    color: grey
}
.pias{
    font-size: 16px;
    color:#30C8B1;
    text-align: center;
}
.diy{
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: grey
}
.diys{
    font-size: 16px;
    text-align: center;
    color:#30C8B1;
}
.aaa{
    margin-top: 5px
}
.hg{
    width: 40px;
    height:40px;
}

</style>
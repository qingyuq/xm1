<template>
    <div class="part">
        <div class="partDiv" v-for="(item,index) in list" :key="item.id" @click="getDetails(item.id)">
            <div class="partImg">
                <img class="Imgp" :src="item.coverImg" alt="">
            </div>
            <div class="parttxt">
                <p style="font-size: 14px;">{{item.name}}</p>
                <p style=" font-size: 12px;">{{item.ticket}}票</p>
            </div>
            <div class="xh">
                {{index+4}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        list:[]
    }
  },                                                                                              
  created() {
    //   this.Global.key
       let  activityId={
       activityId:this.Global.key
     }
    this.$api.Rankinglist(activityId
      ).then(res=>{ 
        this.list=res.data.playerList1
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
.part{
    width: 95%;
    padding:0 10px 0 10px;
}
.partDiv{
    border-top: 1px solid #eeeeee;
    width: 100%;
    height:80px;
    background:white;
    display: flex;
    justify-content:space-around;
    align-items: center
}
.Imgp{
    margin: 5px 0 0 5px;
    width: 50px;
    height:50px;
    border-radius: 50%;
}
.partImg{
    width: 60px;
    height:60px;
}
.parttxt{
    width: 65%;
    height:70px;
}
.parttxt p{
    margin-top:10px;
    color: gray
}
.xh{
    width: 40px;
    font-size: 15px;
    color: grey
}
</style>
<template>
    <div class="sssss">
        <div class="ticket" v-if="bol">
            <p><img class="ticketImg" src="/static/images/xihuan.png" alt=""></p>
            <p class="ticketText">喜欢我的人 在这里驻留</p>
            <p><button>送ta礼物加票</button></p>
        </div>
        <div class="ticket-shuj"  v-if="!bol">
            <ul v-for="item in list" :key="item.id" >
                <li class="ticket-li">
                    <div class="ticketLetf">
                        <img :src="item.extend3">
                    </div>
                    <div class="ticketCenter">
                        {{item.extend2}}
                    </div>
                    <div class="ticketRight">
                        {{item.ticket}}票
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        bol:false,
        list:"",
    }
  },
onLoad() {
    let data={
       activityId:this.Global.key,
       id:this.Global.id
    }
    this.$api.Player(data).then(res=>{ 
        console.log(res)
      this.list=res.data.hdPlayerGiftlist
      console.log(res.data)
      if(res.data.hdPlayerGiftlist.length==0){
          this.bol=true
      }else{
         this.bol=false
      }
    })
  }
}
</script>

<style>
li{
    list-style: none
}
.ticket{
    width: 100%;
    height: 230px;
    background: white
}
.ticket p{
    text-align: center;
}
.ticket button{
    width:60%;
    height: 30px;
    line-height: 30px;
    border-radius:40px;
    background: #31C9B2;
    color: white;
    font-size: 16px;
}
.ticketText{
    font-size: 12px;
    color:grey;
    margin: 10px
}
.ticketImg{
    width:100px;
    height:100px;
    margin-top:20px
}
.ticket-shuj{
    width: 100%;
}
.ticket-li{
    width: 100%;
    border-bottom:1px solid #EEEEEE;
    height:90px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ticket-li div{
    height:90px;
    line-height: 90px
}
.ticketLetf{
    flex: 1
}
.ticketLetf img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 10px
}
.ticketCenter{
    flex: 2;
    color: grey
}
.ticketRight{
    flex:1;
    color: #31C9B2
}
</style>
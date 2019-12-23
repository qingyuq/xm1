<template>
    <div class="listRec">
        <div class="dianc"></div>
        <p class="toupj">投票记录</p>
        <div>
            <ul v-for="(item,index) in listL" :key="index">
                <li class="RecordLi">
                    <div class="xianq">
                        <p class="xianqName">{{item.extend2}}</p>
                        <p>{{item.createTime}}</p>
                    </div>
                    <div class="jay" v-if="tes">+1</div>
                </li>
            </ul>
        </div>
        <p class="RecBtn">
            <button v-if="btn">查看更多</button>
            <button v-if="!btn">已经是最后一页了</button>
        </p>
    </div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        tes:true,
        btn:false,
        listL:""
    }
  },
  onLoad() {
       let data={
       playerId:this.Global.key,
    }
    this.$api.playerTicket(data).then(res=>{ 
        // this.listL=res.rows
    })
  }
}
</script>

<style>
.listRec{
    background:white;
    margin-bottom: 70px;
}
.dianc{
    width: 100%;
    height: 20px;
}
.toupj{
    text-align: center;
    border-bottom: 1px solid #EEEEEE;
    color: grey;
    font-size: 16px 
}
.RecordLi{
    width: 100%;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #EEEEEE
}
.xianq{
    flex:7
}
.jay{
    flex: 1;
    color: #31C9B2
}
.RecordLi p{
    color: grey
}
.xianqName{
    margin-top:7px;
}
.RecBtn{
    width: 100%;
    margin-top:10px; 
    text-align: center;
    padding-bottom:10px; 
}
.RecBtn button{
    width:90%;
    height: 40px;
    line-height: 40px;
    color: white;
    background: #31C9B2;
    border-radius: 2%;
}
</style>
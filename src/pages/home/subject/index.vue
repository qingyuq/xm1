<template>
<div>
    <!-- 搜索 -->
<div class="search">
    <div class="searchDiv">
        <div class="ipt">
            <input placeholder="姓名" v-model="isName">
        </div>
            <div class="btn">
            <button class="btn-b" @click="search">搜索</button>
        </div>
    </div>
</div>
   <!-- 选择分组 -->
<picker @change="showPicker" :value="index" :range="array">
   <div class="fenzu">
       {{array[index]}}
    <div class="spanImg"><img src="/static/images/xiajiantou.png" alt=""></div>
   </div>
</picker>
    <!-- 主体 -->
<div class="subject">
    <div v-for="(item,index) in list" :key="item.id" class="list" @click="cdDetails(item.id)">
        <div class="bianh">编号:{{index+1}}</div>
        <img class="sbuImg" :src="item.coverImg" alt="">
        <p class="subText textright">{{item.name}}</p>
        <p class="subName textright">{{item.ticket}}票</p>
        <p style="margin:5px 0 5px 0;"><button class="subBtn">投票</button></p>
    </div>
</div>
</div>
</template>

<script>
export default {
  components:{},
  data(){
    return {
        list:"",
        index:0,
        array:[],
        GroupList:"",
        bol:true,
        isName:""
    }
  },
  onLoad() {
    //   this.Global.key
    let  activityId={
       activityId:this.Global.key
     }
    this.$api.playerlist(activityId).then(res=>{
        this.list=res.rows
     })
     this.$api.GroupList(activityId).then(res=>{
        let arr=res.data.hdGroups
        this.GroupList=arr
        let array=[
            "选择分组"
        ]
        for(let i of arr){
            let name=i.name
            array.push(name)
        }
        this.array=array
     })
  },
  methods: {
      cdDetails(id){
          this.Global.id=id
          wx.navigateTo({
              url: '/pages/listDetails/main'
          })
      },
      showPicker(e){
        let inx=e.mp.detail.value
        if(inx==0){
            let  activityId={
            activityId:this.Global.key
            }
            this.$api.playerlist(activityId).then(res=>{
                this.list=res.rows
            })

        }else{
        let ins=inx-1
        let ofn=this.GroupList[ins].id
        let groupId={
           groupId: ofn
        }
        this.$api.playerlist(groupId).then(res=>{
            this.list=res.rows
        })
        }
    },
    search(){
       let data={
           activityId:this.Global.key,
           name:this.isName
       }
       this.$api.playerlist(data).then(res=>{
                this.list=res.rows
            })
    },
   
  },
   onShow(){
    let activityId={
       activityId:this.Global.key
     }
    this.$api.playerlist(activityId).then(res=>{
        this.list=res.rows
     })
    }
  
}
</script>

<style>
.search{
    width: 95%;
     padding: 10px;
    height:30px;
}
.searchDiv{
    width: 100%;
    height: 30px;
    background:white;
    display: flex;
    align-items: stretch;
    justify-content: center
}
.ipt{
    flex: 2
}
.ipt input{
    height: 30px;
    line-height:30px;
    font-size:14px 
}
.btn{
    flex:1;
    background: #30C8B1
}
.btn-b{
    height: 30px;
    line-height: 30px;
    background: #30C8B1;
    text-align: center;
    color: white;
    font-size: 14px
}
.subject{
    width: 95%;
    padding: 10px;
    display:flex;
    
    /* flex-grow:3; */
     flex-wrap: wrap;
     flex-direction: row;
    justify-content:space-between; 
      
}
.list{
 width:46%;
 margin:7px;
 background: #FFFFFF;
 position: relative;
}
img{
 width: 100%
}
.subText{
    margin-top:2px;
    font-size: 13px;
    color: gray
}
.subName{
    font-size: 13px;
    color: #30C8B1;
    margin-top:2px;
}
.subBtn{
    width: 80%;
    height: 25px;
    line-height: 25px;
    font-size: 13px;
    background: #30C8B1;
    border-radius: 0
}
.sbuImg{
    height:150px
}
.textright{
    margin-left: 5px
}
.bianh{
    color: white;
    width: 50px;
    height:25px;
    line-height: 25px;
    text-align: center;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top:0;
    left: 0;
}
.fenzu{
    width: 50%;
    height:30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background: #30C8B1;
    margin: 0 0 10px 10px;
    position: relative;
}
.spanImg{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top:5px;
}
.spanImg img{
    width: 100%;
    height: 20px;
}
</style>
<template>
    <div>
        <dingCen></dingCen>
            <div class="went">
            <p class="dangqian">当前第{{listDome.id}}题/共8题</p>
            <div class="xuanxia">
                <p class="biaot">{{listDome.id}}.{{listDome.name}}</p>
                <!-- 点选框 -->
                <div class="wnt" v-if="bol">
                    <radio-group @change="radioChange">
                        <radio v-for="(item,index) in listHome" :key="index" class="subn" :value="item.listName" :checked="item.isChecked">
                           {{item.listName}}
                        </radio>
                     </radio-group>
                </div>
                <!-- 多选框 -->
               <div class="wnt" v-if="hes">
                    <checkbox-group   @change="checkboxChange">
                        <label v-for="(item,index) in listHome" :key="index">
                        <checkbox :checked="item.isChecked" :value="item.listName" class="subn" >
                            {{item.listName}}
                        </checkbox>
                        </label>
                    </checkbox-group>
                </div>
                 <!-- 填空框 -->
            <div class="wnt" v-if="isw">
                <textarea placeholder="请提出您宝贵的意见"  rows="6" cols="10" v-model="opinion"></textarea>
            </div>
            </div>
           
            <!-- 下一题 -->
            <div>
                <button class="xiyibtn" type="primary" @click="getNext">下一题</button>
            </div>
        </div>
    </div>
</template>

<script>
import dingCen from "../../components/dingc"
import listData from "../../data/objs"
export default {
  components:{dingCen},
  data(){
    return {
        listDome:[],
        listHome:[],
        index:0,
        judge:"",
        opinion:"",
        isw:false,
        hes:false,
        bol:true,
        getLIst:[],
        loow:true
    }
  },
  created() {
     
  },
  mounted() {
       //页面渲染前，获取列表
        this.listDome=listData[this.index]
        this.listHome=listData[this.index].lists
        this.judge=this.listDome.type

        if(this.judge=="odd"){
            this.bol=true
            this.isw=false
            this.hes=false
            }else if(this.judge=="more"){
            this.hes=true
            this.isw=false
            this.bol=false
            }else{
            this.isw=true
            this.bol=false
            this.hes=false
        }
  },
  methods: {
    radioChange(e) {
    //把选中的isChecked改为true
      this.listHome.map((item)=>{
          item.isChecked=false
          if(item.listName==e.mp.detail.value){
            return item.isChecked=true
          }
      })
    },
    checkboxChange(e){
        //把选中的isChecked改为true
        let radioItems = this.listHome;
        for (let i = 0; i < radioItems.length; ++i) {
            if(e.mp.detail.value.includes(radioItems[i].listName)){
                radioItems[i].isChecked = true
            }else{
                radioItems[i].isChecked = false
            }
                
        }
    },
    getNext(){
        let ss=this.listHome.some(item=>item.isChecked==true)
    
        //把选中的数组push进getList
        for(var i=0;i<this.listHome.length;i++){
            if(this.listHome[i].isChecked==true){
                this.getLIst.push(this.listHome[i])
            }
        }
        //数组过滤
        var newArr=this.getLIst.filter(item => item.isChecked==true)
       
        
       if(this.judge=="odd"||this.judge=="more"){  
            if(ss){//判断数组是否为空
                this.index++
                this.Global.getlist.listData=newArr;  
            }else{    
                wx.showToast({
                    title: '请至少选择一个答案',
                    icon:"none",
                    duration: 2000
                    })
            }
       }else{
            if(this.opinion){
                this.index++
                this.Global.getlist.idea=this.opinion
            }else{
                wx.showToast({
                    title: '请留下你宝贵的意见',
                    icon:"none",
                    duration: 2000
                    })
            }
     }
     //单页面跳转自己
    if(this.index<=7 && this.index!=this.listDome.id-1){
        let This=this
        wx.navigateTo({
            url: '/pages/answer/main'
        })
    }
    //index大于8跳转提交
    if(this.index>7){
        wx.redirectTo({
            url: '/pages/submit/main'
        })
    }
  }
  
},
onShow:function(){
     if(this.judge=="odd"){
            this.bol=true
            this.isw=false
            this.hes=false
            }else if(this.judge=="more"){
            this.hes=true
            this.isw=false
            this.bol=false
            }else{
            this.isw=true
            this.bol=false
            this.hes=false
        }
   
},
onUnload:function(){
    let id= this.listDome.id-2
    if(id<0){
        id=0
    }
    this.index=id
    this.listDome=listData[id]
    this.listHome=listData[id].lists
    this.judge=this.listDome.type
    
}
}
</script>

<style>
textarea{
      width:100%;
      border-radius: 10px;
      color:#aaacb0;
      float:left;
      margin-top:20rpx;
      border: 1px solid #EEEEEE;
      margin-bottom:20px
      }
.went{
    width: 95%;
    padding: 10px;
}
.went .dangqian{
    margin-top:5px; 
    margin-left:10px; 
}
.went .biaot{
   font-size: 18px;
   margin-bottom:15px; 
}
.xuanxia{
    margin-top:20px
}
.subn{
    width: 100%;
    height:35px;
    line-height: 35px;
    border-bottom:1px solid #EEEEEE;
}
.xiyibtn{
    width: 50%;
    margin-top:30px; 
}
.wnt{
    border:1px solid #EEEEEE;
}
</style>
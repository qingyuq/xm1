<template>
    <div>
        <dingCen></dingCen>
        <div class="survey-text">
            <div class="textMain">
               
                您好! <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;感谢您对武汉宏鹏教育的支持与信任，我
                们秉承教育改变生活的理念,在我校全体教
                职员工的努力下，已经帮助数万学生，实现了
                自己的人生理想和学习目标。您的宝贵意见
                将指导我们在今后的工作中不断努力改进,
                请务必认真填写!
                                    
            </div>
            <div class="btnDiv">
                <button class="btn" type="primary" @click="getQuestionnaire()">开始调查问卷</button>
            </div>
        </div>
    </div>
</template>

<script>
import dingCen from "../../components/dingc"
export default {
  components:{
      dingCen
  },
  data(){
    return {
    }
  },
  methods: {
      getQuestionnaire(){
          wx.navigateTo({
              url: '/pages/answer/main'
          })
      }
  }
}
</script>

<style>

.survey-text{
    width: 92%;
    height:170px;
    padding:15px;
}
.textMain{
    width:92%;
    height:170px;
    padding:15px;
    border-radius: 10px;
    box-shadow: 0px 2px 10px #888888;
    color: grey;
    font-size:18px
}
.btn{
 width: 60%
}
.btnDiv{
 margin-top:20px; 
}
</style>
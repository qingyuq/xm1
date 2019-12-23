<template>
    <div class="Details">
        <div class="Detailslist">
           <div v-for="(item,index) in list" :key="index" class="sdiv" @click="sss(index)">
               <div class="detImg"><img :src="item.url" alt=""></div>
              <p>{{item.name}}</p>
           </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
        list:[
            {
                "id":"1",
                "name": "活动",
                "url": "http://a.hiphotos.baidu.com/zhidao/pic/item/4610b912c8fcc3ce934a8b059145d688d43f2079.jpg"
            },
            {
                "id":"2",
                "name": "问卷",
                "url": "http://img3.imgtn.bdimg.com/it/u=2313731185,3134916552&fm=26&gp=0.jpg"
            },
            {
                "id":"3",
                "name": "夏令营",
                "url": "http://img1.imgtn.bdimg.com/it/u=335375389,1093935546&fm=26&gp=0.jpg"
            },
            {
                "id":"4",
                "name": "课程",
                "url": "http://img3.imgtn.bdimg.com/it/u=500920554,2186555769&fm=26&gp=0.jpg"
            }
            ]
    }
  },
  methods: {
       sss(id){
           if(id==0){
               wx.navigateTo({
                   url: '/pages/Activity/main'
               })
           }else if(id==1){
               wx.navigateTo({
                   url: '/pages/survey/main'
               })
           }
       }
  },
}
</script>

<style>
.Details{
    width: 95%;
    padding: 10px
}
.Detailslist{
    width: 100%;
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap
}
.Detailslist .sdiv{
    width: 49%;
    height: 200px;
    border: 1px solid #C9ECF2;
    background: white;
    margin-top: 10px;
    text-align: center; 
}
.sdiv p{
    height: 30px;
    line-height: 30px;
    font-size: 15px
}
.detImg{
    margin-top: 10px;
    text-align: center;
    width: 100%;
    height: 160px
}
.detImg img{
    width: 90%;
    height: 160px
}
</style>
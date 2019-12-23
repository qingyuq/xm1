<template>
    <div class="listgonx">
        <!-- 贡献 -->
        <div class="contribution">
            票数贡献榜
        </div>
        <!-- 投票内容 -->
        <div class="Crunchies">
        <Voting></Voting>
        </div>
        <!-- 投票记录 -->
        <listRecord></listRecord>
    </div>
</template>

<script>
import Voting from './Voting'
import listRecord from "./listRecord"
export default {
  components:{
      Voting,listRecord
  },
  data(){
    return {
    }
  }
}
</script>

<style>
.listgonx{
    margin-top:10px 
}
/* 贡献 */
.contribution{
    width: 100%;
    height:35px;
    background:#9DF848;
    text-align: center;
    line-height:35px;
    font-size: 14px;
    color: grey
}
/* 榜单 */
.Crunchies{
    width: 100%;
    height: 230px;
}
</style>
<template>
<div>
  <myIntroduce></myIntroduce>
  <myCenter></myCenter>
  <About></About>
</div>
</template>

<script>
import myIntroduce from "./introduce/index"
import myCenter from "./shuom-center/index"
import About from "./About/index"
export default {
  components:{
    myIntroduce,myCenter,About
  },
  data(){
    return {
      
    }
  },
}
</script>

<style>

</style>
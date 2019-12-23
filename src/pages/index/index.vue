<template>
<div class="Index">
  <Slideshow></Slideshow>
  <Particulars></Particulars>
</div>
</template>

<script>
import Slideshow from "./components/slideshow"
import Particulars from "./components/particulars"

export default {
  components:{
      Slideshow,Particulars
  },
  data(){
    return {

    }
  }
}
</script>

<style>
.Index{
    background: #EEEEEE
}
</style>
<template>
  <div class="paih">
    <PanTop></PanTop>
    <Part></Part>
  </div>
</template>

<script>
import PanTop from "./panTop/index"
import Part from './part/index';
export default {
  components:{
    PanTop,Part
    },
  data(){
    return {
    }
  }
}
</script>

<style>
.paih{
  background: #EDEDED
}
</style>
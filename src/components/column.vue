<template>
  <div class="row">
    <row v-bind="$attrs" v-for="item in row" :key="item" :x="item" />
  </div>  
</template>

<script>
import row from './item'

export default {
  components:{
    row
  },
  props:{
   
  },
  data() {
    return {
      row:[0,1,2,3,4,5,6,7,8,9,10]
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>
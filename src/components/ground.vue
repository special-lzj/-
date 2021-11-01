<template>
  <div>
    <column v-bind="$attrs" v-for="item in column" :key="item" :y="item" /> 
  </div>
</template>

<script>
import column from './column'

export default {
  components:{
    column
  },
  data() {
    return {
      column:[0,1,2,3,4,5,6,7,8,9],
    }
  }
}
</script>

<style lang="less" scoped>

</style>
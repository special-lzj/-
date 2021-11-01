<template>
  <div class="item" :style="isLimit">
    <div class="point" :style="bgStyle" @click="press" @mouseenter="onHover" @mouseleave="onLeave"></div>
    <!-- <span class="cross" v-if="this.x!==9&&this.y!==9">{{x}} {{y}}</span> -->
  </div>  
</template>

<script>

export default {
  props:{
     y: {
      type:Number,
      default:0
    },
    x:{
      type:Number,
      default:0
    },
    user:{
      type:String
    },
    store: {
      type:Object
    }
  },
  data() {
    return {
      current: null, // black黑 white白 null
      isHover: false
    }
  },
  methods: {
    press() {
      // window.console.log(this.x,this.y,this.user)
      if(!this.current) { //当前未落子
        this.current = this.user
        if(this.user==='black') {
          this.store.pushBlack([this.x,this.y])
          this.$parent.$parent.$parent.user= 'white'
        } else {
          this.store.pushWhite([this.x,this.y])
          this.$parent.$parent.$parent.user= 'black'
        }
      }
    },
    onHover() {
      if(!this.current) {
        this.isHover=true
      }
    },
    onLeave() {
      if(!this.current) {
        this.isHover=false
      }
    }
  },
  computed:{
    isLimit() {
      if(this.x!==10&&this.y!==10) {
        return {}
      }
      return {
        border:'none'
      }
    },
    bgStyle() {
      if(this.current) {
        return {
          backgroundImage:this.current === 'black'? 
            `url(${require('../assets/black-default.png')})`:
            `url(${require('../assets/white-default.png')})`
        }
      }
      if(this.isHover) {
        return {
          backgroundImage:this.user === 'black'? 
          `url(${require('../assets/black-active.png')})`:
          `url(${require('../assets/white-active.png')})`
        }
      }
      return {}
    }
  }
}
</script>

<style scoped>
.item {
  width: 60px;
  height: 60px;
  line-height: 80px;
  border: 1px solid #fff;
  box-sizing: border-box;
  text-align: center;
  position: relative;
}
.point {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  /* background-color: red; */
  /* background: url('../assets/black-active.png') no-repeat; */
  background-size: 40px 40px;
  transform: translate(-20px,-20px);
}
</style>
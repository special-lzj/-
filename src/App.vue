<template>
  <div id="app">
    <div>轮到{{user}}方执旗</div>
    <Ground :user="user" :store="groundInfo" />
  </div>
</template>

<script>
import Ground from './components/ground'
import Store from './store'

export default {
  name: 'App',
  components:{
    Ground
  },
  data() {
    return {
      user: 'black',
      groundInfo: undefined
    }
  },
  mounted() {
    this.groundInfo = new Store(this.afterWin)
  },
  methods: {
    afterWin(user) {
      window.alert(`${user}赢了`)
    }
  }
}
</script>

<style>
body {
  background-color: #aaa;
}
</style>

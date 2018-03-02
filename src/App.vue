<template lang="pug">
  router-view
</template>

<script>
import VueRouter from 'vue-router'
import Sidebar from './components/p5/Sidebar.vue'
import Sketch from './components/p5/Sketch.vue'
import Vue from 'vue'
Vue.use(VueRouter)

export default {
  data() {
    return {
      activeProject: ''
    }
  },
  components: {
    Sidebar,
    Sketch
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  font-family: 'Avenir Next', 'Avenir', Helvetica, 'Helvetica Neue', Futura,
    Arial;
  text-align: center;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 100%;
}
</style>

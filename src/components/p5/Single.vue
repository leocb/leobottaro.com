<template lang="pug">
  .content
    .single-view
      Sidebar(v-bind:split='false')
      router-view(v-bind:project='$route.params.project')
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import Sidebar from './Sidebar.vue'
import Sketch from './Sketch.vue'

Vue.use(VueRouter)

export default {
  components: {
    Sidebar,
    Sketch
  }
}
</script>

<style lang="scss">
.single-view {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

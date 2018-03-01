<template lang="pug">
  iframe(v-bind:srcdoc='projectHtmlSource' width='100%' scrolling='no' id='single-sketch')
  //- doctype html
  //- div#single-sketch(v-html="projectHtmlSource")
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {
  data() {
    return {
      projectHtmlSource: ''
    }
  },
  props: ['project'],
  watch: {
    project: function() {
      loadSketch(this.project).then(source => (this.projectHtmlSource = source))
      document.getElementById('single-sketch').focus()
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      document.getElementById('single-sketch').focus()
    })

    loadSketch(this.project).then(source => (this.projectHtmlSource = source))
  }
}

function loadSketch(projectName) {
  return new Promise(function(resolve, reject) {
    let source = ''
    fetch(
      'https://rawgit.com/leocb/p5-Playground/master/' +
        projectName +
        '/index.html'
    )
      .then(r => r.text())
      .then(data => {
        // Solve Sketch js
        source = data.replace(
          'sketch.js',
          'https://rawgit.com/leocb/p5-Playground/master/' +
            projectName +
            '/sketch.js'
        ) // Solve sketch images (if any)
        source = source.replace(
          /images\/?/gi,
          'https://rawgit.com/leocb/p5-Playground/master/' +
            projectName +
            '/images/'
        ) // Solve p5 libraries
        source = source.replace(
          /\.\.\/libraries\//gi,
          'https://rawgit.com/leocb/p5-Playground/master/libraries/'
        )
        console.log('new source has been loaded')
        resolve(source)
      })
      .catch(e => reject(e))
  })
}
</script>

<style lang="scss">
iframe {
  border: none;
  height: 100%;
  margin-left: 0px;
  overflow-y: auto;
}
</style>

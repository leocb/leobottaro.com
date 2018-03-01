import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/p5/Welcome.vue'
import Sketch from '@/components/p5/Sketch.vue'
import Single from '@/components/p5/Single.vue'
import Split from '@/components/p5/Split.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: 'p5' },
    { path: '/p5/split-view/:twoProjects', component: Split },
    {
      path: '/p5',
      component: Single,
      children: [
        { path: '', component: Welcome },
        { path: ':project', component: Sketch }
      ]
    }
  ]
})

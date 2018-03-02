<template lang="pug">
  .sidebar(v-bind:class='{"sidebar--active": sidebarActive}')
    button.toggle(v-bind:class='{"toggle--active": sidebarActive}' v-on:click='toggle')
      img(src='../../assets/star.png')
    h2
      router-link(to='/') {{collectionName}}
    ul
      li(v-for='(project, index) in projects')
        router-link.project-link(v-if='split' v-on:click.native='toggle' v-bind:to='fullLinkTo(side, project)' v-bind:class='{"project-link--active": activeProject == project}') {{project}}
        router-link.project-link(v-else v-on:click.native='toggle' v-bind:to='"/p5/" + project' v-bind:class='{"project-link--active": activeProject == project}') {{project}}
        a.staticBtn(v-if='!split' v-bind:href='staticLinkTo(project)' v-bind:class='{active: project === activeProject}' target='_blank' )  ↗
    .about
      p
        router-link.link-split(v-if='!split' v-bind:to='"/p5/split-view/+"') Split View Mode
        router-link.link-split(v-else to='/p5') Single View Mode
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {
  data() {
    return {
      projects: [],
      collectionName: '',
      sidebarActive: false
    }
  },
  props: ['side', 'split'],
  computed: {
    activeProject() {
      if (!this.split) {
        return this.$route.params.project
      } else if (this.split) {
        if (this.side === 'left') {
          return this.$route.params.twoProjects.toString().split('+')[0]
        } else {
          return this.$route.params.twoProjects.toString().split('+')[1]
        }
      }
      return ''
    }
  },
  methods: {
    toggle() {
      if (this.sidebarActive) {
        this.sidebarActive = false
      } else {
        this.sidebarActive = true
      }
    },
    staticLinkTo(project) {
      return document.location.origin + '/p5/' + project
    },
    fullLinkTo(side, project) {
      var projects = this.$route.params.twoProjects.toString().split('+')

      if (side === 'left') {
        return '/p5/split-view/' + project + '+' + projects[1]
      } else {
        return '/p5/split-view/' + projects[0] + '+' + project
      }
    }
  },
  mounted: function() {
    fetch('https://rawgit.com/leocb/p5-Playground/master/.p5rc')
      .then(r => r.json())
      .then(data => {
        this.projects = data.projects
        this.collectionName = data.name
      })
      .catch(e => console.error(e))
  }
}
</script>

<style lang="scss">
a {
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;
  &:hover,
  &:active {
    color: rgba(0, 0, 0, 0.45);
  }
  &:active {
    color: #0d47a1;
  }
}
.sidebar {
  position: absolute;
  z-index: 10;
  top: 0;
  background-color: #eeeeee;
  width: 220px;
  height: 100%;
  text-align: left;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  h2 {
    margin-top: 10px;
    padding-left: 30px;
    color: rgba(0, 0, 0, 0.8);
  }
  ul {
    list-style: none;
    padding-left: 30px;
  }
  .project-link--active {
    color: #0d47a1;
  }
  .staticBtn {
    color: rgba(0, 0, 0, 0.35);
    font-size: 15px;
    &.active {
      color: #5472d3;
    }
  }
}
.toggle {
  position: absolute;
  top: 10px;
  background-color: transparent;
  border: none;
  transition: all 1s;
  -webkit-transition: all 1s;
  z-index: 11;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  img {
    width: 24px;
  }
  &.toggle--left {
    left: 180px;
  }
  &.toggle--right {
    right: 180px;
  }
  &.toggle--active {
    -ms-transform: rotate(144deg); /* IE 9 */
    -webkit-transform: rotate(144deg); /* Chrome, Safari, Opera */
    transform: rotate(144deg);
  }
}
.about {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 14px;
  padding-left: 30px;
  p {
    margin-top: 0;
    color: rgba(0, 0, 0, 0.45);
  }
  .twitter {
    color: #0d47a1;
  }
}
.link-split {
  display: block;
  color: #0d47a1;
}
.split-view--left .sidebar {
  left: -175px;
  text-align: left;
}
.split-view--right .sidebar {
  right: -175px;
  text-align: right;
}
.split-view--left .sidebar.sidebar--active {
  left: 0;
}
.split-view--right .sidebar.sidebar--active {
  right: 0;
}
.split-view--left .sidebar h2 {
  margin-top: 10px;
  padding-left: 30px;
}
.split-view--right .sidebar h2 {
  margin-top: 10px;
  padding-right: 30px;
}
.sidebar h2 a {
  color: rgba(0, 0, 0, 0.8);
}
.split-view--left .sidebar ul {
  list-style: none;
  padding-left: 30px;
}
.split-view--right .sidebar ul {
  list-style: none;
  padding-right: 30px;
}
.split-view.split-view--left .toggle {
  left: 180px;
}
.split-view.split-view--right .toggle {
  right: 180px;
}
.split-view.split-view--right .about {
  display: none;
}
.single-view {
  .sidebar {
    left: -175px;
    text-align: left;
    &.sidebar--active {
      left: 0;
    }
    h2 {
      margin-top: 10px;
      padding-left: 30px;
    }
    ul {
      list-style: none;
      padding-left: 30px;
    }
    .toggle {
      left: 180px;
    }
  }
}
</style>

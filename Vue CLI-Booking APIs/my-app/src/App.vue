<template>
  <div id="app">
    <nav-menu params="route: route"></nav-menu>
    <router-view></router-view>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import NavMenu from './components/nav-menu'
export default {
  name: 'App',
  components: {
    'nav-menu': NavMenu,
  },
}
</script>



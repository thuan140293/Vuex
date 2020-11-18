<template>
  <div id="app">
    <nav-bar params="route: route"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/nav-bar'
export default {
  name: 'App',
  components: {
    'nav-bar': NavBar,
  },
}
</script>

<style>

</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link class="navbar-brand" to="/">
      <img class="logo" :src="vuex"/>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto align-items-center justify-content-between">
        <li class="nav-item" v-for="(route, index) in commonRoute" :key="index">
          <router-link :to ="route.path" exact-active-class="active">
            <a class="nav-link">
              {{route.display.toUpperCase()}}
            </a>
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto align-items-center justify-content-between">
        <li class="nav-item" v-for="(route, index) in commonRouteRight" :key="index">
          <router-link :to ="route.path" exact-active-class="active">
            <a class="nav-link">
              {{route.display.toUpperCase()}}
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { routes } from '../router/routes'
  import vuex from '@/assets/images/vuex.png';

  export default {
    components: {},
    directives: {},
    data() {
      return {
        vuex,
        routes,
        commonRoute: [
          {
            name: 'Home', path: '/', display: 'Home',
          }
        ],
        commonRouteRight: [
          {
            name: 'Login', path: '/login', display: 'Login',
          }
        ]
      }
    },
    computed: {},
    created() {},
  }
</script>

<style scoped>
  .navbar{
    background: #333;
  }
  .navbar-light .navbar-nav .nav-link,
  .navbar-light .navbar-nav .nav-link:hover{
    color: #fff;
  }
  .nav-item a.active.router-link-active .nav-link{
    color: #009900
  }
  .navbar-brand{
    font-size: inherit;
    padding: 0;
  }
  .logo{
    width: 30px;
    height: 30px;
  }
</style>

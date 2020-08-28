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
    </div>
  </nav>
</template>

<script>
  import vuex from '@/assets/images/vuex.png';

  export default {
    components: {},
    directives: {},
    data() {
      return {
        vuex,
        commonRoute: [
          {
            name: 'homePage', path: '/', display: 'Home',
          },
          {
            name: 'blogPage', path: '/blogs', display: 'Blogs',
          }
        ]
      }
    },
    computed: {
      
    },
    created() {},
    methods:{
      redirectTo: function (path) {
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.go(-1)
        }
      },
    }
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

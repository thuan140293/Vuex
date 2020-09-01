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
            <a class="nav-link" v-if="!state.token">
              {{route.display.toUpperCase()}}
            </a>
            <div class="d-flex" v-else>
              <a class="nav-link mr-3">{{state.token}}</a>
              <a href="javascript:;" class="nav-link" @click="signOut(), redirectTo('/login')">ĐĂNG XUẤT</a>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import vuex from '@/assets/images/vuex.png';
  import { mapState } from "vuex";

  export default {
    components: {},
    directives: {},
    data() {
      return {
        vuex,
        commonRoute: [
          {
            name: 'homePage', path: '/', display: 'Trang chủ',
          }
        ],
        commonRouteRight: [
          {
            name: 'Login', path: '/login', display: 'Đăng nhập',
          }
        ]
      }
    },
    computed: {
      ...mapState({
        state: state => state.$_loginPage,
      }),
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
      signOut: async function () {
        var _this = this
        _this.$store.dispatch("$_loginPage/SignOut");
      }
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

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Logo</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto align-items-center justify-content-between">
        <li class="nav-item" v-for="(route, index) in routes" :key="index">
          <router-link :to ="route.path" exact-active-class="active">
            <a class="nav-link">
              {{route.display}}
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    components: {},
    directives: {},
    data() {
      return {
        routes: [
          {
            name: 'homePage', path: '/', display: 'Trang chủ',
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

<style scoped></style>

<template>
  <div>
    <div class="form-container">
      <h1 class="text-center">Cá nhân</h1>
      <div class="d-flex align-item-center">
        <img :src="data.avatar"/>
        <div class="d-flex flex-column justify-content-center ml-3">
          <h2>{{ data.last_name }} {{ data.first_name }}</h2>
          <div>{{ data.email }}</div>
        </div>
      </div>
      <button class="btn btn-success mt-3" @click="redirectTo('/')">Trở về</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    components: {
    },
    data() {
      return {}
    },
    computed: {
       ...mapGetters({
        data: "$_detailPage/getById",
      })
    },
    async created() {
      var _this = this;
      _this.$Progress.start()
      try {
        if (_this.$route.params.id) {
          await _this.$store.dispatch("$_detailPage/getById", _this.$route.params.id);
        }
        _this.$Progress.finish()
      } catch(error) {
        console.log(error); 
        _this.$Progress.fail()
      }
    },
    methods:{
      redirectTo: function (path) {
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.go(-1)
        }
      },
    }
  };
</script>


<style scoped>
  
</style>
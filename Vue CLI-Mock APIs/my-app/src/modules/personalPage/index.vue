<template>
  <div>
    <div class="form-container">
      <h1 class="text-center">Trang cá nhân</h1>
      <p>{{data.id}}</p>
      <p>{{data.name}}</p>
      <p>{{data.address}}</p>
      <p>{{data.country}}</p>
      <p>{{data.phone}}</p>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    components: {
      
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        stateRequest: state => state.$_personalPage,
      }),
      ...mapGetters({
        data: "$_personalPage/getById",
      })
    },
    async created() {
      var _this = this;
      _this.$Progress.start()
      try {
        if (_this.$route.params.id) {
          await _this.$store.dispatch("$_personalPage/getById", _this.$route.params.id);
        }
        _this.$Progress.finish()
      } catch(error) {
        console.log(error); 
        _this.$Progress.fail()
      }
    },
    methods:{
      
    }
  };
</script>


<style scoped>
  .table td:first-child{
    width: 20px;
  }
  table .avatar{
    width: 30px;
    border-radius: 50%;
  }
  table .icon{
    cursor: pointer;
  }
  .form-container{
    /* width: 400px; */
    margin: auto;
  }
</style>
<template>
  <div>
    <div class="form-detail">
      <h2>{{ data.name }} profile</h2>
      <div>
        <span class="title mr-2">Name:</span>
        <span>{{ data.name }}</span>
      </div>
      <div>
        <span class="title mr-2">Address:</span>
        <span>{{ data.address }}</span>
      </div>
      <div>
        <span class="title mr-2">Phone:</span>
        <span>{{ data.phone }}</span>
      </div>
      <div>
        <span class="title mr-2">Country:</span>
        <span>{{ data.country }}</span>
      </div>
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
    methods:{}
  };
</script>


<style scoped>
  .form-detail{
    padding: 20px;
    width: 100%;
    border: 2px dashed lightgrey;
    margin: auto;
    max-width: 500px;
  }

  .form-detail .title{
    font-weight: 600;
  }
</style>
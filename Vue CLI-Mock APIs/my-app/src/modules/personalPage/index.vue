<template>
  <div>
    <div class="form-container">
      <h1 class="text-center">{{ data.name }}</h1>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="email" class="form-control" id="name" aria-describedby="name" placeholder="Enter name" v-model="formData.name">
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input type="email" class="form-control" id="address" aria-describedby="address" placeholder="Enter address" v-model="formData.address">
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="phone" class="form-control" id="phone" aria-describedby="phone" placeholder="Enter phone" v-model="formData.phone">
        </div>
        <div class="form-group">
          <label for="phone">Country</label>
          <input type="phone" class="form-control" id="country" aria-describedby="country" placeholder="Enter country" v-model="formData.country">
        </div>
      </form>
      <router-link :to="`/`">
        <button type="button" class="btn btn-secondary mr-3">Back</button>
      </router-link>
      <button type="button" class="btn btn-primary" @click="createData">Save changes</button>
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
        formData: {
            name: '',
            address: '',
            phone: '',
            country: ''
        }
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
       async createData() {
        var _this = this;
        try {
          await _this.$store.dispatch("$_personalPage/createData", _this.formData);
          _this.$notify({
            title: 'Congratulations',
            message: 'Successful',
            type: 'success'
          });
           _this.$router.push("/");
        } catch (error) {
          _this.$notify.error({
            title: 'Error',
            message: 'Fail'
          });            
        }
      },
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
    width: 400px;
    margin: auto;
  }
</style>
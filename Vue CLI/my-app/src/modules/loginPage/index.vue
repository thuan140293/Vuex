<template>
  <div>
    <div class="form-container">
      <h1>Form đăng nhập</h1>
      <form>
        <div class="form-group">
          <label for="name">Tên đăng nhập</label>
          <input type="text" class="form-control" id="name" aria-describedby="name" v-model="formData.Username">
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input type="password" class="form-control" id="password" v-model="formData.Password">
        </div>
        <button type="submit" class="btn btn-primary" @click="login()">Đăng nhập</button>
      </form>
      <div id="status"></div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    data() {
      return {
        formData: {
          UserName: '',
          Password: '',
        },
      }
    },
    computed: {
      
    },
    methods:{
     
    }
  };
</script>


<style scoped>
  .form-container{
    width: 400px;
    margin: auto;
  }
</style>
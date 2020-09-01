<template>
  <div>
    <div class="form-container">
      <h1>Form đăng nhập</h1>
      <form>
        <div class="form-group">
          <label for="name">Tên đăng nhập</label>
          <input type="text" class="form-control" id="name" aria-describedby="name" v-model="formData.email">
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input type="password" class="form-control" id="password" v-model="formData.password">
        </div>
        <button type="submit" class="btn btn-primary" @click="login()">Đăng nhập</button>
      </form>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    components: {
      
    },
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
      }
    },
    computed: {
      
    },
    methods:{
      login: _.debounce(async function () {
        var _this = this;
            try {
              await _this.$store.dispatch("$_loginPage/LogIn", _this.formData);
              _this.$notify({
                title: 'Chúc mừng',
                message: 'Đăng nhập thành công',
                type: 'success'
              });
              _this.$router.push("/");
            }
            catch (error) {
              _this.$notify.error({
                title: 'Thất bại',
                message: 'Đăng nhập thất bại'
              });
            }
      }, 500),
    }
  };
</script>


<style scoped>
  .form-container{
    width: 400px;
    margin: auto;
  }
</style>
<template>
  <div>
    <div class="form-container">
      <h1>Form đăng nhập</h1>
      <form>
        <div class="form-group">
          <label for="name">Tên đăng nhập</label>
          <input type="text" class="form-control" id="name" aria-describedby="name">
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input type="password" class="form-control" id="password">
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    data() {
      return {
       
      }
    },
    computed: {
      
    },
  };
</script>


<style scoped>
  .form-container{
    width: 400px;
    margin: auto;
  }
</style>
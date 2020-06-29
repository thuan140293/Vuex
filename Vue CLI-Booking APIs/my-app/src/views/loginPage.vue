<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <LoginPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LoginPage from '../modules/loginPage';
  export default {
    name: 'loginPage',
    components: {
      LoginPage
    },
  };
</script>

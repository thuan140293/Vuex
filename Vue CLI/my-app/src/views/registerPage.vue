<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <RegisterPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import RegisterPage from '../modules/registerPage';
  export default {
    name: 'registerPage',
    components: {
      RegisterPage
    },
  };
</script>

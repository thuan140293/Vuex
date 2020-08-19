<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <FormPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FormPage from '../modules/formPage';
  export default {
    name: 'formPage',
    components: {
      FormPage
    },
  };
</script>

<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <FormBlogs />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FormBlogs from '../modules/formBlogs';
  export default {
    name: 'formBlogs',
    components: {
      FormBlogs
    },
  };
</script>

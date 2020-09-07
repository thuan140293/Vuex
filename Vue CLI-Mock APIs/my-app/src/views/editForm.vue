<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <EditForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EditForm from '../modules/editForm';
  export default {
    name: 'editForm',
    components: {
      EditForm
    },
  };
</script>

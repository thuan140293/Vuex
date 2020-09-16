<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <ExamplePage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ExamplePage from '../modules/examplePage';
  export default {
    name: 'examplePage',
    components: {
      ExamplePage
    },
  };
</script>
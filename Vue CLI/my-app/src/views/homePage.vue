<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <HomePage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  
  import HomePage from '../modules/homePage';
  export default {
    name: 'homePage',
    components: {
      HomePage,
    },
    
  };
</script>

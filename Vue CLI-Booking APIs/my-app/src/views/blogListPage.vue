<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <BlogListPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  
  import BlogListPage from '../modules/blogListPage';
  export default {
    name: 'blogListPage',
    components: {
      BlogListPage,
    },
    
  };
</script>

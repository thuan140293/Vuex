<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <BlogPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BlogPage from '../modules/blogPage';
  export default {
    name: 'blogPage',
    components: {
      BlogPage
    },
  };
</script>

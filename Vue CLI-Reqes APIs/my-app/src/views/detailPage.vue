<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <DetailPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import DetailPage from '../modules/detailPage';
  export default {
    name: 'detailPage',
    components: {
      DetailPage
    },
  };
</script>

<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <EventListPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  
  import EventListPage from '../modules/eventListPage';
  export default {
    name: 'eventListPage',
    components: {
      EventListPage,
    },
    
  };
</script>

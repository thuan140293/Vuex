<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <EventAdminPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import EventAdminPage from '../modules/eventAdminPage';
  export default {
    name: 'eventAdminPage',
    components: {
      EventAdminPage
    },
  };
</script>

<template>
  <div>
    <div class="container margin-y">
      <div class="row">
        <div class="col-12">
          <PersonalPage />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PersonalPage from '../modules/personalPage';
  export default {
    name: 'personal',
    components: {
      PersonalPage
    },
  };
</script>

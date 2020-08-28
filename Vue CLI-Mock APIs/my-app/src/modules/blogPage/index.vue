<template>
  <div>
    <div>Blog</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    components: {},
    data() {
      return {
       
      }
    },
    computed: {
      ...mapState({
        stateRequest: state => state.$_blogPage,
      }),
      ...mapGetters({
        // dataDetail: "$_blogPage/getById",
      })
    },
    created() {
      
    },
    methods:{
       
    }
  };
</script>


<style scoped>
  
</style>
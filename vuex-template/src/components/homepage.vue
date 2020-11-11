<script>
import {mapState} from 'vuex'
import Posts from './posts'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  components: {
    Posts
  },
  computed: mapState(['posts'])
}
</script>

<template>
  <div class="container">
    <posts></posts>
  </div>
</template>

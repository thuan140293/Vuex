<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      name: ''
    }
  },
  computed: {...mapState(['selectedPost'])},
  methods: {
    ...mapActions(['fetchPost']),
    goUser (userid) {
      this.$router.push('/profile/' + userid)
    }
  },
  created () {
    this.fetchPost(this.$route.params.id)
  }
}
</script>

<template>
  <div class="container">
    <div class="main">
      <h1>{{ selectedPost.title}}</h1>
      <div class="value">{{ selectedPost.body}}</div>
      <p @click='goUser(selectedPost.user.id)'>
        <span>| written by,&nbsp;</span>
        <span class="value">{{selectedPost.user.name}}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/stylesheet/base';
@import '../assets/stylesheet/typography';

h1 {
  padding-bottom: 1rem;
}
.value {
  padding-bottom: 2rem;
}
</style>

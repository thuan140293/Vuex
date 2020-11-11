<script>
import {mapState, mapActions} from 'vuex'

export default {
  props: ['post'],
  computed: mapState(['posts']),
  methods: {
    ...mapActions(['deletePost'])
  }
}
</script>

<template>
  <portal to='removePost'>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          Remove
          <button type="button" class="btn-close" @click="$emit('close')">x</button>  
        </header>
        <div class="modal-body">
          <div>{{ post.title }}</div>
          <span>will be deleted.</span>
          <p>This action cannot be undone</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-delete" @click='deletePost(post.id)'>Delete</button>
        </div>
      </div>
    </div>
  </portal>
</template>

<style scoped>
@import '../assets/stylesheet/modal';

.modal {
  height: 270px;
}
span {
  font-weight: 500;
  font-style: italic;
}
p {
  padding-top: 10px;
  color: var(--light);
  font-weight: 500;
}
</style>

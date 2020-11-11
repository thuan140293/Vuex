<script>
import {mapState, mapActions} from 'vuex'

export default {
  props: ['post'],
  computed: mapState(['posts']),
  methods: {
    ...mapActions(['updatePost'])
  }
}
</script>

<template>
  <portal to='editPost'>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          Edit
          <button type="button" class="btn-close" @click="$emit('close')">x</button>  
        </header>
        <div class="modal-body">
          <input type="hidden">
          <div class="label">Title</div>
          <input type="text" placeholder="title" v-model='post.title' class="form-control">
          <div class="label">Body</div>
          <textarea type="text" placeholder="body" v-model='post.body' class="form-control"></textarea>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-delete" @click='updatePost(post.id)'>Update</button>
        </div>
      </div>
    </div>
  </portal>
</template>

<style scoped>
@import '../assets/stylesheet/modal';

.modal {
  height: 400px;
}
.modal-body {
  display: grid;
  grid-gap: 0.5rem;
}
.label {
  color: var(--purple);
  font-weight: 500;
}
.form-control {
  font-size: 14px;
}
textarea.form-control {
  height: 120px;
}
</style>

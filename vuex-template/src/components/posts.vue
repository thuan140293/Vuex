<script>
import {mapState, mapActions} from 'vuex'
import Modal from './modal'
import Alert from './alert'

export default {
  data () {
    return {
      post: {}
    }
  },
  components: {
    Modal,
    Alert
  },
  computed: {...mapState(['posts', 'selectedPost'])
  },
  methods: {
    ...mapActions(['fetchPosts', 'setModalType', 'setSelectedPost']),
    closeModal () {
      this.setModalType('')
    },
    edit (post) {
      this.setSelectedPost(post)
      this.setModalType('editPost')
    },
    remove (post) {
      this.setSelectedPost(post)
      this.setModalType('removePost')
    }
  },
  created () {
    this.fetchPosts()
  }
}
</script>

<template>
  <div class="main">
    <h1>Posts</h1>
    <div class="titles">
      <div class="titles">
        Subject
      </div>
      <div class="titles">
        Edit
      </div>
      <div class="titles">
        Delete
      </div>
    </div>
    <div class="post" v-for='post in posts.slice(0, 6)' :key='post.id'>
      <a :href='`/post/${post.id}`'>{{post.title}}</a>
      <div class="actions">
        <div class="icon edit-icon" @click='edit(post)'></div>
        <div class="icon delete-icon" @click='remove(post)'></div>
      </div>
    </div>
    <alert :post='selectedPost' @close='closeModal'></alert>
    <modal :post='selectedPost' @close='closeModal'></modal>
  </div>
</template>

<style scoped>
@import '../assets/stylesheet/base';
@import '../assets/stylesheet/typography';

.titles {
  display: grid;
  grid-template-columns: 1fr 60px 60px;
  margin: 21px 0;
}
.post {
  display: grid;
  grid-template-columns: 1fr 120px;
}
.actions {
  display: grid;
  grid-template-columns: repeat(2, 60px);
}
.edit-icon {
  background-image: url("../assets/edit.png");
}
.edit-icon:hover {
  background-image: url("../assets/edit-hover.png");
}
.delete-icon {
  background-image: url("../assets/delete.png");
}
.delete-icon:hover {
  background-image: url("../assets/delete-hover.png");
}
.icon {
  width: 19px;
  height: 19px;
  background-size: cover;
  cursor: pointer;
}
@media (max-width: 768px) {
  .icon {
    width: 16px;
    height: 16px;
  }
}
@media (max-width: 500px) {
  .main {
    margin: 1rem 1rem 0;
  }
}
</style>

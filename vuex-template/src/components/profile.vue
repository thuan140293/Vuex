<script>
import {mapState, mapActions} from 'vuex'
import Maps from './maps'

export default {
  components: {
    Maps
  },
  computed: {...mapState(['profile'])},
  methods: {...mapActions(['fetchProfile'])
  },
  created () {
    this.fetchProfile(this.$route.params.id)
  }
}
</script>

<template>
  <div class="container">
    <div class="main">
      <div class="profile-detail">
        <h1>{{profile.name}}</h1>
        <h2>{{profile.address.city}}</h2>
      </div>
      <div class="field-detail">
        <div class="fields">
          <div class="label">Username</div>
          <div class="value">{{profile.username}}</div>
          <div class="label">Email</div>
          <div class="value">{{profile.email}}</div>
          <div class="label">Phone</div>
          <div class="value">{{profile.phone}}</div>
          <div class="label">Website</div>
          <div class="value">{{profile.website}}</div>
          <div class="label">Company</div>
          <div class="value">{{profile.company.name}}</div>
        </div>
        <maps></maps>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/stylesheet/base';
@import '../assets/stylesheet/typography';

.profile-detail {
  display: grid;
  grid-template-rows: repeat(2, auto);
  padding-bottom: 1rem;
}
.field-detail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
}
.fields {
  display: grid;
  grid-template-columns: 150px 1fr;
}
@media (max-width: 768px) {
  .fields {
    padding-bottom: 1rem;
  }
}
</style>

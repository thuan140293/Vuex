<template>
  <div>
    <div class="form-container">
      <form>
        <div class="form-group">
          <label for="name">Title blog</label>
          <input
            type="email"
            class="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
            v-model="formData.title"
          />
        </div>
        <div class="form-group">
          <label for="address">Content blog</label>
          <vue-editor v-model="formData.content"></vue-editor>
        </div>
      </form>
      <router-link :to="`/`">
        <button type="button" class="btn btn-secondary mr-3">Back</button>
      </router-link>
      <div class="d-inline-block">
        <button type="button" class="btn btn-primary" @click="createBlog">Create blog</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import _ from "lodash";
import commonData from "../../utils/common-data/index";
import { VueEditor } from "vue2-editor";

export default {
  components: {VueEditor},
  data() {
    return {
      commonData,
      formData: {
        title: "",
        content: null
      },
    };
  },
  computed: {
    ...mapState({
      stateRequest: (state) => state.$_formBlogs,
    }),
    ...mapGetters({
      data: "$_formBlogs/getById",
    }),
  },
  async created() {
     var _this = this;
    _this.$Progress.start();
    try {
      if (_this.$route.params.id) {
        await _this.$store.dispatch("$_formBlogs/getById", _this.$route.params.id);
        _this.formData = _.cloneDeep(_this.data);
      }
      _this.$Progress.finish();
    } catch (error) {
      console.log(error);
      _this.$Progress.fail();
    }
  },
  methods: {
    async createBlog() {
      var _this = this;
      try {
        await _this.$store.dispatch(`$_formBlogs/createBlog`, _this.formData);
        _this.$notify({
          title: "Congratulations",
          message: "Successful",
          type: "success",
        });
        _this.$router.push("/");
      } catch (error) {
        _this.$notify.error({
          title: "Error",
          message: "Fail",
        });
      }
    },
  },
};
</script>


<style scoped>
.table td:first-child {
  width: 20px;
}
table .avatar {
  width: 30px;
  border-radius: 50%;
}
table .icon {
  cursor: pointer;
}
.form-container {
  margin: auto;
}
</style>
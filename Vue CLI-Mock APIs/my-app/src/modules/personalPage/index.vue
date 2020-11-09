<template>
  <div>
    <div class="row">
      <div class="col-md-6">
         <div class="form-detail">
          <h2>{{ data.name }} profile</h2>
          <div class="form-group">
            <img :src="data.avatar" class="img-fluid avatar" v-if="data.avatar"/>
            <img src="@/assets/images/no-avatar.png" class="img-fluid avatar" v-else/>
          </div>
          <div class="form-group">
            <span class="title mr-2">Name:</span>
            <span>{{ data.name ? data.name : 'No name'}}</span>
          </div>
          <div class="form-group">
            <span class="title mr-2">Address:</span>
            <span>{{ data.address ? data.address : 'No address'}}</span>
          </div>
          <div class="form-group">
            <span class="title mr-2">Phone:</span>
            <span>{{ data.phone ? data.phone : 'No phone'}}</span>
          </div>
          <div class="form-group">
            <span class="title mr-2">Country:</span>
            <span>{{ data.country ? data.country : 'No country'}}</span>
          </div>
          <div class="form-group">
            <span class="title mr-2">Age:</span>
            <span>{{ data.age ? data.age : 'No age'}}</span>
          </div>
          <div class="form-group">
            <span class="title mr-2">Gender:</span>
            <span>{{ data.gender ? commonData.genderOptions.find(x => x.code === data.gender).name : 'No gender'}}</span>
          </div>
          <div class="form-group">
            <span class="title mr-2">Occupation:</span>
            <span>{{ data.occupation ? commonData.occupationOptions.find(x => x.code === data.occupation).name : 'No occupation'}}</span>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="redirectTo(`/blog/${data.id}`)">Create new blog</button>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-detail">
          <h2>List of blogs</h2>
          <table class="table">
            <tr>
              <th>Title</th>
              <th>Created at</th>
              <th>Action</th>
            </tr>
            <tr v-for="item in blogs" :key="item.id">
              <td>{{ item.title ? item.title : 'No title' }}</td>
              <td>{{ item.createdAt.slice(0, 10) }}</td>
              <td>
                <a href="javascript:;" @click="deleteBlogs(item.id)">
                  <font-awesome-icon :icon="['fas', 'trash']" class="icon"></font-awesome-icon>
                  <span class="ml-2">Delete a blog</span> 
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <el-dialog title="Are you sure that you want to delete this item?" :visible.sync="dialogBlog">
      <button class="btn btn-secondary mr-2" @click="dialogBlog = false">Hủy</button>
      <button class="btn btn-primary" @click="deleteBlogs(id)">Xác nhận</button>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  import commonData from '../../utils/common-data/index'
  export default {
    components: {},
    data() {
      return {
        commonData,
        dialogBlog: false
      }
    },
    computed: {
      ...mapState({
        stateRequest: state => state.$_personalPage,
      }),
      ...mapGetters({
        data: "$_personalPage/getById",
        blogs: "$_personalPage/getBlogList",
      })
    },
    async created() {
      var _this = this;
      _this.$Progress.start()
      try {
        if (_this.$route.params.id) {
          await _this.$store.dispatch("$_personalPage/getById", _this.$route.params.id);
          await _this.$store.dispatch("$_personalPage/getBlogList", _this.$route.params.id)
        }
        _this.$Progress.finish()
      } catch(error) {
        console.log(error); 
        _this.$Progress.fail()
      }
    },
    methods:{
      redirectTo: function (path) {
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.go(-1)
        }
      },
      openModalBlog(id){
        var _this = this;
        _this.dialogBlog = true;
        _this.id = id;
      },
      async deleteBlogs(id){
        var _this = this;
        _this.$Progress.start()
        try {
          await _this.$store.dispatch("$_personalPage/deleteBlog", id);
          await _this.$store.dispatch("$_personalPage/getBlogList", _this.$route.params.id)
          _this.dialogBlog = false;
          _this.$Progress.finish()
          _this.$notify({
            title: 'Congratulations',
            message: 'Successful',
            type: 'success'
          });
        } catch (error) {
          _this.$Progress.fail()
          _this.$notify.error({
            title: 'Error',
            message: 'Fail'
          });            
        }
      }
    }
  };
</script>


<style scoped>
  .form-detail{
    padding: 20px;
    width: 100%;
    border: 2px dashed lightgrey;
  }

  .form-detail .title{
    font-weight: 600;
  }
  .avatar{
    height: 150px;
  }
</style>
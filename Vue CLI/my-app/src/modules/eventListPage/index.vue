<template>
  <div>
    <div class="mb-4">
      <div class="row">
        <div class="col-md-8">
          <div class="small-title mb-3">Tìm kiếm</div>
            <input class="form-control w-100" type="text" placeholder="Tìm kiếm theo tiêu đề" v-model="title" @keyup="handleSearch" />
          </div>
          <div class="col-md-4">
          <div class="small-title mb-3">Trạng thái</div>
             <el-select class="w-100" v-model="isPublish" @change="handleFilter" filterable placeholder="Chọn trạng thái">
              <el-option :value="true" label="Đang đăng"></el-option>
              <el-option :value="false" label="Đang ẩn"></el-option>
            </el-select>
          </div>
      </div>
    </div>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Ảnh</th>
          <th scope="col">Tiêu đề</th>
          <th scope="col">Mô tả</th>
          <th scope="col">Trạng thái</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.data" :key="index">
          <td style="width: 120px">
            <img class="avatar" :src="item.Avatar"/>
          </td>
          <td>
            <a href="#">{{item.Title}}</a>
          </td>
          <td>{{item.Description}}</td>
          <td style="width: 120px">
            <label :for="item.IsPublish" :class="{'text-success': item.IsPublish, 'text-warning': !item.IsPublish}">{{ item.IsPublish ? 'Đang Đăng' : 'Đang Ẩn' }}</label>
          </td>
          <td style="width: 80px" class="text-center">
            <router-link :to="`/admin/event/${item.Id}`">
              <font-awesome-icon :icon="['fas', 'edit']" />
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
     <el-pagination class="float-right"
      background
      layout="sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="searchRequest.pageSize"
      :current-page.sync="searchRequest.currentPage"
      :page-sizes="[5, 10, 20]"
      :total="data.total">
    </el-pagination>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";

  export default {
    components: {
      
    },
    data() {
      return {
        title: '',
        isPublish: true
      }
    },
    computed: {
      ...mapState({
        searchRequest: state => state.$_eventListPage.searchRequest,
      }),
      ...mapGetters({
        data: "$_eventListPage/getData",
      })
    },
    async created() {
      var _this = this;
      _this.$Progress.start()
      try {
        await _this.$store.dispatch("$_eventListPage/getData")
        _this.$Progress.finish()
      } catch(error) {
        console.log(error); 
        _this.$Progress.fail()
      }
    },
    methods: {
      async handleSizeChange(val) {
        var _this = this;
        _this.$Progress.start()
        try {
          _this.searchRequest.pageSize = val;
          await _this.$store.dispatch("$_eventListPage/getData");
          _this.$Progress.finish()
        } catch(error) {
          console.log(error); 
          _this.$Progress.fail()
        }
      },
      async handleCurrentChange(val) {
        var _this = this;
         _this.$Progress.start()
        try {
           _this.searchRequest.currentPage = val;
        await _this.$store.dispatch("$_eventListPage/getData");
          _this.$Progress.finish()
        } catch(error) {
          console.log(error); 
          _this.$Progress.fail()
        }
      },
      async handleSearch() {
        var _this = this;
        _this.$Progress.start()
        try {
          await _this.$store.dispatch("$_eventListPage/setTitle", _this.title);
          await _this.$store.dispatch("$_eventListPage/getData");
          _this.$Progress.finish()
        } catch(error) {
          console.log(error); 
          _this.$Progress.fail()
        }
      },

      async handleFilter() {
        var _this = this;
        _this.$Progress.start()
        try {
          await _this.$store.dispatch("$_eventListPage/setPublish", _this.isPublish);
          await _this.$store.dispatch("$_eventListPage/getData");
          _this.$Progress.finish()
        } catch(error) {
          console.log(error); 
          _this.$Progress.fail()
        }
      },

      redirectTo: function (path) {
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.go(-1)
        }
      },
    }
  };
</script>


<style>
  .avatar{
    width: 120px;
    height: auto;
  }
  .form-control{
    padding: 19px;
  }
  .small-title{
    font-size: 12px;
    font-weight: 600;
  }
</style>
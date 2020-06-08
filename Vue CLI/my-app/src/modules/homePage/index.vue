<template>
  <div>
    <h1>Form Users</h1>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">#</th>
          <th scope="col">Họ tên</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" v-bind:key="index">
          <td>{{item.id}}</td>
          <td style="width: 80px">
            <img class="avatar" :src="item.avatar"/>
          </td>
          <td>
            <a href="javscript:;">{{item.first_name}} {{ item.last_name }}</a>
          </td>
          <td>{{item.email}}</td>
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
      :total="searchRequest.pageTotal">
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
       
      }
    },
    computed: {
      ...mapState({
        searchRequest: state => state.$_homePage.searchRequest,
      }),
      ...mapGetters({
        data: "$_homePage/getData",
      })
    },
    async created() {
      await this.$store.dispatch("$_homePage/getData")
    },
    methods: {
      async handleSizeChange(val) {
        var _this = this;
        _this.searchRequest.pageSize = val;
        await _this.$store.dispatch("$_homePage/getData");
      },
      async handleCurrentChange(val) {
        var _this = this;
        _this.searchRequest.currentPage = val;
        await _this.$store.dispatch("$_homePage/getData");
      },
    }
  };
</script>


<style>
  .avatar{
    width: 80px;
    height: auto;
  }
</style>
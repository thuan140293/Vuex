<template>
  <div>
    <div class="form-container">
      <h1 class="text-center">Trang chủ</h1>
      <input class="form-control mb-3" v-model="search" @keyup="handleSearch" placeholder="Tìm kiếm..."/>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>
                <span class="mr-2">Name</span>
                <font-awesome-icon :icon="['fas', 'sort']" class="icon" @click="handleSortName()" ></font-awesome-icon>
            </th>
            <th>
              <span class="mr-2">Address</span>
                <font-awesome-icon :icon="['fas', 'sort']" class="icon" @click="handleSortAddress()" ></font-awesome-icon>
            </th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ item.id }}</td>
            <td><img class="avatar mr-3" :src="item.avatar"/></td>
            <td>{{ item.name }} </td>
            <td>{{ item.address }} </td>
            <td>{{ item.phone }} </td>
            <td class="text-center">
              <router-link :to="`/personal/${item.id}`">
                <font-awesome-icon :icon="['fas', 'user-edit']" class="icon"></font-awesome-icon>
              </router-link>
            </td>
          </tr>
        </tbody>    
      </table>
      <el-pagination class="float-right"
                     @current-change="handleCurrentChange"
                     background
                     :current-page.sync="stateRequest.pageIndex"
                     :page-size="stateRequest.limitPage"
                     layout="prev, pager, next"
                     :total="stateRequest.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    components: {
      
    },
    data() {
      return {
        search:''
      }
    },
    computed: {
      ...mapState({
        stateRequest: state => state.$_homePage,
      }),
      ...mapGetters({
        data: "$_homePage/getData",
      })
    },
    async created() {
      var _this = this;
      _this.$Progress.start()
      try {
        await _this.$store.dispatch("$_homePage/getData")
        _this.$Progress.finish()
      } catch(error) {
        console.log(error); 
        _this.$Progress.fail()
      }
    },
    methods:{
      async handleCurrentChange(val) {
        var _this = this;
        _this.pageIndex = val;
        await _this.$store.dispatch("$_homePage/getData");
      },
      async handleSearch(){
        var _this = this;
        await _this.$store.dispatch("$_homePage/setSearch", _this.search);
        await _this.$store.dispatch("$_homePage/getData");
      },
      async handleSortName(){
        var _this = this;
        _this.stateRequest.sortBy = 'name';
        _this.stateRequest.sortDirection = _this.stateRequest.sortDirection ==='asc' ? 'desc' : 'asc';
        await _this.$store.dispatch("$_homePage/getData");
      },
      async handleSortAddress(){
        var _this = this;
        _this.stateRequest.sortBy = 'address';
        _this.stateRequest.sortDirection = _this.stateRequest.sortDirection ==='asc' ? 'desc' : 'asc';
        await _this.$store.dispatch("$_homePage/getData");
      },
    }
  };
</script>


<style scoped>
  .table td:first-child{
    width: 20px;
  }
  table .avatar{
    width: 30px;
    border-radius: 50%;
  }
  table .icon{
    cursor: pointer;
  }
  .form-container{
    /* width: 400px; */
    margin: auto;
  }
</style>
<template>
  <div>
    <div class="form-container">
      <div class="row">
        <div class="col-md-8">
          <button class="btn btn-primary" @click="redirectTo('/personal')">Create new</button>
        </div>
        <div class="col-md-4 text-right">
          <input class="form-control mb-3" v-model="search" @keyup="handleSearch" placeholder="Search..."/>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <!-- <th>Avatar</th> -->
              <th>
                  <span class="mr-2">Name</span>
                  <font-awesome-icon :icon="['fas', 'sort']" class="icon" @click="handleSort(state.sortBy = 'name')" ></font-awesome-icon>
              </th>
              <th>
                <span class="mr-2">Address</span>
                  <font-awesome-icon :icon="['fas', 'sort']" class="icon" @click="handleSort(state.sortBy = 'address')" ></font-awesome-icon>
              </th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{ item.id  }}</td>
              <!-- <td><img class="avatar mr-3" :src="item.avatar"/></td> -->
              <td>{{ item.name }} </td>
              <td>{{ item.address }} </td>
              <td>{{ item.phone }} </td>
              <td class="text-center">
                <font-awesome-icon :icon="['fas', 'trash']" class="icon" @click="openModal(item.id)"></font-awesome-icon>
              </td>
            </tr>
          </tbody>    
        </table>
       </div>
       <el-dialog title="Are you sure that you want to delete this item?" :visible.sync="dialog">
        <button class="btn btn-secondary mr-2" @click="dialogTableVisible = false">Hủy</button>
        <button class="btn btn-primary" @click="handleDelete(id)">Xác nhận</button>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    components: {},
    data() {
      return {
        search:'',
        id:'',
        dialog: false
      }
    },
    computed: {
      ...mapState({
        state: state => state.$_homePage,
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
      openModal: function(id){
        var _this = this;
        _this.dialog = true;
        _this.id = id;
      },
      redirectTo: function (path) {
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.go(-1)
        }
      },
      async handleSearch(){
        var _this = this;
        _this.$Progress.start()
        await _this.$store.dispatch("$_homePage/setSearch", _this.search);
        await _this.$store.dispatch("$_homePage/getData");
        _this.$Progress.finish()
      },
      async handleSort(){
        var _this = this;
        _this.$Progress.start()
        _this.state.sortDirection = _this.state.sortDirection ==='asc' ? 'desc' : 'asc';
        await _this.$store.dispatch("$_homePage/getData");
        _this.$Progress.finish()
      },
      async handleDelete(id){
        var _this = this;
        _this.$Progress.start()
        try {
          await _this.$store.dispatch("$_homePage/deleteData", id);
          await _this.$store.dispatch("$_homePage/getData");
          _this.dialog = false;
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
    },
  };
</script>


<style scoped>
  .table th:first-child,
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
</style>
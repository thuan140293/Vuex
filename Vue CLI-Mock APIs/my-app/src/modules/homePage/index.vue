<template>
  <div>
    <div class="form-container">
      <h1 class="text-center mr-2" ref="titleHeight" style="display: inline-block">Home</h1>
      <div class="row">
        <div class="col-md-8">
          <button class="btn btn-primary" @click="redirectTo('/personal')">Tạo mới</button>
        </div>
        <div class="col-md-4 text-right" ref="searchHeight">
          <input class="form-control mb-3" v-model="search" @keyup="handleSearch" placeholder="Tìm kiếm..."/>
        </div>
      </div>
      <div class="table-responsive" :style="{height: window.height + 'px'}">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{ item.id }}</td>
              <!-- <td><img class="avatar mr-3" :src="item.avatar"/></td> -->
              <td>{{ item.name }} </td>
              <td>{{ item.address }} </td>
              <td>{{ item.phone }} </td>
              <td class="text-center">
                <router-link :to="`/personal/${item.id}`">
                  <font-awesome-icon :icon="['fas', 'edit']" class="icon"></font-awesome-icon>
                </router-link>
              </td>
              <td class="text-center">
                <font-awesome-icon :icon="['fas', 'user']" class="icon"></font-awesome-icon>
              </td>
            </tr>
          </tbody>    
        </table>
       </div>
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
        window: {
            width: 0,
            height: 0
        },
        titleHeight: 0,
        searchHeight: 0
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
      window.addEventListener('resize', _this.handleResize);
      _this.handleResize(); 
      _this.titleHeight = _this.$refs.titleHeight.clientHeight;
      _this.searchHeight = _this.$refs.searchHeight.clientHeight;
      _this.window.height = window.innerHeight - (_this.titleHeight + _this.searchHeight + 152);
    },
    methods:{
      redirectTo: function (path) {
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.go(-1)
        }
      },
      async handleSearch(){
        var _this = this;
        await _this.$store.dispatch("$_homePage/setSearch", _this.search);
        await _this.$store.dispatch("$_homePage/getData");
      },
      async handleSort(){
        var _this = this;
        _this.state.sortDirection = _this.state.sortDirection ==='asc' ? 'desc' : 'asc';
        await _this.$store.dispatch("$_homePage/getData");
      },
      handleResize() {
        var _this = this;
        _this.window.width = window.innerWidth;
        _this.window.height = window.innerHeight;
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
  .form-container{
    /* width: 400px; */
    margin: auto;
  }
</style>
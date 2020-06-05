<template>
  <div>
    <h1>Form Users</h1>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Họ tên</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" v-bind:key="index">
          <td>{{item.id}}</td>
          <td>
            <a href="javscript:;">{{item.first_name}} {{ item.last_name }}</a>
          </td>
          <td>{{item.email}}</td>
        </tr>
      </tbody>
    </table>
     <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    components: {
      
    },
    data() {
      return {
       
      }
    },
    computed: {
      ...mapGetters({
        data: "$_homePage/getData",
      })
    },
    async created() {
      await this.$store.dispatch("$_homePage/getData")
    },
  };
</script>

<template>
  <div>
    <div class="row justify-content-end mb-3">
      <div class="col-6">
        <input class="form-control" v-model="search" placeholder="Type to search" />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filterTable" :key="index">
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="query.pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="query.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "John",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Morgan",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Jessy",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Jessy",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      search: "",
      query: {
        pageIndex: 1,
        limit: 5,
      },
    };
  },
  computed: {
    filterTable() {
      if(this.search && this.search.length){
        return this.tableData.filter((item) => !this.search || item.name.toLowerCase().includes(this.search.toLowerCase()));
      }
      return this.tableData.slice((this.query.pageIndex-1) * this.query.limit, this.query.pageIndex * this.query.limit);
    },
  },
  methods: {
    handleSizeChange(val) {
      this.query.limit = val;
      this.filterTable;
    },
    handleCurrentChange(val) {
      this.query.pageIndex = val;
      this.filterTable;
    },
  },
};
</script>

<style scoped>
</style>
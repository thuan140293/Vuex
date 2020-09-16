<template>
  <div>
    <div class="row justify-content-end">
      <div class="col-6">
        <el-input v-model="search" size="mini" placeholder="Type to search"/>
      </div>
    </div>
    <el-table :data="filterTable"
      style="width: 100%"
    >
      <el-table-column label="Date" prop="date"></el-table-column>
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
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
          date: "2016-05-01",
          name: "Jessy",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      search: "",
    };
  },
  computed: {
    filterTable(){
      return this.tableData.filter(item => !this.search || item.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1)
    },
  },
};
</script>

<style scoped>
</style>
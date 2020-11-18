<template>
  <div>
    <el-dialog title="Dialog View" :visible.sync="dialogVisible" width="30%">
      <span>This is a message {{id}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: { },
  props: ['id', 'dialogVisible']
};
</script>
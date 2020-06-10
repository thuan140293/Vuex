<template>
  <div>
    <form>
      <div class="form-group">
        <label for="title" class="font-weight-bold">Tiêu đề</label>
        <input type="text" v-model="formData.Title" class="form-control" id="title" placeholder="Nhập tiêu đề">
      </div>
      <div class="form-group">
        <label for="description" class="font-weight-bold">Mô tả</label>
        <textarea type="text" v-model="formData.Description" class="form-control" id="description" placeholder="Nhập mô tả"></textarea>
      </div>
    </form>
    <div class="d-flex justify-content-end">
      <button class="btn btn-secondary mr-3" @click="redirectTo('/event')">Hủy</button>
      <button class="btn btn-primary">Lưu</button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      
    },
    data() {
      return {
       formData: {
          Title: '',
          Description: '',
        },
      }
    },
    computed: {
      
    },
    methods:{
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


<style scoped>
  
</style>
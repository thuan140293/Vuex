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
      <button class="btn btn-primary" @click="validateBeforeSubmit()">Lưu</button>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
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
    async created() {
      var _this = this;
      if (_this.$route.params.id) {
        var response = await _this.$store.dispatch("$_eventAdminPage/getById", _this.$route.params.id);
        _this.formData = _.cloneDeep(response.data);
      }
    },
    methods:{
      validateBeforeSubmit: _.debounce(async function () {
        var _this = this;
            try {
              let response = await _this.$store.dispatch(
                "$_eventAdminPage/editEvent",
                _this.formData
              );
              _this.$notify({
                title: 'Chúc mừng',
                message: 'Lưu thành công',
                type: 'success'
              });
              _this.$router.push("/event");
              console.log(response)
            } catch (error) {
              _this.$notify.error({
                title: 'Thất bại',
                message: 'Lưu thất bại'
              });            
            }
      }, 500),

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
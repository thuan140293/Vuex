<template>
  <div>
    <div class="form-container">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="email"
            class="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Enter name"
            v-model="formData.name"
          />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="email"
            class="form-control"
            id="address"
            aria-describedby="address"
            placeholder="Enter address"
            v-model="formData.address"
          />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="phone"
            class="form-control"
            id="phone"
            aria-describedby="phone"
            placeholder="Enter phone"
            v-model="formData.phone"
          />
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input
            type="phone"
            class="form-control"
            id="country"
            aria-describedby="country"
            placeholder="Enter country"
            v-model="formData.country"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            aria-describedby="age"
            placeholder="Enter age"
            v-model="formData.age"
          />
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <el-select class="d-block" v-model="formData.gender" placeholder="Select" @change="handleChangeGender">
            <el-option
              v-for="item in commonData.genderOptions"
              :key="item.code"
              :label="item.name"
              :value="item.code">
            </el-option>
          </el-select>
        </div>
        <div class="form-group">
          <label for="occupation">Occupation</label>
          <el-select class="d-block" v-model="formData.occupation" placeholder="Select" @change="handleChangeOccupation">
            <el-option
              v-for="item in commonData.occupationOptions"
              :key="item.code"
              :label="item.name"
              :value="item.code">
            </el-option>
          </el-select>
        </div>
        <div class="form-group">
          <div v-if="!formData.avatar">
            <input type="file" id="avatar" name="avatar" @change="onFileChange" />
          </div>
          <div v-else>
            <img class="img-fluid" :src="formData.avatar" />
            <button class="btn btn-danger" @click="removeImage">Remove image</button>
          </div>
        </div>
        <div class="text-danger mb-2" v-if="overSize">Ảnh quá kích thước cho phép</div>
      </form>
      <router-link :to="`/`">
        <button type="button" class="btn btn-secondary mr-3">Back</button>
      </router-link>
      <div class="d-inline-block" v-if="this.$route.params.id">
        <button type="button" class="btn btn-primary" @click="updateData">Update</button>
      </div>
      <div class="d-inline-block" v-else>
        <button type="button" class="btn btn-primary" @click="createData">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import _ from "lodash";
import commonData from "../../utils/common-data/index"
export default {
  components: {},
  data() {
    return {
      commonData,
      formData: {
        name: "",
        address: "",
        phone: "",
        country: "",
        age: "",
        gender: "",
        occupation: "",
        avatar: "",
      },
      overSize: false,
    };
  },
  computed: {
    ...mapState({
      stateRequest: (state) => state.$_formPage,
    }),
    ...mapGetters({
      dataDetail: "$_formPage/getById",
    }),
  },
  async created() {
    var _this = this;
    _this.$Progress.start();
    try {
      if (_this.$route.params.id) {
        await _this.$store.dispatch("$_formPage/getById", _this.$route.params.id);
        _this.formData = _.cloneDeep(_this.dataDetail);
      }
      _this.$Progress.finish();
    } catch (error) {
      console.log(error);
      _this.$Progress.fail();
    }
  },
  methods: {
    async createData() {
      var _this = this;
      try {
        await _this.$store.dispatch("$_formPage/createData", _this.formData);
        _this.$notify({
          title: "Congratulations",
          message: "Successful",
          type: "success",
        });
        _this.$router.push("/");
      } catch (error) {
        _this.$notify.error({
          title: "Error",
          message: "Fail",
        });
      }
    },
    async updateData() {
      var _this = this;
      try {
        await _this.$store.dispatch("$_formPage/updateData", _this.formData);
        _this.$notify({
          title: "Congratulations",
          message: "Successful",
          type: "success",
        });
        _this.$router.push("/");
      } catch (error) {
        _this.$notify.error({
          title: "Error",
          message: "Fail",
        });
      }
    },
    onFileChange(e) {
      var _this = this;
      var files = e.target.files;
      var size = files[0].size / 1024;
      if (files.length > 0 && size < 700) {
        _this.overSize = false;
        _this.createImage(files[0]);
      } else {
        _this.overSize = true;
        return;
      }
    },
    createImage(file) {
      var reader = new FileReader();
      var _this = this;

      reader.onload = (e) => {
        _this.formData.avatar = e.target.result;
        var base64String = window.btoa(_this.formData.avatar);
        console.log(base64String);
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      var _this = this;
      _this.formData.avatar = "";
    },
    handleChangeGender(e){
      var _this = this;
      _this.formData.gender = e;
    },
    handleChangeOccupation(e){
       var _this = this;
      _this.formData.occupation = e;
    }
  },
};
</script>


<style scoped>
.table td:first-child {
  width: 20px;
}
table .avatar {
  width: 30px;
  border-radius: 50%;
}
table .icon {
  cursor: pointer;
}
.form-container {
  width: 400px;
  margin: auto;
}
</style>
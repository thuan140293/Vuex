<template>
  <div>
    <div class="row">
      <div class="col-md-3 mb-4 products-cards" v-for="(item, index) in products" :key="index" @click="openDialogView(item.id)">
        <div class="img-fluid products-images" :style="{ backgroundImage: `url(${item.images})` }"></div>
        <div class="mt-2">
          <div><span class="mr-2">Tên:</span><span>{{ item.name }}</span></div>
          <div><span class="mr-2">Loại:</span><span>{{ item.types }}</span></div>
          <div><span class="mr-2">Giá</span><span>{{ item.price }}</span></div>
        </div>
      </div>
    </div>
    <dialog-view :id="id" :dialogVisible="dialogVisible"></dialog-view>
  </div>
</template>

<script>
import dialogView from '../components/dialog-view'
export default {
  components: {'dialogView': dialogView},
  data() {
    return {
        id: null,
        dialogVisible: false
    };
  },
  methods:{
      openDialogView(id){
        var _this = this;
        _this.id = id;
        _this.dialogVisible = true
      }
  },
  props: ['products'],
};
</script>

<style scoped>
    .products-cards{
        cursor: pointer;
    }
    .products-images{
        width: 100%;
        height: 180px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
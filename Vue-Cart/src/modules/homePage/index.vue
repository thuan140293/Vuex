<template>
  <div>
    <div class="container">
        <products-component :products="data"></products-component>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "./_store";
import products from '../../components/products'
export default {
  components: {'products-component' : products},
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      stateRequest: (state) => state.$_homePage,
    }),
    ...mapGetters({
      data: "$_homePage/getData",
      detail: "$_homePage/getById"
    }),
  },
  async created() {
    var _this = this;
    const STORE_KEY = "$_homePage";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      _this.$store.registerModule(STORE_KEY, store);
    }
    await _this.$store.dispatch("$_homePage/getData");
    if(_this.$route.params.id){
      await _this.$store.dispatch("$_homePage/getById", _this.$route.params.id);
    }
  },
  methods: {},
};
</script>

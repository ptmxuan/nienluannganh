<template>
  <div class="container mx-auto my-8" v-if="product">
    <h1 class="text-4xl font-semibold uppercase">
      {{ product.title }}
    </h1>
    <div class="flex gap-4 mt-6 items-center">
      <div class="w-[50%] h-[400px]">
        <img
          class="rounded-md w-full h-full object-cover"
          :src="product.image"
          alt=""
        />
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div class="">
          <p class="leading-10">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/Product/CardProduct.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "@vue/reactivity";
import { cartApi } from "@/api/cartApi";
export default {
  components: { CardProduct },
  setup() {
    // Hooks
    const store = useStore();
    const route = useRoute();

    // Ref
    const size = ref("S"); // "S", "M" , "L"
    const quantity = ref(1);

    // Status before call api
    const loading = ref(false);

    // Actions
    store.dispatch("products/getProductDetail", { id: route.params.id });

    // Data
    const productDetail = computed(() => store.state.products.productDetail);

    // Function global
    const onSizeClick = (sizeParam) => {
      size.value = sizeParam;
    };

    const onQuantityChange = (type) => {
      if (type === "increase") quantity.value++;
      else {
        if (quantity.value > 1) quantity.value--;
      }
    };

    // Submit
    const handleAddToCart = async (data) => {
      // Submit data
      loading.value = true;
      try {
        // Call api
        await cartApi.addToCart(data);

        // Update data in vuex store
        store.dispatch("carts/getCarts");

       
      } catch (err) {
        console.log(err);
      }
      loading.value = false;
    };

    return {
      product: productDetail,
      size,
      quantity,
      onSizeClick,
      onQuantityChange,
      handleAddToCart,
      loading,
    };
  },
};
</script>

<style></style>

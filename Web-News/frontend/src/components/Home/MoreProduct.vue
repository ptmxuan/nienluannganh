<template>
  <div class="coffee-maganize w-[95%] xl:w-[65%] mx-auto mb-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
      <div
        class="ct-product-card"
        v-for="product in moreProducts"
        :key="product._id"
      >
        <div
          :style="{
            'background-image': `url(${product.image})`,
          }"
          class="h-[300px] rounded-md bg-cover bg-center bg-no-repeat"
        >
          <router-link
            :to="{
              name: 'Product-detail',
              params: {
                id: product._id,
              },
            }"
          >
            <div
              class="group w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:duration-700 hover:ease-in-out relative"
            >
              <div
                class="absolute w-[100px] text-gray-100 text-xl rounded-sm bg-red-600 py-1 px-2 right-0 text-center font-semibold"
              >
                HOT
              </div>
              <div
                class="ct-button bg-slate-100 absolute hidden group-hover:block group-hover:animate-fadeIn bottom-3 w-[90%] left-1/2 -translate-x-1/2 text-center"
              >
                CHI TIẾT NỘI DUNG
              </div>
            </div>
          </router-link>
        </div>

        <div class="text-center mt-2">
          <router-link
            :to="{
              name: 'Product-detail',
              params: {
                id: product._id,
              },
            }"
          >
            <p
              class="text-center text-m text-base hover:text-blue-400 font-semibold mb-3 truncate"
            >
              {{ product.title }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["moreProducts"],
  setup({ moreProducts }, context) {
    return {};
  },
};
</script>

<style></style>

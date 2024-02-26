<template>
  <div class="">
    <h1 class="text-center text-xl font-semibold">
      {{ type === "add" ? "Thêm sản phẩm" : "Cập nhật sản phẩm" }}
    </h1>
    <form @submit.prevent="handleSubmit" class="px-6 py-4">
      <div class="row">
        <label class="flex flex-col mb-3" for="email">
          <span class="font-semibold">Tiêu đề</span>
          <input
            v-model="title"
            id="title"
            class="px-4 py-2 rounded-lg border border-gray-100 mt-1"
            type="text"
            placeholder="Nhập tiêu đề..."
          />
        </label>
      </div>
      <div class="row">
        <label class="flex flex-col mb-3">
          <span class="font-semibold">Nội dung</span>
          <textarea
            v-model="description"
            placeholder="Nhập nội dung..."
            class="resize rounded-md border p-2"
          >
          </textarea>
        </label>
      </div>
      <div class="row">
        <label class="flex flex-col mb-3" for="password">
          <span class="font-semibold">Link ảnh</span>
          <input
            v-model="image"
            autocomplete="on"
            id="image"
            class="px-4 py-2 rounded-lg border border-gray-100 mt-1"
            type="text"
            placeholder="Dán link ảnh..."
          />
        </label>
      </div>

      <!-- Start: Error Or Success -->
      <div class="row">
        <h1
          v-if="statusResponse.message"
          class="text-center mb-4"
          :class="statusResponse.success ? 'text-green-500' : 'text-red-500'"
        >
          {{ statusResponse.message }}
        </h1>
      </div>

      <!-- Start: Submit -->
      <div class="row">
        <button
          :disabled="loading"
          class="py-3 text-center text-white bg-blue-400 font-bold rounded-lg w-full bg-primary"
          type="submit"
        >
          {{ type === "add" ? "Thêm tin tức" : "Cập nhật tin tức" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { productsApi } from "@/api/productsApi";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  props: ["type", "productEdit"],
  setup({ type, productEdit }, context) {
    // Hooks
    const store = useStore();
    const route = useRoute();
    // Data
    const title = ref(productEdit?.title || "");
    const description = ref(productEdit?.description || "");
    const image = ref(productEdit?.image || "");
    const price = ref(
      productEdit?.price || {
        S: 0,
        M: 0,
        L: 0,
      }
    );

    // Ref
    const loading = ref(false);
    // status after calling api
    const statusResponse = ref({
      success: false,
      message: "",
    });
    // Func global
    const handleSubmit = async () => {
      const data = {
        title: title.value,
        description: description.value,
        image: image.value,
        price: price.value,
      };
      // Simple validate
      if (!title.value || !description.value || !image.value || !price.value)
        return alert("Hãy nhập đủ thông tin!");

      // Submit data
      try {
        loading.value = true;

        // Call api
        if (type === "add") {
          await productsApi.addProduct(data);
          // Info
          statusResponse.value.success = true;
          statusResponse.value.message = "Thêm bài đăng thành công!";
        } else {
          await productsApi.editProduct({
            ...data,
            idProduct: productEdit._id, // Need to provide id because in case add doesn't id
          });
          // Info
          statusResponse.value.success = true;
          statusResponse.value.message = "Cập nhật tin tức thành công!";
        }

        // Get data
        store.dispatch("products/getProducts", {
          // Page
          page: route.query.page || 1,
        });
      } catch (err) {
        console.log(err);
        statusResponse.value.success = false;
        statusResponse.value.message = err?.response?.data.message;
      }
      loading.value = false;
    };

    return {
      // Data binding
      title,
      description,
      image,
      price,

      // Ref
      loading,
      statusResponse,

      // Func
      handleSubmit,
    };
  },
};
</script>

<style></style>

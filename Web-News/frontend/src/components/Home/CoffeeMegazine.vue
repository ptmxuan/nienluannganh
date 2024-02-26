<template>
  <div class="coffee-magazine w-[95%] xl:w-[45%] mx-auto mb-12">
    <div class="flex flex-col md:flex-row justify-center items-center gap-5">
      <div
        class="ct-magazine-images basis-1/2 md:flex md:flex-row gap-3 w-full h-full"
      >
        <div
          class="ct-magazine-big-image h-[200px] w-[500px] basis-2/3 bg-[url('../../assets/images/coffee1.png')] bg-cover bg-no-repeat bg-center"
        ></div>
        <div
          class="ct-magazine-smalls-images basis-1/3 flex flex-row md:flex-col gap-5 mt-5 md:mt-0"
        >
          <div
            class="h-[130px] basis-1/2 bg-[url('../../assets/images/coffee2.png')] bg-cover bg-no-repeat bg-center"
          ></div>
          <div
            class="h-[130px] basis-1/2 bg-[url('../../assets/images/coffee3.png')] bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </div>
      <div
        class="ct-magazine-post basis-1/2 text-center md:text-left"
      >
        <div class="text-red-600 font-medium text-[25px]">THÔNG BÁO TUYỂN DỤNG</div>
        <div class="text-[20px] font-medium my-3 lg:my-2">Ứng tuyển ngay tại:</div>
        <div class="text-gray-500 leading-7 mb-3 lg:mb-6">
          Phòng HR của công ty
        </div>
        <div
          class="ct-button bg-coffee-400 hover:opacity-90 text-white inline-block"
        >
        <router-link :to="{ name: 'Product', params: {} }">
            <div
              class="w-max rounded-sm text-white-900 px-8 py-4 tracking-wider text-xl uppercase cursor-pointer hover:opacity-90"
            >
              xem thêm tin tức
            </div>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

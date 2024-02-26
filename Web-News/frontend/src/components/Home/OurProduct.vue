<template>
  <div class="story w-[95%] lg:w-[65%] mx-auto mb-12">
    <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
      <div class="basis-3/5">
        <video
          autoplay
          muted
          loop
          class="w-full rounded-md object-cover max-h-[370px]"
        >
          <source src="../../assets/videos/coffee.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="text-center lg:text-left basis-2/5 lg:pl-8">
        <div
          class="text-2xl font-medium mb-4 capitalize leading-10 tracking-wide"
        >
          Nguồn gốc của cà phê
        </div>
        <div class="text-gray-500 leading-7 mb-6">
          Cà phê (gốc từ café trong tiếng Pháp) là một loại thức 
          uống màu đen có chứa chất caffein, được sản xuất từ những 
          hạt cà phê rang lên. Cà phê được sử dụng lần đầu tiên vào 
          thế kỉ thứ 9, khi nó được khám phá ra từ vùng cao nguyên 
          Ethiopia. Từ đó, nó lan ra Ai Cập và Yemen và tới thế kỉ 
          thứ 15 thì đến Armenia, Ba Tư, Thổ Nhĩ Kỳ và phía bắc Châu 
          Phi. Từ thế giới Hồi giáo, cà phê đến Ý, sau đó là phần còn 
          lại của Châu Âu, Indonesia và Hoa Kỳ. Ngày nay, cà phê là 
          một trong những thức uống thông dụng toàn cầu.
        </div>
        <div class="">
          <router-link :to="{ name: 'Home', params: {} }">
            <span
              href=""
              class="text-coffee-400 uppercase pb-2 hover:text-coffee-600 text-base relative after:bg-coffee-200 hover:after:bg-coffee-600 after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:transition-all after:duration-700 after:ease-in-out"
            >
              Xem cách làm ra sản phẩm
            </span></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

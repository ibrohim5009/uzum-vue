<template>
  <Carousel class="container mx-auto" :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide?.id">
      <div class="carousel__item w-[1240px] h-[30rem]">
        <img :src="slide.url" class="object-cover bg-cover rounded-xl mt-5" alt="">
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Pagination,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          url: "https://images.uzum.uz/cm97uah25ku1lubqsmvg/main_page_banner.jpg"
        },
        {
          id: 2,
          url: "https://images.uzum.uz/cm93jn125ku1lubqsgsg/main_page_banner.jpg"
        },
        {
          id: 3,
          url: "https://images.uzum.uz/cmci3ijifoubkc6n5930/main_page_banner.jpg"
        },
        {
          id: 4,
          url: "https://images.uzum.uz/cm770s925ku1lubqmef0/main_page_banner.jpg"
        },
        {
          id: 5,
          url: "https://images.uzum.uz/cmbsa0rifoubkc6n1s7g/main_page_banner.jpg"
        },
        {
          id: 6,
          url: "https://images.uzum.uz/cm778kps99ouqbfp4600/main_page_banner.jpg"
        },
        {
          id: 7,
          url: "https://images.uzum.uz/cm776m1s99ouqbfp45hg/main_page_banner.jpg"
        },
        {
          id: 8,
          url: "https://images.uzum.uz/cm775a9s99ouqbfp45c0/main_page_banner.jpg"
        },
        {
          id: 9,
          url: "https://images.uzum.uz/cm76tkp25ku1lubqmdo0/main_page_banner.jpg"
        },
        {
          id: 10,
          url: "https://images.uzum.uz/cmbph0rifoubkc6n1g30/main_page_banner.jpg"
        },
        {
          id: 11,
          url: "https://images.uzum.uz/cm77399s99ouqbfp450g/main_page_banner.jpg"
        },
        {
          id: 12,
          url: "https://images.uzum.uz/cm0ml132psag1e8u17bg/main_page_banner.jpg"
        },
        {
          id: 13,
          url: "https://images.uzum.uz/cm5fhf125ku1lubqegrg/main_page_banner.jpg"
        },
      ]
    }
  },
})
</script>
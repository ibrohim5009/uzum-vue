<template>
  <div class="container mx-auto flex items-center justify-center">
    <div class="w-[1240px] flex gap-2 mt-5">
      <div class="flex gap-6">
        <div class="flex ">
          <img src="https://static.uzum.uz/nasiya/union.png" class="w-[2rem] object-contain h-[1.5rem] -mt-[1px]" alt="">
          <p class="text-[#1f2026] text-sm">Muddatli to'lov</p>
        </div>
        <div class="flex">
          <img src="https://static.uzum.uz/gifts/gift_offer.png" class="w-[2rem] object-contain h-[1.5rem] -mt-1" alt="">
          <p class="text-[#1f2026] text-sm">
            Yangi yil sovg'alari</p>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="flex gap-5">
      <router-link
        to="/"
        v-for="item in Katalog"
        :key="item.id"
        class="text-sm text-[#595b66] cursor-pointer h-7 gap-6 flex relative group"
      >
        {{ item.title }}
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </router-link>
    </div>
        <div class="-mt-[1px] ml-3">
          <button class="text-[#595b66] text-sm">Yana <v-icon name="bi-chevron-down" scale="0.7"></v-icon></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarBottom",
  data() {
    return {
      Katalog: [

        {
          id: 1,
          title: " Elektronika "
        },
        {
          id: 2,
          title: " Maishiy texnika    "
        },
        {
          id: 3,
          title: " Kiyim "
        },
        {
          id: 4,
          title: " Poyabzallar "
        },
        {
          id: 5,
          title: " Aksessuarlar "
        },
        {
          id: 6,
          title: " Goʻzallik va parvarish "
        },
        {
          id: 7,
          title: "  Salomatlik "
        },
        {
          id: 8,
          title: " Uy-roʻzgʻor buyumlari "
        },
      ]
    }
  },
}
</script>

<style scoped></style>
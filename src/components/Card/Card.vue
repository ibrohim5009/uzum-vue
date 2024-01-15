<template>
  <div class="mx-auto container flex items-center px-36">
    <div class="flex items-center justify-center text-center gap-4">
      <h1 class="text-3xl font-sans font-semibold">Yangi chegirmalar</h1><v-icon name="bi-chevron-right" scale="1"
        class="text-black mt-1"></v-icon>
    </div>
  </div>
  <div class="mx-auto container flex items-center justify-center mt-4">
    <div class="w-[81%] flex items-center justify-between flex-wrap">
      <div class="w-[232px] h-[456px] hover:scale-100 hover:shadow hover:rounded transition-transform transform" :style="{ marginTop: item.top ? item.top : '0' }" v-for="item in data" :key="item.id">
        <div class="w-full h-[300px] object-cover bg-cover rounded img" :style="{ backgroundImage: `url(${item.image})` }">
          <div class="flex items-center justify-end px-5 pt-3">
            <svg data-v-ff0a7354="" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg" alt="like" class="ui-icon ">
              <path
                d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                fill="white" fill-opacity="0.8"></path>
              <path
                d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                fill="#15151A"></path>
            </svg>
          </div>
          <div class="flex items-end justify-start md:mt-[248px] gap-1">
            <button v-if="item.eza"
              class="w-[72px] h-5 bg-[#7000ff] text-[13px] font-medium rounded text-white">{{ item.eza }}</button>
            <button v-else class="w-[72px] h-5 hidden"></button>
            <button v-if="item.sale" class="w-[50px] h-5 bg-[#3b007d] text-white text-[13px] rounded">{{ item.sale }}</button>
            <button v-else class="w-[72px] h-5 hidden"></button>
          </div>
        </div>
        <div class="px-2 pt-3">
          <h1 class="text-black text-xs font-sans font-normal">{{ item.title }}</h1>
          <p class="text-[11px] flex items-center gap-2 text-[#8b8e99] mt-1"><v-icon name="bi-star-fill" scale="0.7"
              class="text-yellow-400 -mt-[1px]"></v-icon> {{ item.most }}</p>
          <p :class="{ 'h-4': item.praise, 'w-24': praiseLength(item) <= 16, 'w-28': praiseLength(item) > 16 }"
            class="bg-yellow-400 text-[11px] text-black rounded text-center mt-2">
            {{ item.praise }}
          </p>
          <div class="flex">
            <div class="w-[50%]">
              <p class="line-through text-[#8b8e99] text-[.7rem] mt-6">{{ item.saleprice }}</p>
              <p class="text-[.875rem] font-sans font-normal">{{ item.price }}</p>
            </div>
            <div class="w-[50%] flex items-end justify-end">
              <button class="mt-7 w-8 h-8 rounded-[50%] border border-[#D7D7D9] flex items-center justify-center">
                <svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg" class="ui-icon  add-cart-icon">
                  <path
                    d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
                    fill="black"></path>
                  <path
                    d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
                    fill="black"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardVue",
  methods: {
    praiseLength(item) {
      return item.praise ? item.praise.length : 0;
    },
  },
  data() {
    return {
      data: [
        {
          id: 1,
          image: "./src/assets/yog.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Kungaboqar yog'i Oila tanlovi, tozalangan va xidsizlantirilgan, 900 ml",
          most: "4.9 (3638 baho)",
          praise: "1 560 so'm/oyiga",
          saleprice: "15 000 so'm",
          price: "13 000 so'm"
        },
        {
          id: 2,
          image: "./src/assets/spark.jpg",
          sale: "Aksiya",
          title: "Smartfon Tecno Spark 10C, 4+128",
          most: "4.9 (26 baho)",
          praise: "161 880 so'm/oyiga",
          saleprice: "2 199 000 so'm",
          price: "1 349 000 so'm"
        },
        {
          id: 3,
          image: "./src/assets/fairy.jpg",
          sale: "Aksiya",
          title: "Idishlarni yuvish vositasi Fairy olma hidi bilan, 450 ml",
          most: "5 (450 baho)",
          praise: "1 440 so'm/oyiga",
          saleprice: "16 000 so'm",
          price: "12 000 so'm"
        },
        {
          id: 4,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm"
        },
        {
          id: 5,
          image: "./src/assets/kiyim.jpg",
          sale: "Aksiya",
          title: "O'g'il bolalar uchun sport kostyumi TRIOMAX uchtasi birda",
          most: "4.8 (27 baho)",
          praise: "20 800 so'm/oyiga",
          saleprice: "340 000 so'm",
          price: "169 000 so'm"
        },
        {
          id: 6,
          image: "./src/assets/tide.jpg",
          sale: "Aksiya",
          title: "Kir yuvish kukuni Tide Color avtomat, 3 kg",
          most: "5 (605 baho)",
          praise: "7 800 so'm/oyiga",
          saleprice: "93 000 so'm",
          price: " 65000 so'm",
          top: "40px"
        },
        {
          id: 7,
          image: "./src/assets/kirishyuvish.jpg",
          sale: "Aksiya",
          title: "Kir yuvish mashinasi Beko WSPE7H616, Inverter ProSmart, 7...",
          most: "4.2 (18 baho)",
          praise: "503 880 so'm/oyiga",
          saleprice: "5 300 000 so'm",
          price: "4 199 000 so'm",
          top: "40px"
        },
        {
          id: 8,
          image: "./src/assets/pepsi.jpg",
          sale: "Aksiya Pepsi",
          title: "Gazlangan ichimlik Pepsi, 1.5 litr",
          most: "4.9 (1715 baho)",
          praise: "1 440 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "12 000 so'm",
          top: "40px"
        },
        {
          id: 9,
          image: "./src/assets/tanlov.jpg",
          eza: "Eksklyuziv",
          title: "Tozalash kukuni Oila tanlovi, limon xushbo'y hidi bilan, 400 g",
          most: "4.7 (1164 baho)",
          praise: "480 so'm/oyiga",
          saleprice: "9 000 so'm",
          price: "4 000 so'm",
          top: "40px"
        },
        {
          id: 10,
          image: "./src/assets/odam.jpg",
          sale: "Aksiya",
          title: "Erkaklar uchun birtonli longsliv",
          most: "4.8 (37 baho)",
          praise: "7 080 so'm/oyiga",
          saleprice: "100 000 so'm",
          price: "59 000 so'm",
          top: "40px"
        },
        {
          id: 11,
          image: "./src/assets/jacob.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 12,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 13,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 14,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 15,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 16,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 17,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 18,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 19,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
        {
          id: 20,
          image: "./src/assets/un.jpg",
          sale: "Aksiya",
          eza: "Eksklyuziv",
          title: "Bu'gdoy uni Oila tanlovi, oliy nav, 1 kg",
          most: "5 (33 baho)",
          praise: "1 200 so'm/oyiga",
          saleprice: "13 000 so'm",
          price: "10 000 so'm",
          top: "40px"
        },
      ],
      hoverImage: false,
    }
  },
}
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease;
}

.transform:hover .img {
  background-size: 102%;
  transition: all 10s ease-in-out;
}

.transform .img {
  background-position: center;
  transition: all 3s;
}

</style>
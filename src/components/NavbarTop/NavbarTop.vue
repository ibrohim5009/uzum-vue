<template>
    <div class="bg-[#f2f4f7] w-full h-[33px] navbartop">
        <div class="container mx-auto flex justify-center">
            <div class="w-[1225px] flex gap-2 justify-between h-[30px]">
                <div class="flex gap-1 mt-1 items-center">
                    <v-icon name="co-location-pin"></v-icon>
                    <p class="text-[#1f2026] text-sm">Shahar:<span class="underline"> Namangan</span></p>
                    <p class="text-[#1f2026 text-sm ml-5"> Topshirish punktlari</p>
                </div>
                <div class="mt-1 flex items-center justify-center">
                    <p class="text-sm text-[#8b8e99] nima"> Buyurtmangizni 1 kunda bepul yetkazib beramiz! </p>
                </div>
                <div class="flex gap-4 mt-1 items-center justify-center">
                    <h1 class="text-[#595b66] text-sm">Savol-javoblar</h1>
                    <h1 class="text-[#595b66] text-sm">Buyurtmalarim</h1>
                    <button class="text-[#1f2026] flex items-center gap-1 text-sm">
                        <img class="w-[1.2rem] object-contain h-[1.2rem]" src='./../../assets/uzbek.png' alt="">
                        O'zbekcha</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "NavbarTop",
}
</script>

<style scoped>
@media (max-width: 1120px) {
    .nima {
        display: none;
    }

    .nima> :nth-child(3) {
        display: flex;
    }
}

@media (max-width: 1100px) {
    .navbartop {
        display: none;
    }
}
</style>
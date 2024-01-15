<script>
export default {
   name: "Button",
  data() {
    return {
      show: false,
      dropdownPosition: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
    };
  },
  methods: {
    toggleDropdown() {
      this.show = !this.show;
    },
  },
}
</script>

<template>
   <div>
          <div class="relative z-50 flex items-start justify-start">
          
            <button
              @click="show = !show"
              class="bg-[#F0F0FF] w-[120px] h-[40px] text-[#7000ff] flex items-center justify-center gap-2 text-center text-base ml-4 hover:bg-[#d7d6ff] rounded"
            >
             <v-icon name="oi-file-directory-open-fill" class="ml-4"/>
              <span class="mr-4">Katalog</span>
            </button>

            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="absolute top-0 left-0 w-screen h-screen bg-indigo-500 rounded-md shadow-xl -ml-[471px] mt-10" >
              <router-link
                to="/"
                class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
              >
                Dropdown List 1
              </router-link>
              <router-link
                to="/"
                class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
              >
                Dropdown List 2
              </router-link>
              <router-link
                to="/"
                class="
            block
            px-4
            py-2
            text-sm text-indigo-100
            hover:bg-indigo-400 hover:text-indigo-100
          "
              >
                Dropdown List 3
              </router-link>
            </div>
          </div>
        </div>
</template>

<style scoped>

</style>
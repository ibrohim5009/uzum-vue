import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
// icon
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FcLikePlaceholder, RiZhihuFill, CoLocationPin, BiSuitHeartFill, BiStarFill, BiBag, BiChevronDown, OiFileDirectoryOpenFill, BiChevronRight } from "oh-vue-icons/icons";

import icons_pack from "./icons_pack" 

icons_pack.forEach(
    icon=>{

        addIcons(...icon);
    }
)

// create app
const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.mount('#app');

<script>
import Carousel from '../../components/Carousel/Carousel.vue';
import NavbarBottom from "../../components/NavbarBottom/NavbarBottom.vue"
import Card from './../../components/Card/Card.vue';
import NavbarTop from './../../components/NavbarTop/NavbarTop.vue';
import Navbar from './../../components/Navbar/Navbar.vue';

export default {
  components: {
    Carousel,
    Card,
    NavbarTop,
    Navbar,
    NavbarBottom,
  },
}
</script>


<template>
  <!-- Navbar top -->
  <NavbarTop />
  <!-- Navbar -->
  <Navbar />
  <!-- Navbar bottom -->
  <NavbarBottom />
  <!-- Carousel -->
  <Carousel />
  <!-- Card -->
  <Card />
  <!-- Basket -->
</template>


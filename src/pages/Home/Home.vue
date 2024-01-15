<script>
import Carousel from '../../components/Carousel/Carousel.vue';

import Card from './../../components/Card/Card.vue';
import NavbarTop from './../../components/NavbarTop/NavbarTop.vue';
import Navbar from './../../components/Navbar/Navbar.vue';
import NavbarBottom from './../../components/NavbarBottom/navbarbottom.vue';

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


../../components/Carousel/carousel.vue../../components/Card/Card.vue../../components/NavbarTop/NavbarTop.vue../../components/Navbar/Navbar.vue../../components/NavbarBottom/navbarbottom.vue
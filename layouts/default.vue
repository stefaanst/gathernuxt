<template>
  <div>
    <Navbar />
    <!-- <hr class="container hr mx-auto"> -->
    <nuxt class="container mt-8"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
html {
  background-color: config('colors.bg');
  font-family: 'Montserrat';
  color: config('colors.black');
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: config('colors.text');
  &:hover {
    cursor: pointer;
  }
}
</style>

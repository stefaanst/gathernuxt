<template>
    <div class="nav flex items-center">
        <div class="flex justify-between container mx-auto items-center">
            <div class="nav-logo flex">
                <nuxt-link exact to="/">GATHER</nuxt-link>
                <span class="beta pt-px pl-1">beta</span>
            </div>
            <div class="nav-menu">
                    <nuxt-link to="/about" class="menu__item">About</nuxt-link>
                <!-- links when logged in  -->
                <a @click="logOut" class="menu__item"> Log Out</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logOut() {
      console.log('logged out')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  min-height: 64px;

  .nav-logo {
    font-size: config('textSizes.2xl');
    letter-spacing: config('tracking.wide');
    .is-active {
      color: config('colors.black');
    }
    .beta {
      color: config('colors.brand');
      font-size: config('textSizes.sm');
      align-self: center;
    }
  }
  .nav-menu {
    .menu__item {
      font-size: config('textSizes.xs');
      font-weight: 400;
      letter-spacing: config('tracking.ultrawide');
      color: config('colors.dimmed');
      text-transform: uppercase;
      transition: color 0.5s ease-in;
      padding-right: config('padding.4');
      padding-bottom: 10px;
      &.is-active {
        color: config('colors.brand');
      }
      &:hover {
        color: config('colors.brand');
      }
    }
  }
}
</style>
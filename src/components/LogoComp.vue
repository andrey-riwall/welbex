<template>
  <router-link :to="{ name: 'home' }" class="header__logo">
    <img src="../assets/logo.svg" alt="logo">
  </router-link>
</template>

<style scoped lang='scss'>
  .header__logo {
    img {
      height: 48px;
    }
  }
  @media (max-width: 420px) {
    .header__logo {
      img {
        height: 30px;
      }
    }
  }
</style>

<script>
  export default {
    components: {  },
    data: function() {
      return {
        
      }
    },
    methods: {
      
    },
    computed: {
      
    },
  }
</script>
<template>
  <main>
    <HeroComp/>
    <CustomizeComp/>
    <NewsComp/>
  </main>
</template>

<style lang='scss'>
  
</style>

<script>
  import HeroComp from './HeroComp.vue';
  import CustomizeComp from './CustomizeComp.vue';
  import NewsComp from './NewsComp.vue';

  export default {
    components: { HeroComp, CustomizeComp, NewsComp },
    data: function() {
      return {

      }
    },
  }
</script>
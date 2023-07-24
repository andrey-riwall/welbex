<template>
  <div id="app">
    <HeaderComp/>
    <Router-View/>
    <FooterComp/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: "Orbitron", sans-serif;
    font-weight: 400;
    line-height: 100%;
    color: white;

    list-style: none;
    text-decoration: none;
  }

  body {
    position: relative;
    min-height: 100vh;
    background: #000;
  }

  input, button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  .container {
    max-width: 1350px;
    padding: 0 15px;
    margin: 0 auto;
  }

  @media (max-width: 420px) {
    .container {
      padding: 0 25px;
    }
  }
</style>

<script>
  import HeaderComp from './components/HeaderComp.vue';
  import FooterComp from './components/FooterComp.vue';

  export default {
    components: { HeaderComp, FooterComp },
}
</script>
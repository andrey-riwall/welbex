<template>
  <header class="header" id="header">
    <div class="container header__container">
      <LogoComp/>
      
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item" v-for="item in nav" :key="nav.indexOf(item)">
            <!-- всегда делается через name, но т.к. страниц нет, для удобства notfoundpage -->
            <router-link :to="{ path: `/${item.href}` }" class="header__link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
  
      <router-link class="header__cart" :to="{ path: '/cart' }">
        <img src="../assets/cart.svg" alt="cart">
      </router-link>
  
      <router-link class="header__btn" :to="{ path: '/contact' }">
        Contact Us
      </router-link>
    </div>
  </header>
</template>

<style scoped lang='scss'>
  .header {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    z-index: 10;
    height: 62px;
  }

  .header__container {
    position: relative;

    display: flex;
    align-items: center;
  }
  .header__nav {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }

  .header__list {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .header__link {
    font-size: 16px;
    line-height: 26px;

    &.router-link-active {
      color: #FAC422;
    }
  }

  

  .header__cart {
    position: relative;

    width: 32px;
    height: 32px;
    margin: 0 40px 0 auto;

    &::after {
      content: '0';
      position: absolute;
      left: 31px;
      bottom: 22px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 21px;
      height: 18px;
      border-radius: 100%;
      background: #fff;

      font-size: 11px;
      line-height: 18px;
      color: #141820;
    }
  }

  .header__btn {
    padding: 16px 31px;
    border: 1px solid #fff;

    font-size: 18px;
    line-height: 30px;
  }

  @media (max-width: 420px) {
    .header {
      height: 50px;
    }

    .header__nav {
      top: 60px;
      transform: translateX(-50%);
    }

    .header__list {
      gap: 20px;
    }

    .header__link {
      font-size: 12px;
      line-height: 100%;
    }

    .header__cart {
      position: relative;
  
      width: 20px;
      height: 30px;
      padding-bottom: 8px;
      margin: 0 30px 0 auto;
  
      &::after {
        content: '0';
        position: absolute;
        left: 22px;
        bottom: 24px;
  
        display: flex;
        align-items: center;
        justify-content: center;
  
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background: transparent;
  
        font-size: 8px;
        line-height: 10px;
        color: #fff;
      }

      img {
        width: 25px;
        height: 25px;
      }
    }
  
    .header__btn {
      padding: 8px 15px;
      border: 1px solid #fff;
  
      font-size: 10px;
      line-height: 100%;
    }
  }
</style>

<script>
  import LogoComp from './LogoComp.vue';

  export default {
    components: { LogoComp },
    data: function() {
      return {
        nav: [ { name: "Home", href: "home" }, { name: "About", href: "about" }, { name: "Team", href: "team" }, { name: "Shop", href: "shop" }, { name: "Pages", href: "pages" }, ]
      }
    },
    methods: {
      
    },
    computed: {
      
    },
  }
</script>
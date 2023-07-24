<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__box">
        <LogoComp/>
        <p class="footer__desc">
          Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non.
        </p>
      </div>
      <div class="footer__box">
        <h3 class="footer__heading">
          Menu Items
        </h3>
        <ul class="footer__list">
          <li class="footer__item" v-for="(item, index) in items" :key="index">
            <router-link :to="{ path: `/${item.href}` }" class="footer__link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer__box">
        <h3 class="footer__heading">
          Other Pages
        </h3>
        <ul class="footer__list">
          <li class="footer__item" v-for="(item, index) in pages" :key="index">
            <router-link :to="{ path: `/${item.href}` }" class="footer__link">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang='scss'>
  .footer {
    padding: 130px 0 175px;
    background: #222730;
  }

  .footer__container {
    display: flex;
    gap: 150px;
  }

  .footer__box {
    min-width: 168px;
  }

  .footer__desc {
    max-width: 289px;

    font-size: 15px;
    line-height: 25px;
    color: #999;

    margin-top: 35px;
  }

  .footer__heading {
    font-size: 18px;
    line-height: 30px;
    text-transform: capitalize;

    margin-bottom: 23px;
  }

  .footer__list {
    display: flex;
    flex-direction: column;
  }

  .footer__link {
    font-size: 15px;
    line-height: 37.5px;
    color: #999;
  }

  @media (max-width: 420px) {
    .footer {
      padding: 50px;
    }

    .footer__desc {
      margin-top: 10px;
    }

    .footer__container {
      flex-direction: column;
      gap: 30px;
    }

    .footer__heading {
      margin-bottom: 10px;
    }
  }
</style>

<script>
  import LogoComp from './LogoComp.vue';

  export default {
    components: { LogoComp },
    data: function() {
      return {
        items: [ { name: 'About', href: 'about' },{ name: 'Blog', href: 'error' },{ name: 'Shop', href: 'shop' },{ name: 'Contact Us', href: 'contact' }, ],
        pages: [ { name: 'Styleguide', href: 'error' },{ name: 'Changelog', href: 'error' },{ name: 'licenses', href: 'error' },{ name: 'Team', href: 'team' }, ],
      }
    },
    methods: {
      
    },
    computed: {
      
    },
  }
</script>
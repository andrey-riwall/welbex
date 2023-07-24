<template>
  <section class="hero">
    <div class="container hero__container">
      <FutureComp/>
      <h1 class="hero__heading">
        Unleash the Next Generation of Gaming
        <img src="../assets/hero_svg.svg" alt="">
      </h1>
      <p class="hero__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
      </p>
      <router-link :to="{ path: '/more' }" class="hero__btn hero__btn-blue">
        Explore More
      </router-link>
      <router-link :to="{ path: '/team' }" class="hero__btn">
        View our team
      </router-link>
      <ul class="hero__info">
        <li class="hero__item" v-for="item in info" :key="info.indexOf(item)">
          <a :href=item.href class="hero__link" target="_blank">
            {{ item.name }}
          </a>
        </li>
      </ul>
      <img src="../assets/hero.png" alt="" class="hero__img">
    </div>
    <div class="hero__bg"></div>
  </section>
</template>

<style scoped lang='scss'>
  .hero {
    position: relative;
    height: 1069px;
    padding-top: 291px;
  }

  .hero__container {
    position: relative;
    z-index: 8;
  }

  .hero__img {
    position: absolute;
    z-index: 10;
    top: 5px;
    right: 0;

    width: 660px;
    height: 518px;
  }

  .hero__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 44%;
    background: #57B8FF;
  }

  .hero__heading {
    position: relative;

    max-width: 656px;

    font-size: 72px;
    line-height: 86px;
    text-transform: capitalize;
    margin-bottom: 45px;

    img {
      position: absolute;
      right: 3px;
      bottom: 75px;
    }
  }

  .hero__desc {
    max-width: 615px;

    font-size: 18px;
    line-height: 28px;
    color: #999;

    margin-bottom: 53px;
  }

  .hero__btn {
    padding: 21px 34px;
    font-size: 18px;
    line-height: 28px;
    text-transform: capitalize;
  }

  .hero__btn-blue {
    background: #57B8FF;
    margin-right: 6px;
  }

  .hero__info {
    position: absolute;
    top: 220px;
    left: -160px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    transform: rotate(-90deg);
  }

  .hero__link {
    font-size: 10px;
    line-height: 25px;
    color: #80858F;
  }

  @media (max-width: 420px) {
    .hero__img, .hero__bg {
      display: none;
    }

    .hero {
      padding-top: 180px;
      height: 100vh;
    }

    .hero__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero__heading {
      max-width: 300px;
      font-size: 45px;
      line-height: 120%;
      text-align: center;
      margin-bottom: 10px;

      img {
        top: 160px;
        left: 50%;
        transform: translateX(-50%) scale(.7);
      }
    }

    .hero__desc {
      text-align: center;
    }

    .hero__btn-blue {
      margin: 0;
      margin-bottom: 5px;
    }
  }
</style>

<script>
  import FutureComp from './FutureComp.vue';

  export default {
    components: { FutureComp },
    data: function() {
      return {
        info: [ { name: 'FACEBOOK', href: 'https://www.facebook.com/' }, { name: 'INSTAGRAM', href: 'https://www.instagram.com/' }, { name: 'TWITCH', href: 'https://www.twitch.tv/' }, ]
      }
    },
    methods: {
      
    },
    computed: {
      
    },
  }
</script>
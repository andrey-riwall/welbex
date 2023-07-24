<template>
  <section class="customize">
    <div class="container customize__container">
      <img src="../assets/customize.png" alt="" class="customize__img">

      <div class="customize__content">
        <FutureComp/>
        <h2 class="customize__heading">
          Customize your Own Character
        </h2>
        <p class="customize__desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
        </p>
        <ul class="customize__list">
          <li class="customize__item" :class="{ is_active: img.active }" v-for="(img, index) in images" :key="index" @click="activeImg(index)">
            <img :src="require(`@/assets/${img.src}`)" alt="" class="customize__img-item">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  .customize {
    height: 695px;
    background: #2A313C;
  }

  .customize__container {
    display: flex;
    justify-content: space-between;
  }

  .customize__content {
    width: 596px;
    padding-top: 82px;
  }

  .customize__heading {
    font-size: 64px;
    line-height: 74px;
    text-transform: capitalize;

    margin-bottom: 38px;
  }

  .customize__desc {
    font-size: 20px;
    line-height: 30px;
    color: rgba(223, 223, 223, 0.80);

    margin-bottom: 54px;
  }

  .customize__list {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .customize__item {
    border: 11px solid rgba(#3B3D46, 0);
    border-radius: 20px;

    transition: border-color .25s ease;

    img {
      width: 174px;
      height: 103px;
      border-radius: 20px;
    }

    &.is_active {
      border-color: #3B3D46;
    }
  }

  @media (max-width: 420px) {
    .customize {
      height: calc(100vh + 130px);
    }

    .customize__img {
      display: none;
    }

    .customize__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      padding-top: 50px;
    }

    .customize__heading {
      font-size: 50px;
      line-height: 120%;
      text-align: center;

      margin-bottom: 15px;
    }

    .customize__desc {
      text-align: center;
      font-size: 18px;
    }

    .customize__list {
      width: 70%;
      flex-direction: column;
    }

    .customize__item {
      width: 100%;
    }

    .customize__item img {
      width: 100%;
      object-fit: cover;
    }
  }
</style>

<script>
import FutureComp from './FutureComp.vue';

  export default {
    components: { FutureComp },
    data: function() {
      return {
        images: [ { src: 'customize1.png', active: true }, { src: 'customize2.png', active: false }, { src: 'customize3.png', active: false }, ]
      }
    },
    methods: {
      activeImg: function(index) {
        this.images.forEach(el => {
          el.active = false;
        });
        this.images[index].active = true;
      }
    },
  }
</script>
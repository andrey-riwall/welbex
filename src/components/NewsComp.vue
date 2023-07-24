<template>
  <section class="news">
    <div class="container news__container">
      <FutureComp/>
      <div class="news__box">
        <h2 class="news__heading">
          Latest News & Articles
        </h2>
        <router-link :to="{ path: '/more' }" class="news__btn">
          Read More
        </router-link>
      </div>
      <ul class="news__grid">
        <li class="news__item" v-for="(item, index) in news" :key="index">
          <img :src="require(`../assets/${item.src}`)" alt="img" class="news__img">
          <span class="news__date">
            {{ item.date }}
          </span>
          <h3 class="news__heading_low">
            {{ item.heading }}
          </h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  .news {
    padding: 130px 0;
  }

  .news__box {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-bottom: 68px;
  }

  .news__heading {
    max-width: 541px;

    font-size: 64px;
    line-height: 74px;
    text-transform: capitalize;
  }

  .news__btn {
    padding: 21px 34px;
    background: #57B8FF;

    font-size: 17px;
    line-height: 28px;
    text-transform: capitalize;
  }

  .news__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 321px);
    grid-column-gap: 24px;
    grid-row-gap: 40px;
  }

  .news__img {
    border-radius: 15px;
    width: 100%;

    margin-bottom: 30px;
  }

  .news__date {
    display: block;

    font-size: 16px;
    line-height: 16px;
    color: #57B8FF;

    margin-bottom: 20px;
  }

  .news__heading_low {
    font-size: 24px;
    line-height: 34px;
    text-transform: capitalize;
  }

  .news__item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;

    .news__img {
      margin-bottom: 54px;
    }

    .news__date {
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 28px;
    }

    .news__heading_low {
      font-size: 24px;
      line-height: 46px;
    }
  }

  @media (max-width: 420px) {
    .news {
      padding: 50px 0;
    }

    .news__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .news__box {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 40px;
    }

    .news__heading {
      font-size: 50px;
      text-align: center;
      margin-bottom: 10px;
    }

    .news__btn {
      padding: 13px 50px;
    }

    .news__grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: none;
    }

    .news__img {
      height: 100px;
    }

    .news__item:nth-child(1) {
      grid-column: span 1;
      grid-row: span 1;
  
      .news__img {
        object-fit: cover;
        margin-bottom: 30px;
      }
  
      .news__date {
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 20px;
      }
  
      .news__heading_low {
        font-size: 24px;
        line-height: 34px;
      }
    }

    .news__item:last-child {
      
    }

    .news__date {
      font-size: 12px !important;
      line-height: 100% !important;

      margin-bottom: 10px !important;
    }

    .news__heading_low {
      font-size: 15px !important;
      line-height: 150% !important;
    }
  }
</style>

<script>
  import FutureComp from "./FutureComp.vue";
  
  export default {
    components: { FutureComp },
    data: function() {
      return {
        news: [ { src: 'news1.png', date: 'April 2, 2021', heading: 'Esports Group teams up with the Indianapolis Colts' },{ src: 'news2.png', date: 'April 2, 2021', heading: 'NAVI reveals s1mple fifth anniversary' },{ src: 'news3.png', date: 'April 2, 2021', heading: 'A1esports Shares new picture' }, { src: 'news4.png', date: 'April 2, 2021', heading: 'T1 unveil partnership with Razer' }, { src: 'news5.png', date: 'April 2, 2021', heading: 'RX secures content partnership with' }, ],
      }
    },
    methods: {
      
    },
    computed: {
      
    },
  }
</script>
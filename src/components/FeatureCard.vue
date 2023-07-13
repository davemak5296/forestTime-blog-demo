<script setup>
import { defineProps } from 'vue';
import Badge from '@/components/Badge.vue';

const props = defineProps({
  pic: {
    type: String,
    required: true
  },
})
const getImageUrl = (pic) => new URL(`../assets/images/garden_cat_${pic}.jpg`, import.meta.url).href;

</script>

<template>
  <li class="feature">
    <a class="wrap" href="#">
      <img :src="getImageUrl(pic)" alt="">
      <!-- <img src="../assets/images/garden_cat_01.jpg" alt=""> -->
      <div class="gradient"></div>
      <div class="text-wrap">
        <Badge category="indoor" />
        <h4 class="title">How to choose high quality soil for your gardens</h4>
        <span class="meta">11 JULY, 2023</span>
        <span class="separator">|</span>
        <span class="meta">BY MATILDA</span>
      </div>
    </a>
  </li>
</template>

<style scoped>
/* // card container
  padding: var(--spc-2);
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1320px;
    margin-inline: auto;
  } */

.feature {
  list-style: none;
  color: hsl(var(--c-base-100));
}
.feature:not(:last-of-type) {
  margin-block-end: var(--spc-2);
  @media screen and (width >= 768px){
    margin-block-end: 0px;
    margin-inline-end: var(--spc-2);
  }
}
.feature:last-of-type {
  display: none;
  @media screen and (width >= 992px){
    display: block;
  }
}
.feature > .wrap {
  display: grid;
  isolation: isolate;
}
.wrap > * {
  grid-column: 1 / -1;
  grid-row: 1/-1;
}
.wrap > img {
  display: block;
  width: 100%;
}
.wrap > .gradient {
  height: 60%;
  margin-block-start: auto;
  background: linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(0,0,0,1) 100%);
  mask-image: linear-gradient(to bottom, transparent, black);
}
.wrap > .text-wrap {
  margin-block-start: auto;
  padding: var(--spc-4) var(--spc-3);
  z-index: 1;
}
.text-wrap > .title {
  font-size: var(--fs-400);
  font-weight: var(--fw-bold);
  margin-block: var(--spc-4);
  @media screen and (width >= 576px) {
    font-size: var(--fs-600);
  };
  @media screen and (width >= 768px) {
    font-size: var(--fs-400);
  }
}
.text-wrap .meta {
  display: inline-block;
  font-size: var(--fs-100);
  font-weight: var(--fw-bold);
  @media screen and (width >= 1200px) {
    font-size: var(--fs-200);
    margin-block-start: var(--spc-10);
  }
}

.text-wrap > .separator {
  display: inline-block;
  margin-inline: var(--spc-3)
}

</style>
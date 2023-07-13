<script setup>
import { defineProps } from 'vue';
import Badge from './Badge.vue';
defineProps({
})
</script>

<template>
  <li class="excerpt">
    <a class="excerpt__left" href="">
      <img src="../assets/images/garden_sq_01.jpg" alt="">
    </a>
    <a class="excerpt__right" href="">
      <Badge category="gardening" />
      <h4 class="title">The best twenty plant species you can look at at home</h4>
      <p class="text">Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos officia accusamus soluta in fuga facere sequi! Totam fuga tempora, debitis nesciunt et error accusantium recusandae, voluptatem cumque voluptatum, illo minima.
      </p>
      <span class="meta">
        <fa-icon :icon="['fas', 'eye']" class="icon"></fa-icon>
        1887
      </span>
      <span class="separator">|</span>
      <span class="meta">11 JULY, 2023</span>
      <span class="separator">|</span>
      <span class="meta">BY MATILDA</span>
    </a>
  </li>
</template>

<style scoped>
/* // excerpt container 
  padding: var(--spc-2); */
.excerpt {
  display: flex;
  flex-direction: column;
  margin-block-end: var(--spc-8);

  @media screen and (width >= 576px) {
    max-width: 540px;
  };
  @media screen and (width >= 768px) {
    max-width: 720px;
    flex-direction: row;
  };
  @media screen and (width >= 1200px) {
    max-width: 855px;
  };
}
.excerpt:last-of-type {
  margin-block-end: var(--spc-12);
}
.excerpt__left, .excerpt__right {
  display: block;
}
.excerpt__left {
  margin-inline-end: 0;
  flex-shrink: 0;
  @media screen and (width >= 768px) {
    margin-inline-end: var(--spc-3);
    width: 250px;
  };
}
.excerpt__right {
  padding-block-start: var(--spc-3);
  @media screen and (width >= 768px) {
    padding-block-start: 0;
  };
  @media screen and (width >= 992px) {
    margin-inline-end: var(--spc-4);
  };
}
.excerpt__right .title {
  color: hsl(var(--c-base-inverse-200));
  font-size: var(--fs-600);
  font-weight: var(--fw-bold);
  margin-block-start: var(--spc-4);
  margin-block-end: var(--spc-2);
  @media screen and (width >= 576px){
    font-size: var(--fs-800);
  };
  @media screen and (width >= 768px){
    font-size: var(--fs-600);
  }
}
.excerpt__right .text {
  line-height: var(--lh-lg);
  color: hsl(var(--c-base-inverse-400));
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (width >= 768px){
    line-height: var(--lh-md);
    font-size: var(--fs-300);
  };
  @media screen and (width >= 1200px){
    line-height: var(--lh-lg);
  }
}
.excerpt__right .meta {
  display: inline-block;
  margin-block-start: var(--spc-4);
  font-size: var(--fs-100);
  font-weight: var(--fw-bold);
  color: hsl(var(--c-base-inverse-200));
  @media screen and (width >= 1200px) {
    font-size: var(--fs-200);
    margin-block-start: var(--spc-10);
  }
}

.excerpt__right .meta .icon {
  font-size: inherit;
}
.separator {
  display: inline-block;
  margin-inline: var(--spc-3)
}
</style>
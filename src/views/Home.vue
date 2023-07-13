<script setup>
import Excerpt from '@/components/Excerpt.vue';
import FeatureCard from '@/components/FeatureCard.vue';
import SideBar from '@/components/SideBar.vue';
import Pagination from '@/components/Pagination.vue';

</script>

<template>
  <div class="feature-cards-wrap">
    <FeatureCard pic="01" />
    <FeatureCard pic="02" />
    <FeatureCard pic="03" />
  </div>
  <main class="container">
    <section>
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Excerpt />
      <Pagination />
    </section>
    <SideBar />
  </main>
</template>

<style scoped>
.container {
  max-width: 100%;
  padding-inline: var(--spc-4);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (width >= 576px) {
    width: 540px;
  }
  @media screen and (width >= 768px) {
    width: 720px;
  }
  @media screen and (width >= 992px) {
    width: 960px;
    grid-template-columns: 3fr 1fr;
  }
  @media screen and (width >= 1200px) {
    width: 1200px;
    padding-inline: var(--spc-6);
    /* grid-template-columns: 855px 285px; */
  }
}
.feature-cards-wrap {
  padding: var(--spc-2);
  margin-block-end: var(--spc-12);
  display: flex;
  flex-direction: column;
  @media screen and (width >= 768px){
    flex-direction: row;
  }
  @media screen and (width >= 1200px) {
    max-width: 1320px;
    margin-inline: auto;
  }
}
</style>
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
  <main class="container container-2c">
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
<script setup>
import Excerpt from '@/components/Excerpt.vue';
import SideBar from '@/components/SideBar.vue';
import Pagination from '@/components/Pagination.vue';

</script>

<template>
  <div class="container page-title-wrap">
    <h2 class="page-title">
      <fa-icon :icon="['fas', 'leaf']" class="icon" />
      Category by:&nbsp;<span>{{ $route.params.cat }}</span></h2>
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
.page-title-wrap {
  padding-block: var(--spc-12);
}
.page-title {
  display: flex;
  align-items: center;
  font-size: var(--fs-700);
  /* font-weight: var(--fw-bold); */
  color: hsl(var(--c-base-inverse-400));
}
.page-title .icon {
  display: inline-block;
  padding: var(--spc-3);
  margin-inline-end: var(--spc-3);
  background-color: hsl(var(--c-primary));
  color: hsl(var(--c-base-100));
  border-radius: 50%;
}
.page-title span {
  color: hsl(var(--c-base-inverse-200));
  font-weight: var(--fw-bold);
  text-transform: capitalize;
}
</style>
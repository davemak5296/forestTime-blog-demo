<script setup>
</script>

<template>
  <ul class="pagination">
    <li class="page"><a href="#">1</a></li>
    <li class="page"><a href="#">2</a></li>
    <li class="page"><a href="#">3</a></li>
    <li class="page"><a href="#">Next</a></li>
  </ul>
</template>

<style scoped>
.pagination {
  display: flex;
  margin-block-end: var(--spc-16);
}
.page {
  margin-inline-end: var(--spc-2);
}
.page a {
  display: block;
  padding-block: var(--spc-2);
  padding-inline: var(--spc-3);
  background-color: hsl(var(--c-primary));
  color: hsl(var(--c-base-100));
}
.page a:is(:hover, :focus) {
  background-color: hsl(var(--c-primary-focus));
  cursor: pointer;
}
</style>
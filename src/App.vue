<script setup>
import ChildComp from './components/ChildComp.vue'

</script>

<template>
  <h1 class="">i should inherit styles from body</h1>
  <fa-icon icon="fa-solid fa-user" class="icon" />
  <fa-icon :icon="['fas', 'house']" class="icon" />
  <ChildComp />
</template>

<style scoped>
.icon {
  margin-left: 12px;
  font-size: 36px;
  color: firebrick;
}
</style>

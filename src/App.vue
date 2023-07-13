<script setup>
import Layout from '@/components/Layout.vue';

</script>

<template>
  <Layout />

  <!-- <RouterLink class="red" to="/">Home</RouterLink>
  <RouterLink class="red ml" to="/todo/1">Todo 1</RouterLink>
  <RouterLink class="red ml" to="/todo/2">Todo 2</RouterLink>
  <RouterView v-slot="{ Component }">
    <Transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </Transition>
  </RouterView> -->
</template>

<style scoped>
/* .slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-5%);
} */
</style>

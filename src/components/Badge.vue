<script setup>
import { defineProps } from 'vue';
defineProps({
  size: {
    type: String,
    default: 'normal',
    required: false
  },
  category: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a href="#" :class="['badge', size === 'lg' ? 'badge-lg' : '']">
    <span>{{ category }}</span>
  </a>
</template>

<style scoped>
.badge {
  width: fit-content;
  display: block;
  background-color: hsl(var(--c-primary));
  color: hsl(var(--c-base-100));
  font-size: var(--fs-200);
  padding: var(--spc-1) var(--spc-6);
  border-radius: 4px;
  @media screen and (576px <= width < 768px) {
    font-size: var(--fs-300);
  };
}
.badge:is(:hover, :focus) {
  background-color: hsl(var(--c-primary-focus));
}
.badge-lg {
  font-size: var(--fs-300);
}
.badge span {
  text-transform: capitalize;
}
</style>
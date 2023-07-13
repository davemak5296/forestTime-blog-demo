<script setup>
import { defineProps } from 'vue';
defineProps({
  size: {
    type: String,
    default: 'normal',
    required: false
  },
})
</script>

<template>
  <button type="button" :class="['btn', size === 'sm' ? 'btn-sm' : '']">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  width: 100%;
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);
  padding: var(--spc-3) var(--spc-8);
  background-color: hsl(var(--c-primary));
  color: hsl(var(--c-base-100));

  @media screen and ( width >= 768px ) {
    width: fit-content;
    font-size: var(--fs-200);
  }
}
.btn:is(:hover, :focus) {
  background-color: hsl(var(--c-primary-focus));
}

.btn-sm {
  width: fit-content;
  font-size: var(--fs-100);
  padding: var(--spc-2) var(--spc-6)
}
</style>
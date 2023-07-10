<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

let route = useRoute();
let todo = ref(null);

const fetchTodo = async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  todo.value = await res.json();
}

onMounted(() => fetchTodo(route.params.id));

// watch(() => route.params.id, async (newId) => fetchTodo(newId))

</script>

<template>
  <div>
    <h2>{{ $route.params.id }}</h2>
    <div v-if="todo">
      <h1>todo id: {{ todo.id }}</h1>
      <p>todo title: {{ todo.title }}</p>
    </div>
  </div>
</template>


<style scoped></style>
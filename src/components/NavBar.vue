<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <ul>
        <li>
          <router-link to="/tasks">Tasks</router-link>
        </li>
        <li>
          <router-link to="/tasks/new">Crear Task</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "NavBar",
});
</script>

<template>
    <ul>
        <li>
            <router-link to="/tasks">Tasks</router-link>
        </li>
        <li>
            <router-link to="/tasks/new">Crear Task</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

    name: "NavBar"

})
</script>
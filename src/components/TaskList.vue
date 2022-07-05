<template>
 <ul>
     <li v-for="task in tasks" :key="task._id" @click="this.$router.push(`/tasks/${task._id}`)">{{ task.title }}</li>
 </ul>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";

import { ref } from "vue";

export default defineComponent({
  name: "TaskList",
  setup() {
    const tasks = ref([] as Task[]);

    return {
      tasks,
    };
  },
  async mounted() {
    await this.loadTasks();
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();

      this.tasks = res.data;
    },
  },
});
</script>

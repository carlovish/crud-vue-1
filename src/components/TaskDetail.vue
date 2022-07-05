<template>
  <h1>Task Details</h1>

  <form @submit.prevent="handleUpdate()">
    <input type="text" v-model="currentTask.title" />
    <textarea rows="3" v-model="currentTask.description"> </textarea>
    <button>Actualizar</button>
  </form>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const currentTask = ref({} as Task);

    return {
      currentTask,
    };
  },

  mounted() {
    this.loadTask(this.$route.params.id);
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data;
    },

    async handleUpdate() {
      const res = await updateTask(
        this.$route.params.id,
        this.currentTask
      );
      console.log(res);
      this.$router.push('/');
    },
  },
});
</script>

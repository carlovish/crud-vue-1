<template>
  <form @submit.prevent="saveTask()">
    <input type="text" placeholder="Escriba un título" v-model="task.title" />
    <textarea
      rows="3"
      placeholder="Escriba una descripción"
      v-model="task.description"
    ></textarea>
    <button>Guardar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from '@/services/TaskService'

export default defineComponent({
  setup() {
    const task = ref({} as Task);

    return {
      task,
    };
  },
  methods: {
    async saveTask() {
     
      const res=await createTask(this.task);
      console.log(res);
      this.$router.push("/");
    },
  },
});
</script>

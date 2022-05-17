<template>
  <h1 v-if="!tasksLength" class="text-white center">Задач пока нет</h1>
  <app-tasks-list
    v-else
    :tasks="$store.state.tasks"
  ></app-tasks-list>
</template>

<script>
import AppTasksList from '@/components/AppTasksList'
import { mapGetters } from 'vuex'

export default {
  components: { AppTasksList },
  emits: ['changeTaskStatus'],
  computed: {
    ...mapGetters(['tasksLength'])
  }
}
</script>

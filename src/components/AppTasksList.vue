<template >
  <h3 class="text-white">Всего активных задач: {{ tasksActiveLength }}</h3>
  <app-task-item
    v-for="task in tasks"
    :task="task"
    :key="task.id"
  ></app-task-item>
</template>

<script>
import { mapGetters } from 'vuex'
import AppTaskItem from '@/components/AppTaskItem'

export default {
  name: 'AppTasksList',
  components: {
    AppTaskItem
  },
  props: ['tasks'],
  computed: {
    ...mapGetters(['tasksActiveLength'])
  },
  created () {
    // console.log(this.$store)
  }
}
</script>

<style scoped>

</style>

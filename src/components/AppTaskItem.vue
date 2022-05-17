<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <app-status :type="task.status"></app-status>
    </h2>
    <p>
      <strong>
        <small>
          {{ task.deadline }}
        </small>
      </strong>
    </p>
    <router-link
      custom
      v-slot="{ navigate }"
      :to="'/task/' + task.id"
    >
      <button @click="navigate" class="btn primary">Посмотреть</button>
    </router-link>
  </div>
</template>

<script>
import AppStatus from '@/components/AppStatus'
export default {
  name: 'AppTaskItem',
  components: {
    AppStatus
  },
  props: ['task']
}
</script>

<style scoped>

</style>

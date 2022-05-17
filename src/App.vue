<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view
    @changeTaskStatus="changeTaskStatus"
    />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  components: {
    TheNavbar
  },
  methods: {
    changeTaskStatus (e) {
      this.$store.state.tasks.find(t => t.id === Number(e.id)).status = e.status
      localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks))
    }
  },
  beforeMount () {
    const localTasks = JSON.parse(localStorage.getItem('tasks')) || []
    if (localTasks.length > 0) {
      this.$store.state.tasks = localTasks
    }
  }
}
</script>

<style>

</style>

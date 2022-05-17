<template>
  <div class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.deadline }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button @click="changeTaskStatus('pending')" class="btn">Взять в работу</button>
      <button @click="changeTaskStatus('done')" class="btn primary">Завершить</button>
      <button @click="changeTaskStatus('cancelled')" class="btn danger">Отменить</button>
    </div>
  </div>
<!--  <h3 class="text-white center">-->
<!--    Задачи с id = <strong>Tут АЙДИ</strong> нет.-->
<!--  </h3>-->
</template>

<script>
import AppStatus from '@/components/AppStatus'

export default {
  components: { AppStatus },
  props: ['id'],
  emits: ['changeTaskStatus'],
  computed: {
    task () {
      return this.$store.state.tasks.find(e => e.id === Number(this.id))
    }
  },
  methods: {
    changeTaskStatus (status) {
      const id = this.id
      this.$emit('changeTaskStatus', { status, id })
    }
  }
}
</script>

<style scoped>

</style>

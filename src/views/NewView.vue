<template>
  <form class="card" @submit.prevent="addNewTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input
        v-model.trim="title"
        type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input
        v-model="date"
        type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea
        v-model.trim="description"
        id="description"></textarea>
    </div>

    <button :disabled="!isValid" type="submit" class="btn primary">Создать</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      date: '',
      description: ''
    }
  },
  // {
  //   id: 2,
  //   title: 'Title 2',
  //   description: 'Descr',
  //   status: 'done',
  //   deadline: '05.07.2022'
  // }
  methods: {
    addNewTask () {
      const newTask = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        status: 'active',
        deadline: new Date(this.date).toLocaleDateString()
      }
      this.$store.state.tasks.push(newTask)
      localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks))
      this.$router.push('/')
    }
  },
  computed: {
    isValid () {
      let isValid = true
      if (this.title.length < 3 || this.description.length < 3 || this.date === '') {
        isValid = false
      }
      if (new Date(this.date).getTime() < Date.now()) {
        isValid = false
      }
      return isValid
    }
  }
}
</script>

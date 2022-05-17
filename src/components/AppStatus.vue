<template>
  <span :class="['badge', $store.state.taskStates[type][0]]">{{ $store.state.taskStates[type][1] }}</span>
</template>

<script>
export default {
  props: ['type']
}
</script>

<template>
  <div>
    <button @click="click">click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    click() {
      this.$snotify.error('hasdfas', 'asdfsadf');
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
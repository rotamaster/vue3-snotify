<template>
  <div>
    <button @click="click()">click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    click() {
      console.log('hi');
      console.log(this.$snotify);

      const thing = this.$snotify.error('hasdfas', 'asdfsadf');
      console.log(thing);
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
<template>
  <div class="snotifyToast__buttons">
    <button
      type="button"
      v-for="(button, i) in toast.config.buttons"
      :key="i"
      :class="[
        { 'snotifyToast__buttons--bold': button.bold },
        button.className,
      ]"
      @click.prevent.stop="button.action ? button.action(toast) : remove()"
    >
      {{ button.text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["toast"],
  methods: {
    remove() {
      this.$snotify.remove(this.toast.id);
    },
  },
});
</script>

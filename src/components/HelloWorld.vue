<template>
  <div>
    <button style="background-color: red; color: white" @click="clickShowError()">
      Show an error notification
    </button>
    <br /><br />
    <button style="background-color: green; color: white" @click="clickShowSuccess()">
      Show a success notification
    </button>
    <br /><br />
    <button style="background-color: blue; color: white" @click="clickShowInfo()">
      Show an info notification
    </button>
    <br /><br />
    <button style="background-color: red; color: white" @click="clickShowErrorAsync()" :disabled="asyncLoading">
      Await async with rejected (Error)
    </button>
    <br /><br />
    <button style="background-color: green; color: white" @click="clickShowSuccessAsync()" :disabled="asyncLoading">
      Await async with resolved (Success)
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    asyncLoading: false,
  }),
  methods: {
    clickShowError(): void {
      this.$snotify.error('Something went wrong', 'Oops');
    },
    clickShowSuccess(): void {
      this.$snotify.success('Something went right', 'Hurrah');
    },
    clickShowInfo(): void {
      this.$snotify.info('Something just is', 'Notice');
    },
    async clickShowErrorAsync(): Promise<void> {
      this.$snotify.async('Will reject with error', 'Awaiting...', () => new Promise(async (_resolve, reject) => {
        await this.sleep(2000);
        reject({
          title: 'Rejected',
          body: 'Sorry about that',
          config: {
            closeOnClick: true
          }
        });
      }));
    },
    async clickShowSuccessAsync(): Promise<void> {
      this.$snotify.async('Will resolve with success', 'Awaiting...', () => new Promise(async (resolve, _reject) => {
        await this.sleep(2000);
        resolve({
          title: 'Resolved',
          body: 'Hurrah for Karamazov!',
          config: {
            closeOnClick: true
          }
        });
      }));
    },
    sleep(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  },
  setup(): {} {
    return {}
  }
})
</script>

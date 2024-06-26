<template>
  <div>
    <div
      class="snotify-backdrop"
      v-if="backdrop >= 0"
      :style="{ opacity: backdrop }"
    ></div>
    <div
      v-for="(position, index) in notifications"
      class="snotify"
      :class="'snotify-' + index"
      :key="index"
    >
      <toast
        v-for="toast in getNotificationsForPos(index)"
        :toastData="toast"
        :key="toast.id"
        @stateChanged="stateChanged"
      />

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SnotifyToast } from "../models/toast.model";
import { SnotifyNotifications } from "../interfaces";
import { SnotifyPosition } from "../enums";
import Toast from "./SnotifyToast.vue";

export default defineComponent({
  components: {
    Toast,
  },
  data() {
    return {
      /**
       * Toasts array
       */
      notifications: {
        left_top: [],
        left_center: [],
        left_bottom: [],

        right_top: [],
        right_center: [],
        right_bottom: [],

        center_top: [],
        center_center: [],
        center_bottom: [],
      } as SnotifyNotifications,
      /**
       * Helper for slice pipe (maxOnScreen)
       */
      dockSize_a: 0,
      /**
       * Helper for slice pipe (maxOnScreen)
       */
      dockSize_b: 0 as number | undefined,
      /**
       * Helper for slice pipe (maxAtPosition)
       */
      blockSize_a: 0,
      /**
       * Helper for slice pipe (maxAtPosition)
       */
      blockSize_b: 0 as number | undefined,
      /**
       * Backdrop Opacity
       */
      backdrop: -1,
      /**
       * How many toasts with backdrop in current queue
       */
      withBackdrop: [] as SnotifyToast[],
    };
  },
  methods: {
    getNotificationsForPos(posIndex): SnotifyToast[] {
      return this.notifications[posIndex].slice(this.blockSize_a, this.blockSize_b);
    },
    setOptions(toasts) {
      if (this.$snotify.config.global) {
        const maxOnScreen = this.$snotify.config.global?.maxOnScreen;
        const maxAtPosition = this.$snotify.config.global?.maxAtPosition;
        if (this.$snotify.config.global.newOnTop) {
          if (maxOnScreen) {
            this.dockSize_a = -maxOnScreen;
          }
          this.dockSize_b = undefined;
          // this.dockSize_b = 0;
          if (maxAtPosition) {
            this.blockSize_a = -maxAtPosition;
          }
          this.blockSize_b = undefined;
          // this.blockSize_b = 0;
          this.withBackdrop = toasts.filter(
            (toast) => toast.config.backdrop >= 0
          );
        } else {
          this.dockSize_a = 0;
          if (maxOnScreen) {
            this.dockSize_b = maxOnScreen;
          }
          this.blockSize_a = 0;
          if (maxAtPosition) {
            this.blockSize_b = maxAtPosition;
          }
          this.withBackdrop = toasts
            .filter((toast) => toast.config.backdrop >= 0)
            .reverse();
        }
      }
      this.notifications = this.splitToasts(
        toasts.slice(this.dockSize_a, this.dockSize_b)
      );
      this.stateChanged("mounted");
    },

    // TODO: fix backdrop if more than one toast called in a row
    /**
     * Changes the backdrop opacity
     * @param {SnotifyEvent} event
     */
    stateChanged(event) {
      if (!this.withBackdrop.length) {
        if (this.backdrop >= 0) {
          this.backdrop = -1;
        }
        return;
      }
      switch (event) {
        case "mounted":
          if (this.backdrop < 0) {
            this.backdrop = 0;
          }
          break;
        case "beforeShow":
          const backdrop = this.withBackdrop[this.withBackdrop.length - 1].config.backdrop;
          if (backdrop) {
            this.backdrop = backdrop;
          }
          break;
        case "beforeHide":
          if (this.withBackdrop.length === 1) {
            this.backdrop = 0;
          }
          break;
        case "hidden":
          if (this.withBackdrop.length === 1) {
            this.backdrop = -1;
          }
          break;
      }
    },

    /**
     * Split toasts toasts into different objects
     * @param {SnotifyToast[]} toasts
     * @returns {SnotifyNotifications}
     */
    splitToasts(toasts): SnotifyNotifications{
      const result = {};

      for (const property in SnotifyPosition) {
        if (SnotifyPosition.hasOwnProperty(property)) {
          result[SnotifyPosition[property]] = [];
        }
      }

      toasts.forEach((toast) => {
        result[toast.config.position].push(toast);
      });

      return result;
    },
  },
  created() {
    this.$snotify.emitter.on("snotify", (toasts) => {
      this.setOptions(toasts);
    });
  },
});
</script>

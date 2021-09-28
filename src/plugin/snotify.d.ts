import { ComponentCustomProperties } from "vue";
import { SnotifyService } from "./SnotifyService";
declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $snotify: SnotifyService;
  }
}

# Vue Snotify for Vue 3
Based on [vue-snotify](https://github.com/artemsky/vue-snotify) for Vue 2.

# How to use
npm i --save vue3-snotify

In main.ts : 
```ts
import snotify from 'vue3-snotify';
import 'vue3-snotify/style';
const app = createApp(App)
app.use(snotify);
app.mount('#app');
```
In App.vue:
```html
<vue-snotify />
```

In a component:
```ts
this.$snotify.error('hello');
```

The api should be the same as [vue-snotify](https://www.npmjs.com/package/vue-snotify)

## Todos:
- Restore html functionality on SnotifyService
- Restore async functionality on SnotifyService
- Style options

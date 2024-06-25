# Vue Snotify for Vue 3
Based on [vue-snotify](https://github.com/artemsky/vue-snotify) for Vue 2.

The following `vue-snotify` features are missing from this fork:
- Custom HTML notifications
- Dark and simple themes

## Installation
npm i --save vue3-snotify

## Usage

### **With the Options API**

In `main.ts`:

```ts
...
import snotify from 'vue3-snotify';
import 'vue3-snotify/style';

const app = createApp(App);

app.use(snotify);
app.mount('#app');
```

In `App.vue`:

```html
<div>
    <MyApp />
    <vue-snotify />
</div>
```

Usage:

```vue
<script>
...

methods: {
    showToast() {
        this.$snotify.error('Hello, world!');
    },
},

...
</script>

<template>
    <button :onClick="showToast" />
</template>
```

### **With the Composition API**

In `main.ts`:

```ts
...
import Snotify from 'vue3-snotify';
import 'vue3-snotify/style';

const app = createApp(App);

app.use(Snotify);

app.provide('snotify', app.config.globalProperties.$snotify);

app.mount('#app');
```

Usage:

```vue
<script setup>
import type { SnotifyService } from 'vue3-snotify';

const snotify = inject('snotify');

const showToast = snotify.success('Hello, world!');
</script>

<template>
    <button :onClick="showToast" />
</template>
```

### **With Nuxt 3**

In `plugins/snotify.ts`:

```ts
import { defineNuxtPlugin } from '#app';
import Snotify, { type SnotifyService } from 'vue3-snotify';
import 'vue3-snotify/style';

declare module '#app' {
  interface NuxtApp {
    $snotify: SnotifyService;
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const { vueApp } = nuxtApp;

  vueApp.use(Snotify);
  nuxtApp.provide('snotify', vueApp.config.globalProperties.$snotify);
});
```

In `composables/useSnotify.ts`:

```ts
export function useSnotify() {
  const { $snotify } = useNuxtApp();

  return $snotify;
}
```

Usage:

```vue
<script setup>
const snotify = useSnotify();

const showToast = snotify.success('Hello, world!');
</script>

<template>
    <button :onClick="showToast" />
</template>
```

## To-do:
- Restore HTML functionality on SnotifyService
- Export Dark and Simple themes
- Unit tests

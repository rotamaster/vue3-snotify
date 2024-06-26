# Vue Snotify for Vue 3
Based on [vue-snotify](https://github.com/artemsky/vue-snotify) for Vue 2.

The following `vue-snotify` features are missing from this fork:
- Custom HTML notifications

## Installation
- ```npm i vue3-snotify```
- ```yarn add vue3-snotify```

## Usage

In `main.ts`:

```ts
...
import snotify from 'vue3-snotify';
import 'vue3-snotify/style'; // Base styles

import 'vue3-snotify/theme/material';
// import 'vue3-snotify/theme/simple';
// import 'vue3-snotify/theme/dark';
// import '../someCustomTheme.css';

const app = createApp(App);

app.use(snotify);

app.provide('snotify', app.config.globalProperties.$snotify);

app.mount('#app');
```

In `App.vue`:

```html
<div>
    <MyApp />
    <vue-snotify />
</div>
```

#### **With the Options API:**

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

#### **With the Composition API:**

```vue
<script setup>
const snotify = inject('snotify');

const showToast = snotify.success('Hello, world!');
</script>

<template>
    <button :onClick="showToast" />
</template>
```

## With Nuxt 3

In `plugins/snotify.ts`:

```ts
import { defineNuxtPlugin } from '#app';
import Snotify, { type SnotifyService } from 'vue3-snotify';
import 'vue3-snotify/style'; // Base styles

import 'vue3-snotify/theme/material';
// import 'vue3-snotify/theme/simple';
// import 'vue3-snotify/theme/dark';
// import '../someCustomTheme.css';

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

<template>
  <div class="darkmode-trigger bottom-right" data-darkmode-toggle>
    <label class="switch">
      <span class="sr-only">Toggle Darkmode</span>
      <input type="checkbox">
      <span class="slider"></span>
    </label>
  </div>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import defaultLayout from './components/layouts/default'
import EmptyLayout from './components/layouts/empty'
export default {
  name: 'App',
  computed: {
    layoutComponent() {
      let currentLayout = ''
      const routeLayout = this.$route.meta.layout?.toLowerCase()
      switch (routeLayout) {
        case 'default':
          currentLayout = defaultLayout
          break
        default:
          currentLayout = EmptyLayout
      }
      return currentLayout
    },
  },
}
</script>

<template>
  <div v-if="loading" class="preloader">
    <!-- Your preloader content goes here -->
    Loading...
  </div>
    
  <div v-else>
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
  </div>
</template>

<script>
import { defineComponent, watch, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import defaultLayout from './components/layouts/default.vue'
import EmptyLayout from './components/layouts/empty.vue'
export default defineComponent({
  name: 'App',
  setup(){
    const loading = ref(false);
    const route = useRoute()

    const layoutComponent = computed(() => {
      let currentLayout = defaultLayout;
      const routeLayout = route.meta.layout?.toLowerCase();
      switch (routeLayout) {
        case 'default':
          currentLayout = defaultLayout;
          break;
        default:
          currentLayout = EmptyLayout;
      }
      return currentLayout;
    });

    watch(
      () => route,
      () => {
        // Show loading indicator when navigating to a new route
        loading.value = true;

        // Simulate an asynchronous operation (e.g., fetching data)
        setTimeout(() => {
          // Hide loading indicator after the operation is done
          loading.value = false;
        }, 10000); // Adjust the timeout as needed
      }
    );

    return { loading, layoutComponent }
  }
})
</script>
<style>
/* Add your preloader styles here */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
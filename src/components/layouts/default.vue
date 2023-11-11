<template>
  <!-- Menu modal -->
  <div class="wrap dark:uk-background-gray-100">
    <!-- Hero -->
    <div class="uni-hero uk-panel uk-overflow-hidden">
      <!-- Hero: Header -->
      <HeaderUI/>
      <router-view />
      <!-- Hero: Content -->
    </div>
    <!-- Footer / cta -->
    <FooterUI />
  </div>
</template>
<script>
import FooterUI from "@/components/ui/FooterUI.vue";
import HeaderUI from "@/components/ui/HeaderUI.vue";
export default {
  name: "defaultLayout",
  components: { FooterUI, HeaderUI }
}
</script>
<style>
.dynamic-island{
  padding: 8px 15px;
  border-radius: 3px;
  height: 40px;
}
</style>
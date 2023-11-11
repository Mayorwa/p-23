<template>
  <footer class="uni-cta-footer uk-section-large uk-section-2xlarge@m dark:uk-background-gray-100 dark:uk-text-white">
    <div class="uk-container">
      <div class="uk-grid uk-grid-medium@m" data-uk-grid>
        <div class="uk-width-1-2 uk-width-2-12@m">
          <ul class="uk-list uk-list-large">
            <li>
              <a href="https://instagram.com/unistudioco">
                <i class="brand-github-circle uk-icon-small"><span class="sr-only">Github</span></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/unistudioco">
                <i class="brand-twitter uk-icon-small"><span class="sr-only">Twitter</span></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/unistudioco">
                <i class="brand-instagram uk-icon-small"><span class="sr-only">Instagram</span></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-margin-large-top uk-margin-2xlarge-top@m">
        <div class="uk-grid" data-uk-grid>
          <div class="uk-width-1-1 uk-width-auto@m">
            <span>{{ new Date().getFullYear() }} © Mayowa</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: "FooterUI",
})
</script>
<style scoped>
.footer-fix{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
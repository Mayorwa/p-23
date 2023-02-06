<template>
  <div class="uk-section uk-section-2xlarge@m uk-flex-middle uk-flex-center" data-uk-height-viewport>
    <div class="uk-container">
      <div class="uk-width-2xlarge@m uk-margin-auto uk-text-center">
        <h3 class="uk-heading-xlarge">404</h3>
        <h1 class="uk-heading-medium">Page not found!</h1>
        <p>The page you are looking for does not exist or has been moved!</p>
        <router-link :to="{name: 'Index'}" class="uk-link-underline uk-margin-large-top@m">
          <i class="material-icons">arrow_back</i>
          <span>Back to mayorwa.od</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FourOhFourPage",
}
</script>
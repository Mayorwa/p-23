<template>
  <div class="uk-panel uk-overflow-hidden uk-margin-large-top uk-margin-xlarge-top@m">
    <div class="uk-container">
      <div class="uk-container uk-container-small">
        <p class="uk-text-medium uk-text-xlarge@m uk-text-center dark:uk-text-white">
          a software engineering student, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="uk-panel uk-background-primary uk-margin-large-top">
        <div class="uk-grid-collapse uk-child-width-expand@s uk-height-4xlarge space-x-2" uk-grid>
          <div style="background-image: url('/assets/images/athlete.jpg')" class="bg-career">
          </div>
          <div style="background-image: url('/assets/images/engineer.jpg')" class="bg-career">
          </div>
        </div>
        <div class="uk-position-cover uk-overlay-primary uk-flex-center uk-flex-middle uk-text-center uk-flex-column uk-flex-row@l">
          <h3 class="uk-h2 uk-heading-hero@m uk-text-normal uk-text-white uk-width-5-12@l uk-width-1-1 uk-margin-top uk-margin-bottom">athlete</h3>
          <h3 class="uk-h2 uk-heading-hero@m uk-text-normal uk-text-white uk-width-2-12@l uk-width-1-1 uk-margin-bottom">x</h3>
          <h3 class="uk-h2 uk-heading-hero@m uk-text-normal uk-text-white uk-width-5-12@l uk-width-1-1 uk-margin-top uk-margin-bottom">engineer</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
}
</script>
<style>
.bg-career{
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}
.space-x-2 > *:not(:last-child){
  margin-right: 2px;
}
.space-x-2 > *:not(:first-child){
  margin-left: 2px;
}
</style>
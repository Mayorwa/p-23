<template>
  <div class="uk-container">
    <div class="uk-panel inner-section">
      <div class="uk-grid">
        <div class="uk-width-1-1">
          <div class="uk-margin-2xlarge-horizontal dark:uk-text-white dark:uk-border-white uk-position-relative uk-overflow-hide">
            <div>
              <p class="uk-heading-hero@m uk-h1 uk-text-normal uk-margin-remove">
                Mayowa Ogunwole
              </p>
              <p class="uk-heading-hero@m uk-h2 uk-font-serif uk-text-normal uk-margin-remove uk-text-gray-80 dark:uk-text-gray-40">
                Lagos—<span class="uk-text-italic">based</span>
                <br/>
                Software Engineer
              </p>

              <p class="uk-margin-large-top">
                I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.
              </p>

              <div class="uk-margin-3xlarge-top">
                <button class="uk-button uk-button-primary dark:uk-button-primary-invert uk-text-small uk-radius-small uk-padding-medium-vertical">
                  <IconUI name="talk" width="20px" height="20px" />
                  <span class="uk-margin-xsmall-left">let's talk</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconUI from "@/components/ui/IconUI.vue";

export default {
  name: "HomePage",
  components: {IconUI},
}
</script>
<style>
.p-bg{
  //background: linear-gradient(85deg, #00000008, transparent);
  background: #00000008;
  &:hover > img  {
    animation: loop 1.5s infinite alternate-reverse forwards;
  }
}
.p-img{
  filter: blur(10px);
  position: absolute;
  transform:  translate(50px, 0) rotate(-10deg) scale(1);
  z-index: -1;
  top: 0;
  right: 0;
}
</style>
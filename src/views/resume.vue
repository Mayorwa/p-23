<template>
  <div class="uk-container">
    <div class="uk-panel inner-section">
      <div class="uk-grid">
        <div class="uk-width-1-1">
          <div class="uk-margin-3xlarge-horizontal dark:uk-text-white dark:uk-border-white uk-position-relative uk-overflow-hide">
            <div>
              <p class="uk-heading-hero@m uk-h1 uk-text-light uk-margin-remove">
                  Resume
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="uk-container">
    <div class="uk-panel inner-section">
      <div class="uk-grid">
        <div class="dark:uk-text-white">
          <!-- Company -->
          <div v-for="(company, index) in resumeDetails" :key="index">
            <div>
              <p class="uk-h3@m uk-h4 uk-text-semibold">
                {{ index }}
              </p>
            </div>
            <!-- Position & Tasks -->
            <div class="uk-margin-medium-left">
              <div class="uk-margin-medium-horizontal">
                <div class="uk-margin-medium" v-for="(role, i) in company" :key="i">
                  <p class="uk-text-normal uk-h5@m uk-h6 uk-margin-remove">{{ i }}</p>
                  <span class="uk-text-small">{{ role[0] }} -  {{ role[1]}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "ResumePage",
  setup(){
    const resumeDetails = {
      "390Labs Limited": {
        "Software Engineer, Frontend": [ "July, 2023", "Present"],
        "Software Engineer, Intern": [ "April, 2021", "April, 2022"]
      },
      "Patricia Technologies": {
        "Software Engineer, Frontend": [ "October, 2021", "December, 2022"],
        "Software Engineer, Contract": [ "July, 2021", "October, 2021"]
      },
      "Expresso": {
        "Software Engineer, Frontend": [ "October, 2021", "December, 2022"],
      },
      "Findworka": {
        "Software Engineer, Frontend": [ "October, 2021", "December, 2022"],
      },
    }

    return { resumeDetails }
  }
})
</script>
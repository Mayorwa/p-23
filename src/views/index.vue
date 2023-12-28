<template>
  <div class="uk-container">
    <div class="uk-panel inner-section">
      <div class="uk-grid">
        <div class="uk-width-1-1">
          <div class="uk-margin-3xlarge-horizontal dark:uk-text-white dark:uk-border-white uk-position-relative uk-overflow-hide">
            <div>
              <p class="uk-heading-hero@m uk-h1 uk-text-light uk-margin-remove glitch">
                <span v-for="index in 12" :key="index" class="line">
                  Mayowa Ogunwole
                </span>
              </p>
              <div class="uk-heading-hero@m uk-h2 uk-font-serif uk-text-normal uk-text-gray-80 dark:uk-text-gray-40 uk-margin-small-top">
                <!-- <a class="uk-link-underline"><span class="uk-text-success-60">La</span>g<span class="uk-text-success-60 uk-margin-remove">os</span></a>—<span class="uk-text-italic">based</span> -->
                <a class="uk-link-underline">Lagos</a> — <span class="uk-text-italic">based</span><span class="uk-margin-xsmall-vertical">🇳🇬</span>
                <p class="uk-margin-remove">Software/ML Engineer</p>
              </div>

              <div class="uk-flex uk-margin-3xlarge-top">
                <div class="uk-border-top uk-width-1-5">

                </div>
                <div class="uk-width-4-5 uk-margin-left">
                  I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="uk-container">
    <div class="uk-panel inner-section">
      <p class="uk-h1@m uk-h2 uk-font-serif uk-text-light">Works</p>
    </div>
  </div>

  <div class="uk-container">
    <div class="uk-panel inner-section">
      <div class="uk-grid">
        <div class="uk-width-2-5">
          <p class="uk-h1@m uk-h2 uk-font-serif uk-text-light">Resume</p>
        </div>

        <div class="uk-width-3-5 dark:uk-text-white">
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
  name: "HomePage",
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
<style lang="scss">
.glitch {
  position: relative;
}

.line {
  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
  }

  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation:
          clip 3000ms $i * -300ms linear infinite,
          glitch#{$i} 500ms random(1000) * -1ms linear infinite;

      @keyframes glitch#{$i} {
        0% {
          transform: translateX(0);
        }
        80% {
          transform: translateX(0);
          color: #fff;
        }
        85% {
          transform: translateX(random(10) - 5px);
          color: #4E9A26;
        }
        90% {
          transform: translateX(random(10) - 5px);
          color: #AC1212;
        }
        95% {
          transform: translateX(random(10) - 5px);
          color: #fff;
        }
        100% {
          transform: translateX(0);
        }
      }
    }
  }
}

@keyframes clip {
  0% {
    clip-path: polygon(
            0 100%,
            100% 100%,
            100% 120%,
            0 120%
    );
  }

  100% {
    clip-path: polygon(
            0 -20%,
            100% -20%,
            100% 0%,
            0 0
    );
  }
}
</style>
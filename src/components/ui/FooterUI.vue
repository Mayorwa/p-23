<template>
  <footer class="uni-cta-footer dark:uk-text-white">
    <div class="uk-container">
      <div class="dark:uk-background-black uk-background-gray-10 uk-radius-large-top uk-padding-large-vertical uk-padding-small-horizontal">
        <div class="uk-margin-small-horizontal">
          <div class="uk-grid" data-uk-grid>
            <div class="uk-width-1-1 uk-width-auto@m uk-text-small">
              <div class="uk-panel">
                <span class="uk-logo uk-text-large uk-navbar-item uk-margin-remove uk-padding-remove uk-text-normal" href="#">`M[O]` 
                  <a class="uk-text-small uk-border-left uk-padding-small-left uk-underline-link">
                    hello@mayowa.design
                  </a>
                </span>
              </div>
            </div>
            <div class="uk-navbar-right uk-navbar-center@s">
              <a class="uk-text-small uk-text-normal">
                <span class="uk-text-gray-40">Local Time:</span> {{ westAfricaTime }} WAT
              </a>
            </div>
          </div>
        </div>
        <hr/>
        <div class="uk-margin-small-horizontal">
          <div class="uk-grid" data-uk-grid>
            <div class="uk-text-small">
              <span>{{ new Date().getFullYear() }} © Mayowa</span>
            </div>
            <div class="uk-flex uk-flex-middle uk-margin-small-top uk-margin-remove@s uk-navbar-right uk-navbar-center@s">
                <div :class="`uk-navbar-item uk-padding-small-vertical`" v-for="(item, index) in menuItems" :key="index">
                  <a class="uk-flex uk-flex-middle">
                    <IconUI :name="item.itemIcon" :title="item.itemTitle"/>
                    <span class="uk-text-small uk-margin-xsmall-left uk-visible@l">{{ item.itemTitle }}</span>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import {defineComponent, ref, onMounted} from "vue"
import IconUI from "@/components/ui/IconUI.vue";
export default defineComponent({
  name: "FooterUI",
  components: {IconUI},
  setup(){
    const menuItems = ref([
      { itemTitle: "Instagram", itemIcon: "instagram" },
      { itemTitle: "Github", itemIcon: "github" },
      { itemTitle: "Twitter", itemIcon: "twitter" }
    ])

    const westAfricaTime = ref('')

    const getWestAfricaTime = () => {
      const westAfricaTimeZone = 'Africa/Lagos'; // Use the appropriate time zone
      const date = new Date().toLocaleTimeString('en-US', { timeZone: westAfricaTimeZone });
      westAfricaTime.value = date;
    };

    onMounted(()=> {
      getWestAfricaTime();
      setInterval(getWestAfricaTime, 1000);
    })

    return { menuItems, westAfricaTime }
  }
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
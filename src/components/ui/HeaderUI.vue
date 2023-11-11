<template>
  <header class="uk-container uni-studio-header uni-header">
    <div class="uni-header-navbar uk-sticky-transparent" data-uk-sticky="top: 120; animation: uk-animation-slide-top;">
      <div class="uk-container uk-container-expand">
        <nav class="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
          <div class="uk-navbar-top uk-flex-center">
            <div class="uk-navbar-left uk-flex-1">
              <div class="uk-panel">
                <a class="uk-logo uk-text-large uk-navbar-item uk-margin-remove uk-text-normal" href="#">`M[O]`</a>
              </div>
            </div>
            <div class="uk-navbar-right uk-flex">
              <div :class="`uk-navbar-item uk-padding-large-vertical uk-padding-small-vertical@l ${index !== menuItems.length - 1 ? 'uk-border-right uk-border-gray-70' : ''}`" v-for="(item, index) in menuItems" :key="index">
                <a class="uk-flex uk-flex-middle">
                  <IconUI :name="item.itemIcon" :title="item.itemTitle"/>
                  <span class="uk-text-small uk-margin-xsmall-left uk-text-normal uk-visible@l">{{ item.itemTitle }}</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script >
import IconUI from "@/components/ui/IconUI.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "HeaderUI",
  components: { IconUI, },
  setup(){
    const menuItems = ref([
      { itemTitle: "resume", itemIcon: "resume" },
      { itemTitle: "works", itemIcon: "showcase" },
      { itemTitle: "let's collaborate", itemIcon: "collab" }
  ])

    return { menuItems }
  }
})
</script>
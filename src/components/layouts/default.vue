<template>
  <!-- Menu modal -->
  <div id="uni-menu-modal" class="uk-modal-full uk-modal" data-uk-modal>
    <div class="uk-modal-dialog">
      <div class="uk-container">
        <div class="uk-flex-middle uk-flex-center" data-uk-height-viewport>
          <ul class="uk-list uk-list-large uk-h2 uk-h1@m uk-text-center">
            <li><a href="#">home.</a></li>
            <li><a href="#">journey.</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="wrap">

    <!-- Sidenavs -->
    <div class="uni-sidenavs uk-visible@l dark:uk-text-white">
      <div class="uk-position-left uk-flex-center uk-flex-middle">
        <ul class="uk-subnav uk-subnav-large" style="writing-mode: vertical-lr; transform: rotate(180deg)">
          <li><a href="#">home.</a></li>
          <li><a href="#">journey.</a></li>
        </ul>
      </div>
      <div class="uk-position-right uk-flex-center uk-flex-middle">
        <ul class="uk-subnav uk-subnav-large" style="writing-mode: vertical-lr">
          <li>
            <a href="https://github.com/Mayorwa">
              <i class="brand-github-circle uk-icon-small"><span class="sr-only">Github</span></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aircadian">
              <i class="brand-twitter uk-icon-small"><span class="sr-only">Twitter</span></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mayorwa.od/">
              <i class="brand-instagram uk-icon-small"><span class="sr-only">Instagram</span></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Hero -->
    <div class="uni-hero uk-panel uk-overflow-hidden">

      <!-- Hero: Header -->
      <header class="uni-studio-header uni-header">
        <div class="uni-header-navbar uk-sticky-transparent" data-uk-sticky="top: 120; animation: uk-animation-slide-top;">
          <div class="uk-container">
            <nav class="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
              <div class="uk-navbar-top uk-flex-center">
                <div class="uk-navbar-left uk-flex-1">
                  <div class="uk-panel">
                    <a class="uk-logo uk-h4 uk-h3@m uk-navbar-item uk-margin-remove uk-sticky-logo" href="#">🧔🏾‍♂️</a>
                    <a class="uk-logo uk-h4 uk-h3@m uk-navbar-item uk-margin-remove" href="#">🧔🏾‍♂️</a>
                  </div>
                </div>
                <div class="dark:uk-background-white uk-background-black dynamic-island">
                  <div class="uk-navbar-center">
                    <i class="brand-spotify uk-icon-small uk-text-white dark:uk-text-black"><span class="sr-only">Spotify</span></i>

                    <div class="uk-width-small uk-navbar-item uk-margin-remove">
                      <a class="uk-h5 dark:uk-text-black uk-text-white">Taxi - Ajebutter...</a>
                    </div>
                  </div>
                </div>
                <div class="uk-navbar-right uk-flex-1 uk-flex-right">
                  <div class="uk-navbar-item uk-position-z-index uk-visible@l">
                    <a href="#start-project" class="uk-link-expand uk-link-underline dark:uk-text-white" data-uk-toggle>
                      <span class="uk-text-bold">Let’s talk</span>
                      <i class="material-icons-round">arrow_forward</i>
                    </a>
                  </div>
                  <div class="uk-navbar-item uk-hidden@l">
                    <a href="#uni-menu-modal" class="uk-text-small" data-uk-toggle><span>[Menu]</span></a>
                    <a class="uni-menu-trigger" href="#uni-menu-modal" data-uk-toggle><span class="sr-only">Toggle Menu</span></a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <!-- Hero: Sticky menu -->
      <div class="uni-sticky-menu uk-position-top-right">
        <div data-uk-sticky="top: 100vh; animation: uk-animation-slide-top;">
          <a class="uni-menu-trigger" href="#uni-menu-modal" data-uk-toggle aria-label="Menu"></a>
        </div>
      </div>

      <router-view />
      <!-- Hero: Content -->

    </div>
    <!-- Footer / cta -->
    <footer class="uni-cta-footer uk-section-large uk-section-2xlarge@m dark:uk-background-gray-100 dark:uk-text-white">
      <div class="uk-container">
        <div class="uk-grid uk-grid-medium@m" data-uk-grid>
          <div class="uk-width-1-2 uk-width-3-12@m">
            <ul class="uk-list uk-list-large">
              <li><a href="#">studio.</a></li>
              <li><a href="#">journey {resume}.</a></li>
              <li><a href="#">contact.</a></li>
            </ul>
          </div>
          <div class="uk-width-1-2 uk-width-2-12@m">
            <ul class="uk-list uk-list-large">
              <li>
                <a href="https://github.com/Mayorwa">
                  <i class="brand-github-circle uk-icon-small"><span class="sr-only">Github</span></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/aircadian">
                  <i class="brand-twitter uk-icon-small"><span class="sr-only">Twitter</span></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mayorwa.od/">
                  <i class="brand-instagram uk-icon-small"><span class="sr-only">Instagram</span></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="uk-margin-large-top uk-margin-2xlarge-top@m">
          <div class="uk-grid" data-uk-grid>
            <div class="uk-width-1-1 uk-width-auto@m">
              <span>{{ new Date().getFullYear() }} © mayorwa.od</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "defaultLayout"
}
</script>
<style>
.dynamic-island{
  padding: 8px 15px;
  border-radius: 25px;
}
</style>
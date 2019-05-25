<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './views/Header'
import AppFooter from './views/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

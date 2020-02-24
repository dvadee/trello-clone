<template lang="pug">
  #app
    AppHeader
    AppMain
      router-view
</template>

<script>
import AppHeader from './components/layout/AppHeader'
import AppMain from './components/layout/AppMain'

export default {
  components: { AppHeader, AppMain }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-weight: 400;
  }
</style>

<template lang="pug">
  main.app-main
    .container.app-main__container
      slot
</template>

<style lang="scss">
  $parent: app-main;

  @include block($parent) {
    @include element($parent, "container") {
      margin-top: 20px;
      margin-bottom: 20px;
  
      @include min-media(md) {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }
</style>

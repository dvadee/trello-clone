<template lang="pug">
  header.app-header
    .container
      .app-header__wrapper
        router-link(to="/").app-header__home-link
          .app-header__name Trello-clone VUE
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  $parent: app-header;

  @include block($parent) {
    background-color: $secondary;
    color: $white;
    
    @include element($parent, "wrapper") {
      display: flex;
      align-items: center;
      width: 100%;
      height: 80px;
    }

    @include element($parent, "home-link") {
      @include font-size(18, 18);

      color: #fff;
      font-style: italic;
      font-weight: 600;
      text-decoration: none;
      
      @include transition();

      @include responsive-hover {
        color: $yellow;
      }
    }
  }
</style>
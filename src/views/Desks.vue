<template lang="pug">
  .desks
    .desks__wrapper
      .desks__item(v-for="item in desks")
        DeskCard(v-bind="item")
      .desks__item
        DeskCard(:isCreateNewGhost="true")
</template>

<script>
import DeskCard from '../components/desks/DeskCard'
import { mapState } from 'vuex'

export default {
  name: 'Desks',
  components: {
    DeskCard
  },
  computed: mapState({ desks: state => state.desks.all }),
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  created () {
    this.$store.dispatch('desks/getAllDesks')
  }
}
</script>

<style lang="scss">
  $parent: desks;

  @include block($parent) {
    @include element($parent, 'wrapper') {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: rem(16);

      @include multi-media-prop(grid-template-columns, 1fr, repeat(2, 1fr), repeat(4, 1fr), repeat(6, 1fr));
    }
  }
</style>
<template lang="pug">
  .desk-color-select
    .desk-color-select__wrapper
      .desk-color-select__color-tile(
        v-for="tileColor in colors"
        @click="selectColor(tileColor)"
        :class="{'desk-color-select__color-tile--active' : tileColor === color}"
        :style="{ backgroundColor: tileColor }"
      )
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    color: String
  },
  computed: {
    ...mapState('desks', ['colors'])
  },
  methods: {
    selectColor(color) {
      this.$emit('selectColor', color);
    }
  }
};
</script>

<style lang="scss">
$parent: desk-color-select;

@include block($parent) {
  @include element($parent, 'wrapper') {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }

  @include element($parent, 'color-tile') {
    border-radius: 0.25rem;
    padding-top: 100%;

    @include transition(0.1s);

    @include modifier($parent, 'active') {
      position: relative;
      box-shadow: 2px 2px 12px #000;

      &::after {
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
        background-image: url('../../assets/svg/check.svg');
        bottom: 8px;
        right: 8px;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>

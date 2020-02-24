<template lang="pug">
  .icon(:class="[typeClass]")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClass() {
      const { name } = this;
      return name ? `icon--${name}` : '';
    }
  }
};
</script>

<style lang="scss">
$parent: icon;

@include block($parent) {
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;

  @include modifier($parent, 'close') {
    width: 14px;
    height: 14px;
    background-image: url('../../assets/svg/close.svg');
  }
}
</style>

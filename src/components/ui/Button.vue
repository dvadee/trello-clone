<template lang="pug">
  button.btn(:class="[`btn--${type}`, { 'btn--disabled': disabled }]" @click="$emit('click')")
    Icon(v-if="icon" :name="icon").btn__icon
    span(v-if="text").btn__text {{ text }}
</template>

<script>
import Icon from '../ui/Icon';

export default {
  components: { Icon },
  methods: {
    click() {
      const { disabled } = this;

      if (disabled) {
        return;
      }

      this.$emit('click');
    }
  },
  props: {
    icon: String,
    type: {
      type: String,
      default: 'primary'
    },
    text: String,
    url: String,
    disabled: Boolean
  }
};
</script>

<style lang="scss">
$parent: btn;
$icon: icon;

@include block($parent) {
  display: inline-block;
  outline: none;
  padding: 0;
  background-color: transparent;
  text-decoration: none;
  text-align: center;
  border: none;
  padding-top: rem(16);
  padding-bottom: rem(16);
  padding-left: rem(60);
  padding-right: rem(60);
  font-family: 'Montserrat';
  border-radius: 0.25rem;

  @include transition();

  @include font-size(14, 16);

  @include min-media(lg) {
    cursor: pointer;
  }

  @include element($parent, 'icon') {
    width: 24px;
    height: 24px;
  }

  @include element($parent, 'text') {
    z-index: 15;
    font-weight: 400;
    font-family: inherit;
  }

  @include modifier($parent, 'icon') {
    display: flex;
    align-items: center;
    padding: 0;

    @include element($parent, 'text') {
      display: block;
      margin-left: 10px;
    }
  }

  @each $modifier, $color in $btn-colors {
    @include modifier($parent, $modifier) {
      background-color: $color;
      color: choose-contrast-color($color);

      @include responsive-hover() {
        background-color: lighten($color, 5%);
      }
    }
  }

  @include modifier($parent, 'link') {
    color: $white;
    font-weight: 500;
    padding: 0;

    @include responsive-hover {
      color: $yellow;
    }
  }

  @include modifier($parent, 'disabled') {
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  }
}
</style>

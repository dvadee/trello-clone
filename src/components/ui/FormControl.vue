<template lang="pug">
  .form-control
    input(
      :placeholder="placeholder"
      :name="name"
      :maxlength="maxlength"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ).form-control__input
    .form-control__error-message(v-if="error") {{ error }}
</template>

<script>
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    error: String,
    placeholder: String,
    maxlength: Number
  }
};
</script>

<style lang="scss">
$parent: form-control;

@include block($parent) {
  margin-bottom: 10px;
  position: relative;
  text-align: left;

  @include modifier($parent, 'valid') {
    @include element($parent, 'icon') {
      &--valid {
        opacity: 1;
      }
    }
  }

  @include element($parent, 'input') {
    background-color: transparent;
    border: 1px solid #d0dfeb;
    padding-left: rem(28);
    padding-right: rem(28);
    padding-bottom: rem(22);
    padding-top: rem(22);
    width: 100%;
    color: $secondary;
    transition-duration: 0.3s;
    border-radius: 8px;
    z-index: 5;
    font-weight: 500;

    @include font-size(14, 16);

    &::placeholder {
      color: #afc2d3;
    }

    &:hover,
    &:focus {
      border-color: #80a2d7;
      box-shadow: 0 0 1px #80a2d7;
    }

    @include modifier($parent, 'textarea') {
      resize: none;
      overflow: hidden;
      height: 120px;
    }
  }

  @include element($parent, 'error-message') {
    padding-left: 28px;
    opacity: 0;
    color: $red;
    font-weight: 500;
    max-height: 0;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    @include font-size(14, 22);
  }

  @include modifier($parent, 'error') {
    @include element($parent, 'input') {
      border-color: $red;
      color: $red;

      &::placeholder {
        color: $red;
      }
    }

    @include element($parent, 'error-message') {
      padding-top: 10px;
      opacity: 1;
      max-height: 30px;
    }
  }

  @include modifier($parent, 'dark') {
    color: $secondary;

    @include element($parent, 'placeholder') {
      color: $secondary;
    }

    @include element($parent, 'input') {
      color: $secondary;
      border-color: $secondary;
    }
  }
}
</style>

<template lang="pug">
  .modal
    .modal__dialog
      .modal__wrapper
        button.modal__close-btn(@click="$emit('close')")
          Icon(name="close").modal__close-btn-icon
        .modal__content
          slot(name="content")
        .modal__footer(v-if="hasFooterSlotData")
          .row.modal__footer-row
            slot(name="footer")
</template>

<script>
import Icon from './Icon';

export default {
  components: { Icon },
  computed: {
    hasFooterSlotData() {
      return !!this.$slots.footer;
    }
  }
};
</script>

<style lang="scss">
$parent: modal;

@include block($parent) {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: fade-out($color: #000000, $amount: 0.5);

  @include max-media(lg) {
    background-color: $white;
  }

  @include min-media(md) {
    display: block;
  }

  @include element($parent, 'dialog') {
    display: flex;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));
    max-width: 335px;
    width: auto;
    margin: 0.5rem auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    z-index: 100500;

    &::before {
      display: block;
      height: calc(100vh - (0.5rem * 2));
      content: '';
    }

    @include min-media(sm) {
      max-width: 500px;
    }

    @include min-media(md) {
      padding-right: 1rem;
      padding-left: 1rem;
      max-width: 653px;
      margin: 1.75rem auto;
      min-height: calc(100% - (1.75rem * 2));

      &::before {
        height: calc(100vh - (1.75rem * 2));
      }
    }

    @include max-media(lg) {
      position: relative;
    }
  }

  @include element($parent, 'wrapper') {
    background-color: $white;
    color: $secondary;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-clip: padding-box;
    text-align: center;

    @include min-media(md) {
      padding-top: 40px;
      padding-bottom: 40px;
      padding-left: 40px;
      padding-right: 40px;
    }

    @include min-media(lg) {
      position: relative;
      padding-top: 70px;
      padding-bottom: 32px;
      padding-right: 32px;
      padding-left: 32px;
    }
  }

  @include element($parent, 'footer') {
    width: 100%;
    padding-top: 24px;
  }

  @include element($parent, 'footer-row') {
    justify-content: flex-end;
  }

  @include element($parent, 'close-btn') {
    position: absolute;
    background-color: transparent;
    top: 32px;
    right: 32px;
    width: 18px;
    height: 18px;
    padding: 0;
    z-index: 2150;
    border: none;

    @include min-media(lg) {
      cursor: pointer;
      transition-duration: 0.3s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>

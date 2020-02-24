<template lang="pug">
  .desk-card(
    @click="onCardClick"
    :class="{ 'desk-card--create-new': isCreateNewGhost }"
    :style="{ backgroundColor: bgColor }"
  )
    .desk-card__fade
    .desk-card__b-content
      .desk-card__title {{ isCreateNewGhost ? 'Создать' : name }}
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    onCardClick() {
      const { id } = this;

      this.$emit('click', id);
    }
  },
  computed: {
    ...mapState({ colors: state => state.desks.colors }),
    bgColor() {
      const { colorIndex, colors } = this;
      const bgColor = colors[colorIndex];

      return bgColor || colors[0];
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    colorIndex: {
      type: Number,
      default: 0
    },
    isCreateNewGhost: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
$parent: desk-card;

@include block($parent) {
  min-width: 96px;
  height: 116px;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  @include element($parent, 'fade') {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $secondary;
    opacity: 0;
    z-index: 25;

    @include transition();
  }

  @include element($parent, 'b-content') {
    padding: 16px;
    position: relative;
    z-index: 50;
  }

  @include element($parent, 'title') {
    color: $white;
  }

  @include modifier($parent, 'create-new') {
    @include element($parent, 'b-content') {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    @include element($parent, 'title') {
      font-weight: 300;
    }
  }

  @include responsive-hover {
    @include element($parent, 'fade') {
      opacity: 0.2;
    }
  }
}
</style>

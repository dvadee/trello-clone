<template lang="pug">
  .desk-card(
    @click="onCardClick"
    :class="{ 'desk-card--create-new': isCreateNewGhost }"
    :style="{ backgroundColor: color }"
  )
    .desk-card__fade
    .desk-card__b-content
      .desk-card__title {{ isCreateNewGhost ? 'Создать' : name }}
</template>

<script>
export default {
  methods: {
    onCardClick() {
      const { id } = this;

      this.$emit('cardClick', id);
    }
  },
  props: {
    id: {
      type: Number
    },
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#fff'
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
    background-color: $secondary !important;

    @include element($parent, 'b-content') {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    @include element($parent, 'title') {
      font-weight: 300;

      @include transition;
    }

    @include responsive-hover {
      @include element($parent, 'title') {
        color: $warning;
      }
    }
  }

  @include responsive-hover {
    @include element($parent, 'fade') {
      opacity: 0.2;
    }
  }
}
</style>

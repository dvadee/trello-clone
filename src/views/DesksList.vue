<template lang="pug">
  .desks
    .desks__wrapper
      .desks__item(v-for="item in desks")
        DeskCard(v-bind="item" @cardClick="routeToDesk")
      .desks__item
        DeskCard(:isCreateNewGhost="true" @cardClick="showAddNewDeskModal")
    DeskCreateModal(
      v-if="modalShow"
      @createDesk="createNewDesk"
      @close="modalShow = false"
    )
</template>

<script>
import { mapActions } from 'vuex';
import DeskCard from '../components/desks/DeskCard';
import DeskCreateModal from '../components/desks/DeskCreateModal';
import { mapState } from 'vuex';

export default {
  name: 'Desks',
  components: {
    DeskCard,
    DeskCreateModal
  },
  created() {
    this.$store.dispatch('desks/getAllDesks');
  },
  data: () => ({
    modalShow: false
  }),
  computed: mapState({ desks: state => state.desks.all }),
  methods: {
    ...mapActions('desks', ['createDesk']),
    routeToDesk(id) {
      this.$router.push({
        name: 'Desk',
        params: { id }
      });
    },
    showAddNewDeskModal() {
      this.modalShow = true;
    },
    createNewDesk(desk) {
      this.createDesk(desk);

      this.modalShow = false;
    }
  }
};
</script>

<style lang="scss">
$parent: desks;

@include block($parent) {
  @include element($parent, 'wrapper') {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: rem(16);

    @include multi-media-prop(
      grid-template-columns,
      1fr,
      repeat(2, 1fr),
      repeat(4, 1fr),
      repeat(6, 1fr)
    );
  }
}
</style>

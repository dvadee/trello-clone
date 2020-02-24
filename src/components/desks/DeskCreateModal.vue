<template lang="pug">
  Modal.desk-add-modal(@close="close")
    template(v-slot:content)
      .desk-add-modal__form
        .desk-add-modal__field
          FormControl(
            v-model="name"
            type="text",
            placeholder="Введите название доски"
          )
        .desk-add-modal__field
          DeskColorSelect(
            :color="color"
            @selectColor="selectColor"
          )
    template(v-slot:footer)
      .col
        Button(text="Создать" type="success" @click="createDesk" :disabled="!name || !color")
      .col
        Button(text="Отмена" type="light" @click="close")
</template>

<script>
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import FormControl from '../ui/FormControl';
import DeskColorSelect from './DeskColorSelect';

export default {
  components: {
    Modal,
    Button,
    FormControl,
    DeskColorSelect
  },
  data: () => ({
    name: '',
    color: ''
  }),
  methods: {
    createDesk() {
      const { name, color } = this;

      if (!name) {
        return;
      }

      this.$emit('createDesk', { name, color });
    },
    close() {
      this.$emit('close');
    },
    selectColor(color) {
      this.color = color;
    }
  }
};
</script>

<style lang="scss">
$parent: desk-add-modal;

@include block($parent) {
  @include element($parent, 'field') {
    margin-bottom: 15px;
  }
}
</style>

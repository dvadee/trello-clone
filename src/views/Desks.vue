<template lang="pug">
  .container
    .row
      .col
        button(@click="clickTest") test
</template>

<script>
//import testApi from '@/services/test'

export default {
  name: 'Desks',
  components: {},
  methods: {
    clickTest() {
      //const res = testApi.fetch();
    }
  }
}
</script>

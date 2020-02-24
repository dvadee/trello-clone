<template lang="pug">
  .desk {{ id }}
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  }
};
</script>

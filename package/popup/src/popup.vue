<template>
  <div class="popup">
    <div class="context">
      popup
    </div>
  </div>
</template>

<script>
export default {
  name: 'etuPopup',
  data() {
    return {
      show: false,
      msg: '',
      cb: null,
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  beforeDestroy () {
    document.body.removeChild(this.$el)
  },
}
</script>

<style lang="scss" scoped>
.popup {
  .context {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>

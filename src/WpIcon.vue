<template>
  <div>
    <svg class="icon" :class="iconname" v-if="iconname">
      <use :xlink:href="`#wp-${iconname}`"></use>
    </svg>
  </div>
</template>

<script>

export default {
  props: {
    iconname: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang='scss' scoped>
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .icon {
    height: 1em;
    width: 1em;
    font-size: var(--button-size);
  }
  .icon.Loading {
    animation: spin 0.5s infinite linear;
  }
</style>
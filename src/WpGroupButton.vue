<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.button-group {
  vertical-align: middle;
  display: inline-flex;
  > .wp-button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover {
      position: relative; // 没有脱离文档流，但z-index会提升
    }
  }
}
</style>
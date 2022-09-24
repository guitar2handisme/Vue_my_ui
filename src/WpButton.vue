<template>
    <button class="wp-button" :class="position" @click="$emit('click')">
      <!-- 其它icon -->
      <wp-icon :iconname="iconname" class="icon_wp" v-if="!loading && iconname"></wp-icon>
      <!-- loading icon -->
      <wp-icon iconname="Loading" class="icon_wp" v-else-if="loading"></wp-icon>
      <div class="slot">
        <slot></slot>
      </div>
    </button>
</template>

<script>
export default {
  props: {
    iconname: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "left",
      validator(value) {
        if (value !== 'left' && value !== 'right') {
          return false
        } else {
          return true
        }
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.wp-button {
  vertical-align: middle;
  height: var(--button-height);
  font-size: var(--button-size);
  padding: 0 0.8em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  align-items: center;
  &:hover {
    border-color: var(--border-hover-color);

  }
  &:active {
    background-color: var(--button-active-bg);
  }
  .icon_wp {
    height: 1em;
    width: 1em;
    font-size: var(--button-size);
  }
}
.wp-button.left {
  .icon_wp {
    order: 1;
    margin-right: 0.1em;
  }

  .slot {
    order: 2;
  }
}
.wp-button.right {
  .icon_wp {
    order: 2;
    margin-left: 0.1em;
  }

  .slot {
    order: 1;
  }
}
</style>
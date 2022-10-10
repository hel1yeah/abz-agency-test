<template>
  <button :class="['app-button', isButtonDisabledClass]" :disabled="isButtonDisabled">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const isButtonDisabledClass = computed(() => {
  return {
    disabled: props.disabled,
  };
});

const isButtonDisabled = computed(() => {
  return props.disabled;
});
</script>

<style scoped lang="scss">
.app-button {
  background: $primary-color;
  color: $black-color;
  height: 34px;
  border-radius: 80px;
  border: none;
  min-width: 100px;
  padding: 0 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  &.disabled {
    background: {
      color: $disabled-color;
    }
    color: $white;
  }
}
</style>

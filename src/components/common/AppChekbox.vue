<template>
  <label class="check">
    <input type="checkbox" class="check__input" @change="onChecked" :checked="checked" />
    <span class="check__box"></span>
    <slot></slot>
  </label>
</template>

<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emits = defineEmits(['onChecked']);
function onChecked() {
  emits('onChecked');
}
</script>

<style lang="scss">
.check {
  position: relative;
  padding: 0 0 0 32px;
  user-select: none;
  &__input {
    appearance: none;
    position: absolute;
    &:checked + .check__box {
      background: radial-gradient(
        circle at 50% 50%,
        rgba(0, 188, 212, 1) 40%,
        rgba(255, 255, 0, 0) 40%
      );
      border: 1px solid $secondary-color;
    }
    &:focus + .check__box {
      border: 1px solid $black-color;
    }
    &:checked:focus + .check__box {
      border: 1px solid $black-color;
    }
  }
  &__box {
    position: absolute;
    width: 20px;
    height: 20px;
    background: $background-color;
    border: 1px solid $input-border-color;
    border-radius: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
  }
}
</style>

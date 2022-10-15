<template>
  <div class="tooltip-wrapper">
    <div class="tooltip-inner" @mouseenter="toggle" @mouseleave="toggle">
      <slot></slot>
    </div>
    <div v-show="isShow" class="tooltip">
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'tooltip',
  },
});

const isShow = ref(false);

function toggle() {
  isShow.value = !isShow.value;
}
</script>

<style scoped lang="scss">
.tooltip-wrapper {
  display: inline-block;
  position: relative;
  width: 100%;
}
.tooltip-inner {
  display: flex;
  cursor: pointer;
  justify-content: center;
}
.tooltip {
  white-space: nowrap;
  position: absolute;
  bottom: -37px;
  left: 20px;
  padding: 4px 16px;
  color: $white;
  background: $black-color;
  border-radius: 4px;
}
</style>

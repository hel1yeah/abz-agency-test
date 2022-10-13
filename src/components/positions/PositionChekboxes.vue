<template>
  <div class="position-chekboxes">
    <span>Select your position</span>
    <div class="position-chekboxes__inner">
      <app-chekbox
        v-for="position in positions"
        :key="position.id"
        :checked="isChecked(position.id)"
        @onChecked="onChecked(position.id)"
      >
        {{ position.name }}
      </app-chekbox>
    </div>
  </div>
</template>

<script setup>
import { usePositionsStore } from '@/stores/positions.js';
import AppChekbox from '@/components/common/AppChekbox.vue';
import { ref } from 'vue';

const store = usePositionsStore();
const emits = defineEmits(['setPositionId']);
const cheked = ref(1);
emits('setPositionId', cheked.value);
const positions = store.arrPositions;

store.getPositions();

const onChecked = (id) => {
  cheked.value = id;
  // emits('setPositionId',  cheked.value);
  emits('setPositionId', {
    value: id,
    success: true,
    type: 'position_id',
  });
};

function isChecked(id) {
  if (cheked.value === id) return true;
  return false;
}
</script>

<style scoped lang="scss">
.position-chekboxes {
  margin: 43px auto 400px;
  width: 100%;
  max-width: 380px;
  @include w768 {
    padding: 0 16px;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 11px 0 0 0;
    gap: 7px;
  }
}
</style>

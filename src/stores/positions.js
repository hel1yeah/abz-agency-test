import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { getPositionsAxios } from '@/api/apiPositions.js';
import { RESPONSE_STATUS } from '@/common/constants.js';

export const usePositionsStore = defineStore('positions', () => {
  const positions = ref(null);
  const error = ref(null);
  const loader = ref(false);

  async function getPositions() {
    positions.value = null;
    error.value = null;
    loader.value = true;
    try {
      const response = await getPositionsAxios();
      if (response.status === RESPONSE_STATUS[200]) {
        positions.value = response?.data?.positions;
        error.value = null;
        loader.value = false;
      }
    } catch (e) {
      positions.value = null;
      error.value = e;
      loader.value = false;
    }
  }

  const arrPositions = computed(() => {
    return positions;
  });

  return {
    getPositions,
    arrPositions,
  };
});

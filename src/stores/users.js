import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { getUsersAxios } from '@/api/apiUsers.js';
import { RESPONSE_STATUS } from '@/common/constants.js';

export const useUserStore = defineStore('users', () => {
  const users = ref(null);
  const error = ref(null);
  const loader = ref(false);
  const total_pages = ref(1);

  async function getUsers(page, count) {
    error.value = null;
    loader.value = true;
    total_pages.value = 0;
    try {
      const response = await getUsersAxios(page, count);
      if ((response.status = RESPONSE_STATUS[200])) {
        if (users.value === null) {
          users.value = response?.data?.users;
        } else {
          response?.data?.users.forEach((user) => {
            users.value.push(user);
          });
        }

        error.value = null;
        loader.value = false;
        total_pages.value = response?.data?.total_pages;
      }
    } catch (e) {
      users.value = null;
      error.value = e;
      total_pages.value = 0;
      loader.value = false;
    }
  }

  const arrUsers = computed(() => {
    return users;
  });
  const getterTotalPages = computed(() => {
    return total_pages;
  });

  return { getUsers, users, loader, total_pages, arrUsers, getterTotalPages };
});

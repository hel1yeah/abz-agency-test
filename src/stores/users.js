import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { getUsersAxios } from '@/api/apiUsers.js';
import { RESPONSE_STATUS, DEFAULT_REQUEST_PAGES } from '@/common/constants.js';

export const useUserStore = defineStore('users', () => {
  const users = ref(null);
  const error = ref(null);
  const loader = ref(false);
  const total_pages = ref(1);

  async function getUsers(page = DEFAULT_REQUEST_PAGES.PAGE, count = DEFAULT_REQUEST_PAGES.COUNT) {
    error.value = null;
    loader.value = true;
    total_pages.value = 0;
    console.log('1 users.value', users.value);
    try {
      const response = await getUsersAxios(page, count);
      if (response.status === RESPONSE_STATUS[200]) {
        console.log('2 users.value', users.value);
        if (users.value === null) {
          console.log('3 users.value', users.value);
          users.value = response?.data?.users;
        } else {
          console.log('4 users.value', users.value);
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
      error.value = e?.response?.data?.message;
      total_pages.value = 0;
      loader.value = false;
    }
  }

  function usersToNull() {
    users.value = null;
  }

  const arrUsers = computed(() => {
    return users;
  });
  const getterTotalPages = computed(() => {
    return total_pages;
  });
  const getLoader = computed(() => {
    return loader.value;
  });

  return { getUsers, usersToNull, users, getLoader, total_pages, arrUsers, getterTotalPages };
});

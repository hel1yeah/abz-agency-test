import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { getTokenAxios } from '@/api/apiToken.js';
import { postRegistrationUserAxios } from '@/api/apiRegistration.js';
import { DEFAULT_REQUEST_PAGES, RESPONSE_STATUS } from '@/common/constants.js';
import { useUserStore } from '@/stores/users.js';

export const useFormStore = defineStore('form', () => {
  const token = ref('');
  const error = ref(null);
  const loader = ref(false);
  const showModal = ref(false);

  async function getToken() {
    token.value = null;
    try {
      const response = await getTokenAxios();
      if (response.status === RESPONSE_STATUS[200]) {
        token.value = response?.data?.token;
      }
    } catch (e) {
      console.log('getToken', e);
    }
  }
  async function registrationUser(form) {
    const data = new FormData();
    for (const formKey in form) {
      data.set(formKey, form[formKey]);
    }
    error.value = null;
    loader.value = true;
    try {
      const response = await postRegistrationUserAxios(token.value, data);
      if (response.status === RESPONSE_STATUS[201]) {
        showModal.value = true;
        const store = useUserStore();
        store.usersToNull();
        store.getUsers(DEFAULT_REQUEST_PAGES.PAGE, DEFAULT_REQUEST_PAGES.COUNT);
      }
    } catch (e) {
      error.value = e?.response?.data?.message;
      loader.value = false;
      clearError();
    }
  }

  function clearError() {
    setTimeout(() => {
      error.value = null;
    }, 10000);
  }

  function closeModal() {
    showModal.value = false;
  }

  const compToken = computed(() => {
    return token.value;
  });
  const getError = computed(() => error.value);

  const getShowModal = computed(() => {
    return showModal.value;
  });

  return {
    getToken,
    registrationUser,
    compToken,
    getError,
    getShowModal,
    closeModal,
  };
});

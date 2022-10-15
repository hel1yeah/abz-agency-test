<template>
  <div class="the-working-form" id="the-working-form">
    <h2 class="the-working-form__header">Working with POST request</h2>
    <div class="the-working-form__inner">
      <app-input :type="'name'" :label="'Your name'" @setInput="setForm" />
      <app-input :type="'email'" :label="'Email'" @setInput="setForm" />
      <app-input
        :type="'phone'"
        :label="'Phone'"
        @setInput="setForm"
        :description="'+38 (XXX) XXX - XX - XX'"
      />
    </div>
    <position-chekboxes @setPositionId="setForm"></position-chekboxes>
    <app-file-input @setFile="setPhoto"></app-file-input>
    <app-button class="the-working-form__button" @click="registrationUser">Sing Up</app-button>
  </div>
</template>

<script setup>
import AppInput from '@/components/common/AppInput.vue';
import PositionChekboxes from '@/components/positions/PositionChekboxes.vue';
import AppFileInput from '@/components/common/AppFileInput.vue';
import AppButton from '@/components/common/AppButton.vue';
import { reactive } from 'vue';
import { useFormStore } from '@/stores/form.js';

const store = useFormStore();
function setForm(e) {
  form[e.type] = e.value;
}

function setPhoto(e) {
  form.photo = e;
}

function registrationUser() {
  store.registrationUser(form);
}

const form = reactive({
  name: '',
  email: '',
  phone: '',
  position_id: 1,
  photo: '',
});

store.getToken();
</script>

<style scoped lang="scss">
.the-working-form {
  margin: 100px auto 0;
  &__header {
    text-align: center;
  }
  &__inner {
    max-width: 380px;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @include w768 {
      padding: 0 16px;
    }
  }
  &__button {
    margin: 50px auto 0;
  }
}
</style>

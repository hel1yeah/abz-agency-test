<template>
  <div class="the-working-form">
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
  </div>
</template>

<script setup>
import AppInput from '@/components/common/AppInput.vue';
import PositionChekboxes from '@/components/positions/PositionChekboxes.vue';
import { reactive } from 'vue';

function setForm(e) {
  form[e.type] = e.value;
  console.log(form)
}

const form = reactive({
  name: '',
  email: '',
  phone: '',
  position_id: 1,
  photo: '',
});
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
}
</style>

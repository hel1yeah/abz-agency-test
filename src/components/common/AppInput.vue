<template>
  <div :class="['app-input', classes]">
    <input v-model.trim="value" type="text" @input="changeInput" @focus="changeInput" />
    <label>{{ label }}</label>
    <span v-if="isDescription">{{ description }}</span>
    <span v-else> {{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  type: {
    // name email phone
    type: String,
    required: true,
    default: '',
  },
  label: {
    type: String,
    required: true,
    default: '',
  },
  description: {
    type: String,
    required: false,
    default: '',
  },
});

const emits = defineEmits(['setInput']);

const value = ref('');
const errorMessage = ref('');
const success = ref(false);
const successValue = ref('');
const type = ref('');

const isDescription = computed(() => {
  if (!errorMessage.value && props.description) return true;
  return false;
});

const classes = computed(() => {
  return { active: value.value, error: errorMessage.value.length > 0 };
});

function changeInput() {
  if (!value.value) {
    errorMessage.value = 'this field is required';
    return;
  }
  if (props.type === 'name') {
    if (!(value.value.length > 2 && value.value.length < 60)) {
      setError('min 2 max 60 length');
      return;
    }
    setSuccess();
    return;
  }
  if (props.type === 'email') {
    const reg =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const regExp = new RegExp(reg);
    const isTest = regExp.test(value.value);
    if (!isTest) {
      setError('Not valid email');
      return;
    }
    setSuccess();
    return;
  }
  if (props.type === 'phone') {
    const reg = /^[\+]{0,1}380([0-9]{9})$/;
    const regExp = new RegExp(reg);
    const isTest = regExp.test(value.value);
    if (!isTest) {
      setError('Not valid phone +38 (XXX) XXX - XX - XX');
      return;
    }
    setSuccess();
    return;
  }
  setError();
  return;
}

function setSuccess() {
  errorMessage.value = '';
  success.value = true;
  successValue.value = value.value;

  emits('setInput', {
    value: successValue.value,
    success: success.value,
    type: props.type,
  });
}

function setError(message = '') {
  errorMessage.value = message;
  success.value = false;

  emits('setInput', {
    value: '',
    success: success.value,
    type: props.type,
  });
}
</script>

<style scoped lang="scss">
.app-input {
  position: relative;
}
.app-input label {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: $placegolder-color;
  pointer-events: none;
  transition: 0.5s;
  padding: 0 4px;
}

.app-input.error label {
  color: $error-color;
}

.app-input input {
  width: 100%;
  max-height: 54px;
  color: $black-color;
  border: 1px solid $input-border-color;
  background-color: $background-color;
  padding: 14px;
  border-radius: 4px;
}
.app-input.error input {
  border: 1px solid $error-color;
}
.app-input input:focus {
  border: 1px solid $input-border-color;
  outline: transparent;
}
.app-input.error input:focus {
  border: 1px solid $error-color;
}

.app-input input:focus ~ label,
.app-input.active > label {
  top: -7px;
  left: 14px;
  transform: translateY(0);
  background: $background-color;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
.app-input > span {
  position: absolute;
  font-size: 12px;
  line-height: 14px;
  bottom: -18px;
  left: 13px;
  color: $placegolder-color;
}
.app-input.error > span {
  color: $error-color;
}
</style>

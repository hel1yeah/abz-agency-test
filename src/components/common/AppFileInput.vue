<template>
  <div class="file-input">
    <label for="InputTypeFile" :class="['file-input__inner', errorClass]">
      <div class="file-input__inner--button">Upload</div>
      <div class="file-input__inner--info">Upload your photo</div>
      <span class="file-input__inner--error">{{ error }}</span>
    </label>
    <input
      type="file"
      class="file-input__hiden"
      @change="chekFile"
      accept=".jpg, .jpeg"
      name="InputTypeFile"
      id="InputTypeFile"
    />
  </div>
</template>

<script setup>
import byteSize from 'bytes';
import { computed, ref } from 'vue';

const isError = ref(false);
const error = ref('');

const errorClass = computed(() => {
  return {
    error: isError.value,
  };
});

const emits = defineEmits(['setFile']);

function restFile(e) {
  const file = e.target.files[0];
  const fileType = file.type;
  const strSize = byteSize(file.size, { unitSeparator: ' ' });
  const arrSize = strSize.split(' ');
  const sizeValue = Number(arrSize[0]);
  const sizeUnit = arrSize[1];

  return {
    file,
    fileType,
    sizeUnit,
    sizeValue,
  };
}

function setError(str) {
  isError.value = true;
  error.value = str;

  emits('setFile', {
    value: '',
    success: false,
    type: 'photo',
  });

  clearError();
}

function setSuccess(file) {
  isError.value = false;
  error.value = '';
  emits('setFile', {
    value: file,
    success: true,
    type: 'photo',
  });
}

function clearError() {
  setTimeout(() => {
    isError.value = false;
    error.value = '';
  }, 10000);
}

function chekFile(e) {
  const { file, fileType, sizeUnit, sizeValue } = restFile(e);

  if (!fileType.match('image') && !fileType.match('jpeg')) {
    setError('The photo format must be jpeg/jpg type');
    return;
  }
  if (sizeUnit === 'MB' && sizeValue > 5) {
    setError('The photo size must not be greater than 5 Mb.');
    return;
  }
  if (sizeUnit === 'GB' && sizeUnit === 'TB' && sizeUnit === 'PB') {
    setError('The photo size must not be greater than 5 Mb.');
    return;
  }
  setSuccess(file);
  return;
}
</script>

<style scoped lang="scss">
.file-input {
  max-width: 380px;
  width: 100%;
  margin: 47px auto 0;
  @include w768 {
    padding: 0px 16px;
  }

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &--button {
      display: grid;
      place-items: center;
      border-radius: 4px 0px 0px 4px;
      border: 1px solid $black-color;
      height: 54px;
      min-width: 83px;
    }
    &--info {
      color: $placegolder-color;
      width: 100%;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 0 0 16px;
      border-top: 1px solid $input-border-color;
      border-right: 1px solid $input-border-color;
      border-bottom: 1px solid $input-border-color;
      border-left: 0px solid $input-border-color;
      border-radius: 0px 4px 4px 0px;
    }
    &--error {
      position: absolute;
      font-size: 12px;
      line-height: 14px;
      bottom: -18px;
      left: 13px;
      color: $placegolder-color;
    }
  }
  &__inner.error {
    & .file-input__inner--button {
      border: 1px solid $error-color;
      color: $error-color;
    }
    & .file-input__inner--info {
      border-top: 1px solid $error-color;
      border-right: 1px solid $error-color;
      border-bottom: 1px solid $error-color;
      border-left: 0px solid $error-color;
      color: $error-color;
    }
    & .file-input__inner--error {
      color: $error-color;
    }
  }

  &__hiden {
    display: none;
  }
}
</style>

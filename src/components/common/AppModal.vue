<template>
  <Transition>
    <div v-if="store.getShowModal" class="modal">
      <div class="modal__overlay" @click.stop="closeModal"></div>
      <div class="modal__content">
        <img
          class="modal__close"
          src="@/assets/images/close.svg"
          alt="close"
          @click.stop="closeModal"
        />
        <h1 class="modal__header">User successfully registered</h1>
        <img class="modal__img" src="@/assets/images/success-image.svg" alt="Success" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useFormStore } from '@/stores/form.js';

const store = useFormStore();

function closeModal() {
  store.closeModal();
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 1;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 0;
  }
  &__content {
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    max-width: 700px;
    position: relative;
    height: auto;
    background-color: $background-color;
    border-radius: 10px;
    padding: 40px 90px;
    @include w1024 {
      gap: 30px;
      padding: 30px 60px;
    }
    @include w768 {
      height: 100vh;
      border-radius: 0px;
    }
  }
  &__close {
    position: absolute;
    padding: 10px;
    right: 20px;
    top: 20px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s linear;
    &:hover {
      opacity: 1;
    }
  }

  &__header {
    text-align: center;
  }
  &__img {
    width: 100%;
    max-width: 328px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

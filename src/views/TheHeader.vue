<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <img class="header__img" src="@/assets/images/logo.svg" alt="logo" />
        <div class="header__buttons">
          <app-button v-scroll-to="'#the-working'">Users</app-button>
          <app-button v-scroll-to="'#the-working-form'">Sign up</app-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AppButton from '@/components/common/AppButton.vue';
</script>

<style scoped lang="scss">
.header {
  padding: 13px 0;
  background: {
    color: $white;
  }
  @include w1024 {
    padding: 13px 60px;
  }
  @include w768 {
    padding: 13px 32px;
  }
  @include w360 {
    padding: 13px 7px;
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include w360 {
      gap: 14px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
</style>

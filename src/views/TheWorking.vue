<template>
  <div class="the-working">
    <h1 class="the-working__head">Working with GET request</h1>
    <div class="container">
      <div class="the-working__cards">
        <working-card v-for="(user, idx) in arrUsers" :key="idx" :user="user" />
      </div>
      <app-button class="the-working__button" @click="onShowMore" :disabled="disabled()">
        Show more
      </app-button>
    </div>
  </div>
</template>

<script setup>
import WorkingCard from '@/components/working/WorkingCard.vue';
import { useUserStore } from '@/stores/users';
import { ref } from 'vue';
import AppButton from '@/components/common/AppButton.vue';

const page = ref(1);
const count = ref(6);

const storeUser = useUserStore();

const loader = storeUser.loader;
const total_pages = storeUser.total_pages;
const arrUsers = storeUser.arrUsers;
const getterTotalPages = storeUser.getterTotalPages;

storeUser.getUsers(page.value, count.value);

const onShowMore = () => {
  page.value++;

  if (disabled()) {
    return;
  }
  storeUser.getUsers(page.value, count.value);
};

const disabled = () => {
  return page.value >= storeUser.getterTotalPages.value;
};
</script>

<style scoped lang="scss">
.the-working {
  margin: 140px 0 0 0;
  &__head {
    text-align: center;
    padding: 0 20px;
  }
  &__cards {
    padding: 50px 0 0 0;
    display: grid;
    gap: 29px;
    grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
    @include w1024 {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      padding: 50px 60px 0;
    }
    @include w768 {
      padding: 50px 32px 0;
    }
    @include w360 {
      padding: 50px 16px 0;
    }
  }
  &__button {
    margin: 50px auto 0;
  }
}
</style>

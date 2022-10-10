<template>
  <div class="working-card">
    <img
      v-if="!imgError"
      class="working-card__img"
      ref="refImg"
      :src="props.user.photo"
      :alt="props.user.name"
    />
    <img
      v-else
      class="working-card__img"
      src="@/assets/images/photo-cover.svg"
      :alt="props.user.name"
    />
    <span class="working-card__text working-card__name">{{ props.user.name }} </span>
    <span class="working-card__text working-card__position">{{ props.user.position }}</span>
    <span class="working-card__text working-card__email">{{ props.user.email }}</span>
    <span class="working-card__text working-card__number">{{ props.user.phone }}</span>
  </div>
</template>

<script setup>
import { nextTick, ref, onDeactivated } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const imgError = ref(false);

const refImg = ref(null);

nextTick(() => {
  refImg.value.addEventListener('error', () => {
    imgError.value = true;
  });
});

onDeactivated(() => {
  refImg.value.removeEventListener('error', () => {
    imgError.value = true;
  });
});
</script>

<style scoped lang="scss">
.working-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  &__img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }
  &__text {
    max-width: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &__name {
    margin: 20px 0 0 0;
  }
  &__position {
    margin: 20px 0 0 0;
  }
  &__email {
  }
  &__number {
  }
}
</style>

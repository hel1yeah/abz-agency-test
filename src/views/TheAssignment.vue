<template>
  <div class="container">
    <div class="the-assignment">
      <div class="the-assignment__text">
        <h1 class="the-assignment__text-head">Test assignment for front-end developer</h1>
        <p class="the-assignment__text-descr">
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </p>
        <app-button class="the-assignment__button">Sign up</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue';
export default {
  components: { AppButton },
};
</script>

<style scoped lang="scss">
.the-assignment {
  z-index: 0;
  position: relative;
  background: #00bdd3;
  display: grid;
  place-items: center;
  padding: 164px 0 163px;
  background: {
    image: url('@/assets/images/bg-assignment.jpeg');
    size: cover;
    position: center center;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  @include w768{
    padding: 89px 15px 88px;
  }
  @include w360 {
    padding: 40px 15px 71px;
  }
  &__text {
    z-index: 1;
    max-width: 380px;
    text-align: center;
    font-family: 'Nunito';
    color: $white;
    &-head {
    }
    &-descr {
      margin-top: 21px;
      font-size: 16px;
      line-height: 26px;
    }
  }
  &__button {
    margin: 32px auto 0;
  }
}
</style>

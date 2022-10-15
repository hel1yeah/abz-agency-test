<template>
  <img class="loader" src="@/assets/images/loader.svg" alt="loader" />
</template>

<script></script>

<style scoped lang="scss">
.loader {
  width: 48px;
  height: 48px;
  animation: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

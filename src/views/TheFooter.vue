<template>
  <div class="container">
    <footer class="footer">
      <div class="footer__descr">© abz.agency specially for the test task</div>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid $input-border-color;
  padding: 17px 0;
  margin: 100px 0 0 0;
  width: 100%;
  max-width: 1170px;
  @include w1024 {
    padding: 17px 16px;
  }
  &__descr {
  }
}
</style>

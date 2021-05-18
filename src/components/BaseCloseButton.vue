<template>
  <button v-wave type="button" class="close"></button>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseCloseButton",
});
</script>

<style lang="scss">
.close {
  position: relative;
  display: inline-flex;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>

<script lang="ts">
import hslaRegex from "hsla-regex";
import changeHslaColorLightness from "@/util/changeHslaColor";

import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseButton",
  props: {
    backgroundColor: {
      type: String,
      default: "hsla(210, 52%, 34%, 1)",
      validator: (value) => hslaRegex({ exact: true }).test(value),
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    fontSize: {
      type: String,
      default: "16px",
    },
    borderRadius: {
      type: String,
      default: "0px",
    },
    boxShadow: {
      type: String,
      default: "0.1em 0.1em 0.2em rgba(0, 0, 0, 0.29)",
    },
  },
  computed: {
    backgroundColorLighten: (vm): string => {
      const lightnessDifference = 10;
      return changeHslaColorLightness(vm.backgroundColor, lightnessDifference);
    },
  },
});
</script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss">
.button {
  color: v-bind(color);
  font-size: v-bind(fontSize);
  box-shadow: v-bind(boxShadow);
  border-radius: v-bind(borderRadius);
  background-color: v-bind(backgroundColor);

  border: none;
  cursor: pointer;
  transition: 0.2s;
  user-select: none;
  padding: 0.4em 1em;
  letter-spacing: 0.033em;

  &:hover {
    box-shadow: none;
    background-color: v-bind(backgroundColorLighten);
  }
}
</style>

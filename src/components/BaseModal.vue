<script lang="ts">
import { defineComponent } from "vue";
import afterLittleDelay from "@/util/afterLittleDelay";
import BaseCloseButton from "@/components/BaseCloseButton";

export default defineComponent({
  name: "BaseModal",
  components: { BaseCloseButton },
  props: {
    maxWidth: {
      type: String,
      default: "500px",
    },
    title: {
      type: String,
      required: true,
    },
    isModalOpened: {
      type: Boolean,
      required: true,
    },
  },
  data: (vm) => ({
    isOpened: vm.isModalOpened,
  }),
  methods: {
    setPageScrollable(isScrollable: boolean): void {
      if (isScrollable) {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      } else {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
      }
    },
    setModalVisibility(state: boolean): void {
      this.isOpened = state;
      afterLittleDelay(() => this.setPageScrollable(!state));
    },
  },
});
</script>

<template>
  <transition appear name="modal">
    <div
      v-if="isOpened"
      class="modal"
      @touchstart.passive="setModalVisibility(false)"
      @mousedown.left="setModalVisibility(false)"
    >
      <dialog
        :style="{ maxWidth }"
        :open="isOpened"
        class="modal__content"
        @mousedown.stop
        @touchstart.stop.passive
      >
        <div class="modal__headline">
          <h2 class="modal__title" v-text="title"></h2>
          <div class="modal__options">
            <div class="modal__option">
              <BaseCloseButton @click="setModalVisibility(false)" />
            </div>
          </div>
        </div>
        <slot />
      </dialog>
    </div>
  </transition>
</template>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 12px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 1;
  transition: 0.28s;
  pointer-events: all;
  background-color: rgba(0, 0, 0, 0.32);

  @media (max-width: 500px) {
    padding: 0;
  }
}

.modal__content {
  transition: 0.28s;
  padding: 20px;
  border-radius: 4px;
  transform: translateY(0);
  background-color: white;
  position: relative;
  margin: 0 10px;
  width: 100%;
  box-shadow: 0px 0 15px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  max-height: calc(100% - 240px);
  overflow-y: auto;
  border: none;

  @media (max-width: 500px) {
    padding: 20px 10px;
    margin: 0px;
    border-radius: 0;
    max-height: 100%;
    height: 100%;
    overflow-y: auto;
  }
}

.modal-leave-active,
.modal-enter-active {
  opacity: 0;
  & .modal__content {
    transform: translateY(-20px);
    pointer-events: none;
  }
}

.modal__headline {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.modal__title {
  margin: 0;
}

.modal__options {
  display: flex;
}

.modal__option + .modal__option {
  margin-left: 8px;
}
</style>

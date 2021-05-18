import BaseModal from "@/components/BaseModal.vue";
import { shallowMount } from "@vue/test-utils";

test("renders content according to props and slots when isModalOpen set TRUE", () => {
  const modal = shallowMount(BaseModal, {
    props: {
      title: "Title",
      isModalOpened: true,
    },
    slots: {
      default: "slot content",
    },
  });
  expect(modal.html()).toContain("Title");
  expect(modal.html()).toContain("slot content");
});

test("doesn't render any content when isModalOpened prop set to false", () => {
  const modal = shallowMount(BaseModal, {
    props: {
      title: "Title",
      isModalOpened: false,
    },
    slots: {
      default: "slot content",
    },
  });
  expect(modal.html()).not.toContain("Title");
  expect(modal.html()).not.toContain("slot content");
});

test("modal visibility changing state works correctly when isModalOpened = false", () => {
  const modal = shallowMount(BaseModal, {
    props: {
      title: "Title",
      isModalOpened: false,
    },
  });

  modal.vm.setModalVisibility(true);
  expect(modal.vm.isOpened).toBe(true);
  expect(modal.vm.isModalOpened).toBe(false);
});

test("changing modal visibility state works correctly when isModalOpened = true", () => {
  const modal = shallowMount(BaseModal, {
    props: {
      title: "Title",
      isModalOpened: true,
    },
  });

  modal.vm.setModalVisibility(false);
  expect(modal.vm.isOpened).toBe(false);
  expect(modal.vm.isModalOpened).toBe(true);
});

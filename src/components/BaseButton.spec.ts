import { mount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

test("mounts a component", () => {
  const wrapper = mount(BaseButton, {
    slots: {
      default: "Button text",
    },
  });

  expect(wrapper.html()).toContain("Button text");
  expect(wrapper.attributes("class")).toBe("button");
});

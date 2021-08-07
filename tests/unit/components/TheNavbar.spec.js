import { mount } from "@vue/test-utils";
import TheNavbar from "@/components/TheNavbar.vue";

describe("TheNavbar.vue", () => {
  it("renders image", () => {
    const wrapper = mount(TheNavbar);
    const img = wrapper.findAll(".star-wars-logo");
    expect(img.length).toBe(1);
  });
});

import TheLoading from "@/components/TheLoading.vue";
import { mount } from "@vue/test-utils";

describe("TheLoading.vue", () => {
  it("renders loading text", () => {
    const wrapper = mount(TheLoading);
    const img = wrapper.findAll(".Loader");
    console.log(img.length);
    expect(img.length).toBe(1);
  });
});

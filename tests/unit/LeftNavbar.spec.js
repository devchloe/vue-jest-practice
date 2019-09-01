import { shallowMount } from "@vue/test-utils";
import LeftNavbar from "@/components/LeftNavbar";

describe("LeftNavbar", function() {
  const wrapper = shallowMount(LeftNavbar, {
    stubs: ["router-link"]
  });
  it("navItems 초기값은 클러스터, 네임스페이스 이다.", () => {
    expect(wrapper.vm.navItems[0]).toEqual({
      name: "클러스터",
      path: "/"
    });
    expect(wrapper.vm.navItems[1]).toEqual({
      name: "네임스페이스",
      path: "/namespace"
    });
  });
  it("메뉴 개수만큼 nav-item을 렌더링한다.", () => {
    wrapper.setData({
      navItems: [
        {
          name: "1"
        },
        {
          name: "2"
        },
        {
          name: "3"
        }
      ]
    });
    expect(wrapper.findAll(".nav-item").length).toBe(3);
  });
});

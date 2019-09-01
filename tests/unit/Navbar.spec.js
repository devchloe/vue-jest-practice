import { shallowMount} from "@vue/test-utils";
import Navbar from '@/components/Navbar';

describe('Navbar', function () {
  const wrapper = shallowMount(Navbar, {
    stubs: ['router-link']
  });
  it('menuItems 초기값은 클러스터, 네임스페이스 이다.', () => {
    expect(wrapper.vm.$data.menuItems[0]).toEqual({
      name: '클러스터',
      path: '/cluster'
    });
    expect(wrapper.vm.$data.menuItems[1]).toEqual({
      name: '네임스페이스',
      path: '/namespace'
    })
  });
  it('메뉴 개수만큼 nav-item을 렌더링한다.', () => {
    wrapper.setData({
      menuItems: [
        {
          name: '1'
        },
        {
          name: '2'
        },
        {
          name: '3'
        }
      ]
    });
    expect(wrapper.findAll('.nav-item').length).toBe(3);
  });
});
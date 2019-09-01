import { shallowMount} from "@vue/test-utils";
import ButtonPlus from '@/components/ButtonPlus';

describe('ButtonPlus', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ButtonPlus)
  })

  it('target prop으로 받은 글자를 렌더링 해야 한다.', () => {
    wrapper.setProps({
      target: '클러스터'
    });
    expect(wrapper.text()).toEqual('클러스터');
  })
});
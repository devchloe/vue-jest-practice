import { shallowMount } from "@vue/test-utils";
import Cluster from "@/views/Cluster";
import PageHeader from "@/components/PageHeader"
import ButtonPlus from "@/components/ButtonPlus";
describe('Cluster', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Cluster);
  });

  it('page header를 렌더링 해야 한다.', () => {
    expect(wrapper.find(PageHeader).exists()).toBeTruthy();
  })

  it('page header에 prop으로 title을 넘긴다', () => {
    expect(wrapper.find(PageHeader).props('title')).toEqual('Kubernetes 클러스터')
  });

  it('buttonPlus 2개를 렌더링 해야한다.', () => {
    expect(wrapper.findAll(ButtonPlus).length).toBe(2);
  })
  it('buttonPlus target prop으로 클러스터, 네임스페이스를 전달해야 한다.', () => {
    expect(wrapper.findAll(ButtonPlus).at(0).props('target')).toEqual('클러스터');
    expect(wrapper.findAll(ButtonPlus).at(1).props('target')).toEqual('네임스페이스');
  })
});
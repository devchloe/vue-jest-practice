import {shallowMount} from "@vue/test-utils";
import PageHeader from '@/components/PageHeader'
import ButtonPlus from "@/components/ButtonPlus";

describe('PageHeader', function () {
  let wrapper;
  beforeEach(() => {
    const buttonWrapper = {
      render(h) {
        return h(ButtonPlus, { props: { target: "클러스터"}});
      }
    }
    wrapper = shallowMount(PageHeader,{
      slots: {
        default: buttonWrapper
      }
      // slots: {
      //   default: '<button class="fake-button"></button><button class="fake-button"></button>'
      // }
    });
  });
  // it('page header는 slot으로 받은 엘리먼트를 렌더링 한다.', () => {
  //  //' Messages are inserted in a ul.list-messages element'
  //   // 'action buttons are inserted in a .header element
  //   expect(wrapper.findAll('.fake-button').length).toBe(2);
  // });

  it('Header slot renders a default header text', () => {
    const header = wrapper.find('.page-header');
    expect(header.text().trim()).toBe("");
  });

  it('Header slot is rendered within .page-header', () => {
    wrapper = shallowMount(PageHeader, {
      slots: {
        header: "Kubernetes 클러스터"
      }
    });
    const header = wrapper.find('.page-header');
    expect(header.text().trim()).toBe("Kubernetes 클러스터")
  });

  it('coomands slot renders 2 buttonPlus', () => {
    const buttons = wrapper.findAll(ButtonPlus);
    buttons.wrappers.forEach(c => {
      expect(c.vm.button.length).toBeGreaterThan(5);
    })
  });
  //
  // it('buttonPlus가 pageHeadaer 컴포넌트에 인서트 되어야 한다.', () => {
  //   expect(wrapper.find(ButtonPlus).isVueInstance()).toBe(true);
  // });
});
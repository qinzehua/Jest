import { shallowMount, mount } from '@vue/test-utils'
import Header from '../../components/Header'

test('测试 Header 组件包含input', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    expect(input.exists()).toBe(true);
})

test('测试 Header 组件中input 初始内容为空', () => {
    const wrapper = shallowMount(Header);
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('');
})

test('测试 Header 组件中input输入框值变化 数据也要发生改变', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('qin ze')
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('qin ze');
});

test('测试 Header 组件中input输入框回车，无内容时，不向外触发', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeFalsy();
});

test('测试 Header 组件中input输入框回车，有内容时，向外触发, 并且清空输入框', () => {
    const wrapper = shallowMount(Header);
    const input = wrapper.find('[data-test="input"]');
    input.setValue('qzh ');
    input.trigger('keyup.enter');
    expect(wrapper.emitted().add).toBeTruthy();
    expect(wrapper.vm.$data.inputValue).toBe('');
});


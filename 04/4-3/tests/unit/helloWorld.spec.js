import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'
    //shallowMount 只会渲染一层组件, 不会渲染 HelloWorld 的子组件
    //mount 会渲染组件及其子组件, 但是性能降低
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    console.log(wrapper.text())
    expect(wrapper.findAll('.mm').length).toBe(2)
  })
})

    

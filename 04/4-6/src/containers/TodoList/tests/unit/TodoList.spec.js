import { shallowMount, mount } from '@vue/test-utils'
import TodoList from '../../todoList'
import Header from '../../components/Header'

it('TodoList 监听到 Header 的 add 事件是，会增加一个内容', async () => {
    const wrapper = shallowMount(TodoList);
    const header = wrapper.find(Header)
    header.vm.$emit('add', 'qzh cook')
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual(['qzh cook'])
})
    

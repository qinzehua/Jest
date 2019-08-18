import {runCallback, createObject,
    getData, getData3
} from './mock'

import axios from 'axios';
jest.mock('axios');


test('测试 runCallback', () => {
    const func = jest.fn(() => {
        return '456';
    }); 
    // mock 函数
    // func.mockReturnValue('q') //这个地方设置的返回值，会覆盖上面的返回值 '456'
    // func.mockReturnValueOnce('q'); //这个方法同上，但是只会覆盖一次，要覆盖多次，则要执行这个函数多次
    runCallback(func);
    runCallback(func);
    runCallback(func);
    expect(func.mock.calls.length).toBe(3)
    console.log(func.mock);                        
})

test('测试 mockImplementationOnce', () => {
    const func = jest.fn(() => {
        return 'default'
    }); 
    func.mockImplementationOnce(a => {
        //其他逻辑
        return 'first call'
    }).mockImplementationOnce(c => {
        //xxx
        return 'second call'
    });
    runCallback(func);   
    expect(func.mock.calls.length).toBe(1)             
})

test('测试 createObject', () => {
    const func = jest.fn(() => {
        return '456'
    });
    createObject(func);
    expect(func.mock.calls.length).toBe(1);
    // console.log(func.mock);
});

//接口测试。改变axios的内部实现
test('测试 getData', async () => {
    axios.get.mockResolvedValue({msg: 'success'});
    // axios.get.mockResolvedValueOnce({data: 'hello'});
    await getData().then((data) => {
        expect(data.msg).toBe('success');
    });
});

test('测试 getData3', async () => {
    axios.get.mockResolvedValue({msg: 'fail'});
    await getData3().then((data) => {
        expect(data.msg).toBe('fail');
    });
});


import {timer} from './timer'

beforeEach(() => {
    jest.useFakeTimers()
})

//用done 的方法来测试
// test('done 测试 timer', (done) => {
//     timer((ss) => {
//         expect(ss).toBe('123');
//         done();
//     })
// })
//每次调用test前对timer初始化


// test('waits 1 second before ending the game', () => {
//     timer();
//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
// });

// test('calls the callback after 1 second', () => {
//     const callback = jest.fn();
//     timer(callback);
//     // 在这个时间点，定时器的回调不应该被执行
//     expect(callback).not.toBeCalled();
//     // “快进”时间使得所有定时器回调被执行
//     jest.runAllTimers();
//     // 现在回调函数应该被调用了！
//     expect(callback).toBeCalled();
//     expect(callback).toHaveBeenCalledTimes(1);
//   });

it('calls the callback after 1 second via advanceTimersByTime', () => {
    const callback = jest.fn();
  
    timer(callback);
  
    // 在这个时间点，回调函数不应该被执行
    expect(callback).not.toBeCalled();
  
    // “快进”时间，使得所有定时器回调都被执行
    jest.advanceTimersByTime(3000);
  
    // 到这里，所有的定时器回调都应该被执行了！
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);

    //存在嵌套timer的情况再次前进3s
    // jest.advanceTimersByTime(3000);
    // expect(callback).toBeCalled();
    // expect(callback).toHaveBeenCalledTimes(2);
  });
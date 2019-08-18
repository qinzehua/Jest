
//方法一
//应用场景：只需要demoFunc被执行后，里面的Util， a ，b被执行过。
//Util, a，b很复杂很好性能，而我们又不关心其执行的结果。可以模拟一个简单函数来降低性能
jest.mock('./util');
import {Util} from './util'

// jest.mock 发现Util 是一个类, 会自动把类的构造函数和方法变成 jest.fn()
// 即 const Util = jest.fn()
// Util.prototype.a = jest.fn()
// Util.prototype.b = jest.fn()

import { demoFunc } from './demo';
test('测试 demoFunc', () => {
    //在demoFunc里面调用的Util 实际上是上面模拟生成的Util
    demoFunc();
    expect(Util).toHaveBeenCalled()
    expect(Util.mock.instances[0].a).toHaveBeenCalled()
});

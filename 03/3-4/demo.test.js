jest.mock('./util');
import {Util} from './util'




// jest.mock 发现util 是一个类, 会自动把类的构造函数和方法变成 jest.fn()
// 即 const Util = jest.fn()
// Util.prototype.a = jest.fn()
// Util.prototype.b = jest.fn()

// 上面的模拟过程，可以同前面几节的。在__mocks__下新建文件 util.js。
// 在其中对Util类进行自定义。

import { demoFunc } from './demo';
test('测试 demoFunc', () => {
    //在demoFunc里面调用的Util 实际上是上面第4上模拟生成的Util
    demoFunc();
    expect(Util).toHaveBeenCalled()
})
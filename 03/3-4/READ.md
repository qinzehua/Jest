2-6: 1. test --watch 进入o模式。
     2. 必须安装git
     3. 会监听所有改变过的文件(git statsus 命令看到的红色文件)
     4. f模式，只会测试上一次报错的代码, 会切换到a模式下;
     5. t模式，输入正则，测试匹配正则的单元测试, 会切换到a模式下;

2-7: 1.回到函数类型的异步测试，要加执行done
     2.promise类型的异步测试，要return这个promise。在then，catch中写expect测试。对于reject的状态，会自测试出来。在同一个test文件中对于同一个promise 的不同状态测试，最好写上不同的方法来测如
     fetchDataPomise， fetchDataPomise404

2-8: 异步测试代码，可以有多重写法

2-9: 钩子函数： beforeAll -> beforeEach -> afterEach -> afterAll,
        describe 可以对测试进行分组。
2-10: 钩子函数的作用域: describe外层beforeAll -> describe内层beforeAll -> describe外层               beforeEach -> describe内层beforeEach -> describe内层afterAll (describe如果后面还有分组:        describe外层beforeEach -> describe内层beforeEach -> describe内层afterAll) -> describe        外层afterAll。
      不要在describe内部直接写公用代码，而是写在钩子函数内部。
2-11: mock 函数，可以用于测试回调函数，可以对回调函数进行多次调用。可以获取回调函数的返回值。
2-12: mock 函数可以改变axios的内部实现，实现模拟后台返回数据; mockRejectedValue 测试请求失败，
      mockResolvedValue 测试请求成功。    


3-1: 快照测试适合测试，配置文件。和vue ui组件。快照会保存第一次测试的配置
     文件,每当修改配置文件, 就会测试不通过。需要通过交互式的命令行输入,
     新快照。也就是说快照测试只是对比测试，对比不一致就报错.
     对于频繁变更的字段，如 date: new Date。可以增加配置参数，
     expect.any(数据类型),来使其自动更新快照.
     行内快照需要安装 prettier, 会把快照内容直接生成在test文件中

3-2: mock另外还有一种在__mocks__目录下新建,与被测试文件同名的文件, 并且在里面定义同名的函数,此函数内部，
     通过Promise模拟网络请求。

     使用方法一: 1.jest.mock('./mock.js') 引入mock文件, 
               2. import {fetchData} from './mock'; 引入被测试文件
               3. 写fetchData的测试代码
               这种写法，有个弊端，就是对原函数(fetchData)的内部进行侵入性的模拟。如果被此时文件存在同步函数，因为同步函数不需要模拟，就不需要在./__mocks__/mock.js文件中也要对其进行定义。在引入同步方法时要使用, const {xxxx} = jest.requireActual('./xxx');
                

     使用方法二: 1. 吧把方法一的第一步改成，在jest.config.js 文件中修改 automock 为true
                其他相同
3-3:

3-4: 通过 jest.mock('../xxx.js') 对class进行模拟，生成一个简单class,     可以减少因为真是class示例过于复杂而引起的性能问题. 
     可以在__mocks__目录下声明同名class的方式进行测试
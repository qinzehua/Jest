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
2-12: mock函数可以改变axios的内部实现，实现模拟后台返回数据;     

3章: 1小时30分
4章: 3小时36分
6章: 1小时30分
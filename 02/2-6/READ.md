2-4: 1.安装依赖@babel/core, @babel/preset-env
     2. .babelrc基本配置,使测试代码支持ES6模块
        {
            "presets": [
                ["@babel/preset-env",{
                "targets": {
                    "node": "current"
                }
                }]
            ]
        }
    3. 安装git

2-6: 1. test --watch 进入o模式。
     2. 必须安装git
     3. 会监听所有改变过的文件(git statsus 命令看到的红色文件)
     4. f模式，只会测试上一次报错的代码, 会切换到a模式下;
     5. t模式，输入正则，测试匹配正则的单元测试, 会切换到a模式下;


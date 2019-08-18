module.exports = {
  //引入一个文件，如果没有后缀, 则会加上下面的后缀进行查找
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    //识别翻译vue语法
    '^.+\\.vue$': 'vue-jest', 
    //把静态文件转化成字符串，不做解析
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    //做ES6, React语法转化,转成es5
    '^.+\\.jsx?$': 'babel-jest'
  },
  //定义哪些文件不需要转化
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  //把以@/xxxx/xx引入的文件做一个映射,
  //映射到根目录下的src目录下
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  //对vue组件做快照测试，需要用到jest-serializer-vue
  //来对快照文件格式化
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  //查找测试文件
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  //便于dom测试，而模拟的浏览器环境地址
  testURL: 'http://localhost/',
  //优化交互式选择测试时，文件名的提示
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}

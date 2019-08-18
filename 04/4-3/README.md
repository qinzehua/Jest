4-2: jest.config.js 配置文件讲解

4-3: https://vue-test-utils.vuejs.org/zh/
     shallowMount 只会渲染一层组件, 不会渲染 HelloWorld 的子组件
     mount 会渲染组件及其子组件, 但是性能降低
     expect(xxx).toMarchSnapshot() 快照测试，可以生成组件的dom结构，
     并保存在文件中。可以及时发现组件的ui改变
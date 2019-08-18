import {Counter, fetchDataPomise} from './counter.js'
let counter = null;

beforeAll(() => {
    return fetchDataPomise().then(res => {
        console.log(res.data);
        console.log('beforeAll')
    })
});

beforeEach(() => {
    console.log('beforeEach');
    counter = new Counter();
});

afterAll(() => {
    console.log('afterAll')
});

describe('加法相关测试', () => {
    test('测试 addone 方法', () => {
        counter.addone();
        expect(counter.number).toBe(1)
    });
    test('测试 addtwo 方法', () => {
        counter.addtwo();
        expect(counter.number).toBe(2)
    });
})

describe('减法相关测试', () => {
    test('测试 minusone 方法', () => {
        counter.minusone();
        expect(counter.number).toBe(-1)
    });
    
    test('测试 minustwo 方法', () => {
        counter.minustwo();
        expect(counter.number).toBe(-2)
    });
})


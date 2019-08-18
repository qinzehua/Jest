jest.mock('./mock');
import {fetchData} from './demo';
//不需要被覆盖的函数，通过 jest.requireActual 引入
const {getNumber} = jest.requireActual('./demo');
test('fetchData 测试', () => {
    return fetchData().then(data => {
        console.log(data);
    });
});

test('getNumber 测试', () => {
    console.log(getNumber())
});
import {fetchData, fetchDataPomise, fetchDataPomise404} from './fetchData'
//带回调函数的异步测试
test('fetchData 测试结果为1 {success: true}', (done) => {
  fetchData((data) => {
    expect(data).toEqual({success: true});
    done();
  });
});

test('fetchDataPomise 测试结果为2 {success: true}', () => {
  return fetchDataPomise().then(res => {
    expect(res.data).toEqual({success: true})
  });
})

test('fetchDataPomise 测试结果为3 404', () => {
  return fetchDataPomise().catch((e) => {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  });
})

// test('fetchDataPomise 测试结果为4 {success: true}', () => {
//   return expect(fetchDataPomise()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchDataPomise 测试结果为5 404', () => {
//   return expect(fetchDataPomise()).rejects.toThrow();
// })

// test('fetchDataPomise 测试结果为6 {success: true}', async () => {
//   await expect(fetchDataPomise()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   });
// })

// test('fetchDataPomise 测试结果为7 404', async () => {
//   await expect(fetchDataPomise()).rejects.toThrow();
// })

test('fetchDataPomise 测试结果为8 {success: true}', async () => {
  const response = await fetchDataPomise();
  expect(response.data).toEqual({
    success: true
  });
})

test.only('fetchDataPomise 测试结果为9 404', async () => {
  //如果不加try catch遇到404的情况，jest会直接抛出错误
  //则无法测试错误情况
  try {
    await fetchDataPomise()
  }catch(e) {
    expect(e.toString().indexOf('404') > -1).toBe(true);
  }
})


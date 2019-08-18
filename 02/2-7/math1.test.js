 test('测试加法', () => {
   const a = {one: 1}
   expect(a).toEqual({one:1});
 });

 test('测试 null', () => {
   const a = null
   expect(a).toBeNull()
 });

 test('测试 undefined', () => {
   const a = undefined
   expect(a).toBeUndefined()
 });

test('测试 toBeCloseTo', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});
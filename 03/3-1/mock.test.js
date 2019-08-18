import { generateConfig, generateAnthorConfig } from "./mock";
//需要提前安装
test("测试 generateConfig函数", () => {
  expect(generateConfig()).toMatchSnapshot();
//   expect(generateConfig()).toMatchSnapshot({
//     date: expect.any(Date)
//   });
// });

test("测试 generateAnthorConfig 函数", () => {
  expect(generateAnthorConfig()).toMatchSnapshot();
});

test("测试行内 generateConfig函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      date: expect.any(Date)
    },
    `
    Object {
      "date": Any<Date>,
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
    }
  `
  );
});

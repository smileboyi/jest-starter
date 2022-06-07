import after1000ms from "utils/after1000ms";

// describe((after1000ms),()=>{
//     it("可以在 1000ms 后自动执行函数", (done) => {
//         after1000ms(() => {
//           expect("???");
//           done();
//         });
//       });
// })

describe("after1000ms", () => {
  beforeAll(() => {
    // mock 定时器
    jest.useFakeTimers();
  });

  it("可以在 1000ms 后自动执行函数", () => {
    // 监听定时器
    jest.spyOn(global, "setTimeout");

    // 创建一个假函数用于回调，这个函数可以被断言监听到
    const callback = jest.fn();
    // 执行测试函数
    after1000ms(callback);

    jest.runAllTimers();

    // 断言callback是否被调用过
    expect(callback).toHaveBeenCalled();
    // 断言定时器是否调用过1次
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // 断言定时器是否在1秒后调用
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});

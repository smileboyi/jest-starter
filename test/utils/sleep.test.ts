import sleep from "utils/sleep";

// describe("sleep", () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   });

//   it("可以睡眠 1000ms", async () => {
//     const callback = jest.fn();

//     // const act = async () => {
//     //   await sleep(1000);
//     //   callback();
//     // };

//     // act();

//     sleep(1000).then(() => {
//       callback();
//     });

//     // 时间快进前
//     expect(callback).not.toHaveBeenCalled();

//     // 时间快进
//     jest.runAllTimers();

//     // 时间快进后
//     expect(callback).toHaveBeenCalledTimes(1);
//   });
// });


describe("sleep", () => {
    it("可以在 1s 后再执行", async () => {
      jest.useFakeTimers();
  
      const act = async (callback: () => void) => {
        await sleep(1000);
        callback();
      };
  
      const mockCallback = jest.fn();
  
      const promise = act(mockCallback);
  
      // mockCallback 还未调用
      expect(mockCallback).not.toBeCalled();
  
      // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
      jest.runAllTimers();
  
      // 执行 callback 内容
      await promise;
  
      // mockCallback 已调用
      expect(mockCallback).toBeCalled();
      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
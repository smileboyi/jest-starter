import * as envUtils from "utils/env";

// 记录测试值
const originEnv = envUtils.env;

describe("env", () => {
  // 在每次it测试之前，都要将mock的env变量重新赋值为originEnv，不然会造成用例之间的污染
  afterEach(() => {
    // 1. 强行赋值，需要加上@ts-ignore
    // envUtils.env = originEnv;
    // 2. 使用Object.defineProperty赋值
    Object.defineProperty(envUtils, "env", {
      value: originEnv,
      writable: true,
    });
  });

  it("开发环境", () => {
    // 1.
    // envUtils.env = "dev";
    // 2.
    Object.defineProperty(envUtils, "env", {
      value: "dev",
      writable: true,
    });
    expect(envUtils.env).toEqual("dev");
  });

  it("正式环境", () => {
    Object.defineProperty(envUtils, "env", {
      value: "prod",
      writable: true,
    });

    expect(envUtils.env).toEqual("prod");
  });
});

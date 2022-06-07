describe("doMock config", () => {
  beforeEach(() => {
    // 必须重置模块，否则无法再次应用 doMock 的内容
    jest.resetModules();
  });

  it("开发环境", () => {
    // mock config中的getEnv，这种写法啰嗦
    // jest.doMock不会提升
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => "dev",
      },
    }));

    const { config } = require("utils/env");
    expect(config.getEnv()).toEqual("dev");
  });

  it("正式环境", () => {
    jest.doMock("utils/env", () => ({
      __esModule: true,
      config: {
        getEnv: () => "prod",
      },
    }));

    const { config } = require("utils/env");
    expect(config.getEnv()).toEqual("prod");
  });
});

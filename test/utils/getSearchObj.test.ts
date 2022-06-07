import getSearchObj from "utils/getSearchObj";

describe("getSearchObj", () => {
  it("可以获取当前网址的查询参数对象", () => {
    // 1.原生修改，但不支持修改mock地址
    // window.location.href = "https://www.baidu.com?a=1&b=2";

    // 2.jest-environment-jsdom-global方式修改，使用全局暴露出来的 jsdom
    // global.jsdom.reconfigure({
    //   url: "https://www.baidu.com?a=1&b=2",
    // });

    // 3.通过jest-location-mock插件方式修改，通过监听location.assign来修改网页地址
    window.location.assign('https://www.baidu.com?a=1&b=2');

    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  });

  it("空参数返回空", () => {
    // 1.原生修改，不支持
    // window.location.href = "https://www.baidu.com";

    // 2.使用全局暴露出来的 jsdom
    // global.jsdom.reconfigure({
    //   url: "https://www.baidu.com",
    // });

    // 3.插件方式修改
    window.location.assign('https://www.baidu.com');

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
});



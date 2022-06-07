import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import AuthButton from "components/AuthButton";
import * as userUtils from "apis/user";
import { AxiosResponse } from "axios";
import { UserRoleType } from "apis/user";
import server from "../../mockServer/server";
import { rest } from "msw";

// 初始化函数
const setup = (userType: UserRoleType) => {
  server.use(
    rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ userType }));
    })
  );
};

// 这里提供了3种方式mock,而第3种方式效果最好，为什么？因为更接近“真实用户”的mock，而不是“测试用户”的mock。
// 何时以“真实用户”或“测试用户”进行mock呢？
// 需要面向普通用户而不是开发者的，需要模拟一个交互场景的，关注的是交互逻辑，而不是实现逻辑的，以“真实用户”方式mock；
// 着重细节，偏向低层代码，关注的是实现逻辑而不是交互逻辑的，以“测试用户”方式mock。
describe("AuthButton Mock Axios", () => {
  it("可以正确展示普通用户按钮内容", async () => {
    // mock axios请求并返回一个GetUserRoleRes类型的结果
    // 1. mock axios get
    // jest.spyOn(axios, "get").mockResolvedValueOnce({
    //   data: { userType: "user" },
    // });

    // 2. mock getUserRole api
    // jest.spyOn(userUtils, "getUserRole").mockResolvedValueOnce({
    //   data: { userType: "user" },
    // } as AxiosResponse);

    // 3. mock http请求
    setup("user");

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });

  it("可以正确展示管理员按钮内容", async () => {
    // jest.spyOn(axios, "get").mockResolvedValueOnce({
    //   data: { userType: "admin" },
    // });

    // jest.spyOn(userUtils, "getUserRole").mockResolvedValueOnce({
    //   data: { userType: "admin" },
    // } as AxiosResponse);

    setup("admin");

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
});

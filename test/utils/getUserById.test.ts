import getUserById from "utils/getUserById";

describe("getUserById", () => {
  it("可以获取 userId == 1 的用户", async () => {
    const result = await getUserById("1");
    // 纯文本、JSON、XML等能被序列化的内容都可以使用快照测试
    expect(result).toMatchSnapshot();
  });
});

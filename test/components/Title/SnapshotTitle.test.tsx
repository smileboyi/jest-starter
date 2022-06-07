import React from "react";
import { render } from "@testing-library/react";
import Title from "components/Title";

describe("Title", () => {
  it("可以正确渲染大字", () => {
    const { baseElement, getByText } = render(
      <Title type="large" title="大字" />
    );
    // 整个结构的快照对比
    expect(baseElement).toMatchSnapshot();
    const content = getByText("大字");
    // 部分结构的快照对比
    expect(content).toMatchSnapshot();
  });

  it("可以正确渲染大小字", () => {
    const { baseElement, getByText } = render(
      <Title type="small" title="小字" />
    );
    expect(baseElement).toMatchSnapshot();
    const content = getByText("小字");
    expect(content).toMatchSnapshot();
  });
});

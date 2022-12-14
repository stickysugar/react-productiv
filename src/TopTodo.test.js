import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo"
import { testTodos } from "./_testCommon";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={testTodos} />);
  });

  it("contains expected title and description", function () {
    const result = render(<TopTodo todos={testTodos}/>);
    expect(result.queryByText("top priority")).toBeInTheDocument();
    expect(result.queryByText("test2")).toBeInTheDocument();
  });

  test("matches snapshot", function () {
    const { container } = render(<TopTodo todos={testTodos}/>);
    expect(container).toMatchSnapshot();
  });

});
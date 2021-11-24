import React from "react";
import { render, cleanup } from "@testing-library/react";
import TicTacToePage from "../pages/TicTacToePage";

afterEach(cleanup);

it("should equal to tic tac toe", () => {
  const { getByTestId } = render(<TicTacToePage />);
  expect(getByTestId("title")).toHaveTextContent("Tic tac toe");
});

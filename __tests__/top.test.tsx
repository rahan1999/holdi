import { render, screen } from "@testing-library/react";
import Top from "../components/top";
import "@testing-library/jest-dom";

test("should render Top component", () => {
  render(<Top />);
  const top = screen.getByTestId("top");
  expect(top).toBeInTheDocument();
});

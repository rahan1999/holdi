import { render, screen } from "@testing-library/react";
import Carousel from "../components/carousel";
import "@testing-library/jest-dom";

test("should render Carousel component", () => {
  render(<Carousel />);

  const carousel = screen.getByTestId("carousel");
  expect(carousel).toBeInTheDocument();
});

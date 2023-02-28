import { render, screen } from "@testing-library/react";
import Subpages from "../components/subpages";
import "@testing-library/jest-dom";

test("should render Subpages component", () => {
  render(
    <Subpages
      mainTitle="Kontakt"
      subTitle="Kontakt z firmą Holdi jest możliwy za pomocą:"
      content="tel: 501-603-194/E-mail: holdi@vp.pl"
      link="/#contactBox"
      curtain={console.log("test")}
    ></Subpages>,
  );
  const subpage = screen.getByTestId("subpages");
  expect(subpage).toBeInTheDocument();
  expect(subpage).toHaveTextContent("Kontakt");
});

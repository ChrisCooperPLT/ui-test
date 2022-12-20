import { render } from "@testing-library/react";
import App from "./App";

describe("test", () => {
  it("should render", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

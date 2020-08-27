import React from "react";

import { render } from "@testing-library/react";

// Component
import Footer from "./Footer";

it("Footer renders correctly", () => {
  const footer = render(<Footer/>);
  expect(footer).toBeTruthy();
});

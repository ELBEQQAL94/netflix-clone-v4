import React from "react";

import { render } from "@testing-library/react";

// Component
import RowItem from "./RowItem";

it("Row item renders correctly", () => {
  const movies = [];
  const rowItem = render(<RowItem isLargeRow movies={movies} />);
  expect(rowItem).toBeTruthy();
});

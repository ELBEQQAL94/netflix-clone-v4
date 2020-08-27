import React from "react";

import { render } from "@testing-library/react";

// services
import requests from "../services/requests";

// Component
import Banner from "./Banner";

it("Banner renders correctly", () => {
  const banner = render(<Banner fetchData={requests.fetchHorrorMovies}/>);
  expect(banner).toBeTruthy();
});

import React from "react";
import {render, screen} from "@testing-library/react";
import Header from "./Header";
import {BrowserRouter} from "react-router-dom";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const title = screen.getByText(/PokemonApi/i);
  expect(title).toBeInTheDocument();
});

import React from "react";
import App from "./App";
import Header from "./Header";
import Game from "./Game";
import { shallow } from "enzyme";

test("renders without crashing", () => {
  shallow(<App />);
});

test("includes Header", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Header />)).toEqual(true);
});

test("includes Game", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<Game />)).toEqual(true);
});

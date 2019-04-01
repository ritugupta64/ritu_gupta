import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });
});

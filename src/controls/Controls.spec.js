// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render } from "react-testing-library";

import Controls from "./Controls";

describe("<Controls />", () => {
  // 2. write this test
  it("runs the tests", () => {
    expect(true).toBe(true);
  });
  it("renders", () => {
    render(<Controls />);
  });
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

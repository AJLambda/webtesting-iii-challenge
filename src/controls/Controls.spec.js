///////////////////// CONTROLS ////////////////////////
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is closed
// the locked toggle button is disabled if the gate is open

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

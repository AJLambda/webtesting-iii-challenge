///////////////////// DASHBOARD ////////////////////////
// shows the controls and display

// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  describe("The Component", () => {
    // 2. write this test
    it("runs the tests", () => {
      expect(true).toBe(true);
    });
    it("renders", () => {
      render(<Dashboard />);
    });
    it("matches snapshot", () => {
      const tree = renderer.create(<Dashboard />); // generates a DOM tree

      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
    it("should render default control buttons and display flags", () => {
      const { getByText } = render(<Dashboard />);

      getByText(/unlocked/i);
      getByText(/open/i);
      getByText(/lock gate/i);
      getByText(/close gate/i);
    });
  });
});

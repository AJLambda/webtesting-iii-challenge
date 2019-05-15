///////////////////// DISPLAY ////////////////////////
// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";

import Display from "./Display";

describe("<Display />", () => {
  describe("The entire Component", () => {
    // 2. write this test
    it("runs the tests", () => {
      expect(true).toBe(true);
    });
    it("renders", () => {
      render(<Display />);
    });
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />); // generates a DOM tree

      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
    it("Should display the unlocked flag and the open flag by default", () => {
      const { getByText } = render(<Display />);

      getByText(/unlocked/i);
      getByText(/open/i);
    });
    it("Should display red-led for locked and closed", () => {
      const { getByText } = render(<Display locked={true} closed={true} />);

      const locked = getByText(/locked/i);
      const closed = getByText(/closed/i);

      expect(locked).toHaveClass("red-led");
      expect(closed).toHaveClass("red-led");
    });
    it("Should display green-led for unlocked and open", () => {
      const { getByText } = render(<Display locked={false} closed={false} />);

      const unlocked = getByText(/unlocked/i);
      const open = getByText(/open/i);

      expect(unlocked).toHaveClass("green-led");
      expect(open).toHaveClass("green-led");
    });
  });
  describe("The unlocked flag", () => {
    it("Should be displayed if gate is unlocked", () => {
      const renderProps = render(<Display locked={false} />);
      renderProps.getByText("Unlocked");
    });
  });
  describe("The locked flag", () => {
    it("Should be displayed if gate is locked", () => {
      const renderProps = render(<Display locked={true} />);
      renderProps.getByText("Locked");
    });
  });
  describe("The open flag", () => {
    it("should display if gate is open", () => {
      const renderProps = render(<Display closed={false} />);
      renderProps.getByText("Open");
    });
  });
  describe("The closed flag", () => {
    it("should display if gate is closed", () => {
      const renderProps = render(<Display closed={true} />);
      renderProps.getByText("Closed");
    });
  });
});

///////////////////// CONTROLS ////////////////////////
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is closed
// the locked toggle button is disabled if the gate is open

// Test away
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render, fireEvent } from "react-testing-library";

import Controls from "./Controls";

describe("<Controls />", () => {
  describe("The entire Component", () => {
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
  describe("The Lock Gate Button", () => {
    it("should be disabled when the gate is open", () => {
      const renderProps = render(<Controls locked={false} closed={false} />);
      const lockBtn = renderProps.getByText("Lock Gate");

      expect(lockBtn).toBeDisabled();
    });
    it("should be enabled when the gate is closed", () => {
      const renderProps = render(<Controls locked={false} closed={true} />);
      const lockBtn = renderProps.getByText("Lock Gate");

      expect(lockBtn).toBeEnabled();
    });
  });
  describe("The Unlock Gate Button", () => {
    it("should be enabled when the gate is locked and closed", () => {
      const renderProps = render(<Controls locked={true} closed={true} />);
      const unlockBtn = renderProps.getByText("Unlock Gate");

      expect(unlockBtn).toBeEnabled();
    });
  });
  describe("The Close Gate Button", () => {
    it("should be enabled when the gate is unlocked and open", () => {
      const renderProps = render(<Controls locked={false} closed={false} />);
      const closeBtn = renderProps.getByText("Close Gate");

      expect(closeBtn).toBeEnabled();
    });
    it("cannot be enabled if the gate is locked and closed", () => {
      const spy = jest.fn();
      const { getByText } = render(
        <Controls closed={true} locked={true} toggleClosed={spy} />
      );
      const button = getByText(/Open Gate/);
      fireEvent.click(button);
      expect(spy).not.toBeCalled();
    });

    it("should call toggle closed on click", () => {
      const spy = jest.fn();
      const { getByText } = render(<Controls toggleClosed={spy} />);

      const closeBtn = getByText("Close Gate");
      fireEvent.click(closeBtn);

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  describe("The Open Gate Button", () => {
    it("should be enabled when the gate is unlocked and closed", () => {
      const renderProps = render(<Controls locked={false} closed={true} />);
      const openBtn = renderProps.getByText("Open Gate");

      expect(openBtn).toBeEnabled();
    });
  });
});

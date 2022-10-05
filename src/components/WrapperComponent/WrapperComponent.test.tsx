import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WrapperComponent from "./WrapperComponent";

describe("suite", () => {
  it("test", async () => {
    render(<WrapperComponent />);
    const button = screen.getByText(/Click Me!/);
    await userEvent.click(button);
    const textEl = await screen.findByTestId("hidden_text");
    expect(textEl).toBeInTheDocument();
  });
});

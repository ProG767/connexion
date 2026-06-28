import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  test("render button", () => {
    render(<Button label="entrer" onClick={() => {}} />);

    // screen.debug();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("test button onClick", () => {
    const clickHandlerMock = vi.fn();
    render(<Button label="entrer" onClick={clickHandlerMock} />);

    const button = screen.getByRole("button", { name: "entrer" });

    fireEvent.click(button);

    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  });
});

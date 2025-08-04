import Counter, { multiplyThenCall, sum } from "./Counter";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

// Use test or it
test("should sum 1 and 2 to 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("sums 2 and 3 to 5", () => {
  expect(sum(2, 3)).toBe(5);
});

// add a test suite for grouping multiple tests
// restoration of mocks not needed since every test has its own mock instance
describe("Fn: multiplyThenCall", () => {
  it("multiplies 2 and 2 to 4 and calls the cb 4 times", () => {
    const mockCallback = vi.fn();

    expect(multiplyThenCall(2, 2, mockCallback)).toBe(4);
    expect(mockCallback).toHaveBeenCalledTimes(4);
  });

  it("multiplies 1 and 3 to 3 and calls the cb 3 times", () => {
    const mockCallback = vi.fn();

    expect(multiplyThenCall(1, 3, mockCallback)).toBe(3);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  });

  it("passes the correct argument value to the function", () => {
    const mockCallback = vi.fn();

    multiplyThenCall(1, 2, mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(2);
  });
});

// https://www.w3.org/TR/html-aria/#docconformance
describe("Component: Counter", () => {
  it("loads and displays the headline, counter and buttons", () => {
    render(<Counter />);

    const headline = screen.getByRole("heading", { level: 2 });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const counter = screen.getByRole("heading", { level: 3 });

    expect(headline).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
    expect(incrementBtn).toBeInTheDocument();
    expect(counter).toHaveTextContent("0");
  });

  it("decrements the counter state on decrement button click", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    const counter = screen.getByRole("heading", { level: 3 });

    await user.click(decrementBtn);

    expect(counter).toHaveTextContent("1");
  });

  it("increments the counter state on increment button click", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const counter = screen.getByRole("heading", { level: 3 });

    await user.click(incrementBtn);

    expect(counter).toHaveTextContent("1");
  });

  it("increments the counter state twice and decrements it properly afterwards", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const counter = screen.getByRole("heading", { level: 3 });

    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(decrementBtn);

    expect(counter).toHaveTextContent("1");
  });
});

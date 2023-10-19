import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { DragIcon } from "components/icons";

test("Button should have TextContent equal to Children", async () => {
  const mockTextContent = "Children";

  render(<Button>{mockTextContent}</Button>);

  const button = await screen.findByTestId("button");
  expect(button).toHaveTextContent(mockTextContent);
});

test("Button should render Icon when passed", async () => {
  render(<Button Icon={DragIcon} />);

  const button = await screen.findByTestId("button");
  const icon = await screen.findByTestId("button-icon");

  expect(button).toContainElement(icon);
});

test("Button should execute onClick when clicked", async () => {
  const mockOnClick = jest.fn();

  render(<Button onClick={mockOnClick}>Children</Button>);

  const button = await screen.findByTestId("button");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(mockOnClick).toBeCalled();
});

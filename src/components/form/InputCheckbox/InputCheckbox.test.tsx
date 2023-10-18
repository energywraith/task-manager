import { fireEvent, render, screen } from "@testing-library/react";
import { InputCheckbox } from "./InputCheckbox";

test("Checkbox onChange returns boolean value", async () => {
  const mockHandleCheckboxChange = jest.fn();

  render(<InputCheckbox checked={false} onChange={mockHandleCheckboxChange} />);

  const input = await screen.findByTestId("input-checkbox");
  expect(input).toBeInTheDocument();

  fireEvent.click(input);
  expect(mockHandleCheckboxChange).toBeCalledWith(true);
});

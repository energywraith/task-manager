import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

test("Input onChange returns string value", async () => {
  const mockHandleInputChange = jest.fn();

  render(<Input value="startString" onChange={mockHandleInputChange} />);

  const input = (await screen.findByTestId("input")) as HTMLInputElement;
  expect(input).toBeInTheDocument();
  expect(input.value).toBe("startString");

  fireEvent.change(input, { target: { value: "changedString" } });
  expect(mockHandleInputChange).toBeCalledWith("changedString");
});

import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const reserveButton = screen.getByLabelText("On Click", {
    name: "Reserve Table",
  });
  fireEvent.click(reserveButton);

  const testTime = "17:00"; // Set your desired time option
  userEvent.selectOptions(
    screen.getByLabelText("Choose Time:"),
    screen.getByRole("option", { name: testTime })
  );

  expect(screen.getByRole("option", { name: testTime }).selected).toBe(true);
});

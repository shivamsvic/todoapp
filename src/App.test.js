import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders welcome to task tracker", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to task tracker/i);
  expect(linkElement).toBeInTheDocument();
});

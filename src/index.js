import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "../Context/Context"; // Update path if needed
import App from "../App/App";

test("renders learn react link", () => {
  render(
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

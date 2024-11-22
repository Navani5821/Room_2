import { act } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../App/App";
import { RoomProvider } from "../Context/Context";

test("renders luxurious rooms banner", () => {
  act(() => {
    render(
      <RoomProvider>
        <Router>
          <App />
        </Router>
      </RoomProvider>
    );
  });

  const bannerText = screen.getByText(/luxurious rooms/i);
  expect(bannerText).toBeInTheDocument();
});


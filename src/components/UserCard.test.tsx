import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("Component: UserCard", () => {
  it("renders article, h2 and p tags", () => {
    render(
      <UserCard
        username="username"
        age={1}
      />
    );

    const article = screen.getByRole("article");
    const heading = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getByText(/Age/i);

    expect(article).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("renders username and age props correctly", () => {
    const username = "username";
    const age = 1;

    render(
      <UserCard
        username={username}
        age={age}
      />
    );

    const heading = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getByText(/Age/i);

    expect(heading).toHaveTextContent(username);
    expect(paragraph).toHaveTextContent(String(age));
  });
});

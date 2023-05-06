import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MediaCard from "./card";

describe("MediaCard component", () => {
  const media = {
    id: "1",
    image: "https://example.com/image.jpg",
    title: "Test Media",
    location: "Test Location",
    photographer: "Test Photographer"
  };

  it("renders correctly", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <MediaCard item={media} />
      </MemoryRouter>
    );

    expect(getByAltText("Test Media")).toBeInTheDocument();
    expect(getByText("Test Media")).toBeInTheDocument();
    expect(getByText("Test Location")).toBeInTheDocument();
    expect(getByText("Test Photographer")).toBeInTheDocument();
  });
});

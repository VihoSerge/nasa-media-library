import MediaList from "@/components/media/list";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("MediaList", () => {
  it("renders media list items", () => {
    const data = [
      {
        items: [
          {
            href: "http://example.com",
            links: [{ href: "http://example.com/image.jpg" }],
            data: [
              {
                nasa_id: "1234",
                title: "Example Image",
                location: "Moon",
                photographer: "NASA"
              }
            ]
          }
        ]
      }
    ];

    render(<MediaList data={data} />, { wrapper: BrowserRouter });

    const titleElement = screen.getByText(/example image/i);
    expect(titleElement).toBeInTheDocument();

    const locationElement = screen.getByText(/moon/i);
    expect(locationElement).toBeInTheDocument();

    const photographerElement = screen.getByText(/nasa/i);
    expect(photographerElement).toBeInTheDocument();
  });
});

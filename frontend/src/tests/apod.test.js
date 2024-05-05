import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Apod from "../pages/Apod";
import nasaapiInstance from "../services/NasaApiService";

jest.mock("../services/NasaApiService", () => ({
  getAstronomyPictureOfTheDay: jest.fn(),
}));

describe("Apod component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without error", () => {
    render(<Apod />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("fetches APOD data and displays it", async () => {
    const testData = {
      title: "Test Title",
      url: "https://example.com/image.jpg",
      explanation: "Test explanation",
    };

    nasaapiInstance.getAstronomyPictureOfTheDay.mockResolvedValue(testData);

    render(<Apod />);

    // Check that loading message disappears once data is fetched
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();

    // Check that the title, image, and explanation are displayed
    expect(await screen.findByText(testData.title)).toBeInTheDocument();
    expect(await screen.findByAltText(testData.title)).toHaveAttribute(
      "src",
      testData.url
    );
    expect(await screen.findByText(testData.explanation)).toBeInTheDocument();
  });

  test("handles API error", async () => {
    const errorMessage = "Error fetching APOD";
    nasaapiInstance.getAstronomyPictureOfTheDay.mockRejectedValue(errorMessage);

    render(<Apod />);

    // Check that the error message is displayed
    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  test("searches APOD data for a specific date", async () => {
    const testData = {
      title: "Test Title",
      url: "https://example.com/image.jpg",
      explanation: "Test explanation",
    };

    nasaapiInstance.getAstronomyPictureOfTheDay.mockResolvedValue(testData);

    render(<Apod />);

    const dateInput = screen.getByLabelText(/select date/i);
    userEvent.type(dateInput, "2023-10-06");

    const searchButton = screen.getByRole("button", { name: /search/i });
    userEvent.click(searchButton);

    // Check that the API is called with the correct date
    expect(nasaapiInstance.getAstronomyPictureOfTheDay).toHaveBeenCalledWith(
      "2023-10-06"
    );
  });
});

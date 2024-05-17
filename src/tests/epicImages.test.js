import React from "react";
import { render } from "@testing-library/react";
import EpicImages from "./EpicImages";

// Mock the nasaapiInstance service
jest.mock("../services/NasaApiService", () => ({
  getEpicImage: jest.fn().mockResolvedValue([]),
}));

describe("EpicImages", () => {
  it("renders without error", async () => {
    const { getByText } = render(<EpicImages />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });
});

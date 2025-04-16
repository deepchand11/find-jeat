import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import SearchBar from "./SearchBar";
import { vi, describe, test, expect, beforeEach } from "vitest";
import { data } from "react-router-dom";

vi.mock("axios");

describe("SearchBar Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("renders the SearchBar component correctly", () => {
        render(<SearchBar />);
        expect(screen.getByText(/Craving a bite\?/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Postcode:/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/E.g. 'EC4M 7RF'/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Go/i })).toBeInTheDocument();
    });

    test("displays an error message for invalid postcode", () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText(/E.g. 'EC4M 7RF'/i);
        const button = screen.getByRole("button", { name: /Go/i });

        fireEvent.change(input, { target: { value: "INVALID" } });
        fireEvent.click(button);

        expect(
            screen.getByText(
                /Please enter a valid UK postcode E.g. 'EC4M 7RF' or 'CF11 8AZ' or 'L4 0TH'/i
            )
        ).toBeInTheDocument();
    });

    test("displays loading message while fetching restaurants", async () => {
        axios.get.mockResolvedValueOnce({ data: [] });

        render(<SearchBar />);
        const input = screen.getByPlaceholderText(/E.g. 'EC4M 7RF'/i);
        const button = screen.getByRole("button", { name: /Go/i });

        fireEvent.change(input, { target: { value: "EC4M 7RF" } });
        fireEvent.click(button);

        expect(
            screen.getByText(/Please wait while fetching restaurants delivering to EC4M 7RF.../i)
        ).toBeInTheDocument();
    });

    // test("displays restaurants when API call is successful", async () => {
    //     const mockRestaurants = [
    //         { id: 1, name: "Restaurant 1" },
    //         { id: 2, name: "Restaurant 2" },
    //     ];
    //     axios.get.mockResolvedValueOnce({
    //         data: mockRestaurants,
    //     });

    //     render(<SearchBar />);
    //     const input = screen.getByPlaceholderText(/E.g. 'EC4M 7RF'/i);
    //     const button = screen.getByRole("button", { name: /Go/i });

    //     fireEvent.change(input, { target: { value: "EC4M 7RF" } });
    //     fireEvent.click(button);


    //     await screen.findByText(/Here are 10 restaurants near EC4M 7RF:/i);
    //     expect(screen.getByText(/Restaurant 1/i)).toBeInTheDocument();
    //     expect(screen.getByText(/Restaurant 2/i)).toBeInTheDocument();
    // });

    test("displays error message when API call fails", async () => {
        axios.get.mockRejectedValueOnce(new Error("Network Error"));

        render(<SearchBar />);
        const input = screen.getByPlaceholderText(/E.g. 'EC4M 7RF'/i);
        const button = screen.getByRole("button", { name: /Go/i });

        fireEvent.change(input, { target: { value: "EC4M 7RF" } });
        fireEvent.click(button);

        await screen.findByText(
            /Error finding restaurants... please try again with a valid postcode/i
        );
    });
});
import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import RestaurantResults from "./RestaurantResults";
import RestaurantCard from "./RestaurantCard";


// Mock the RestaurantCard component
vi.mock('./RestaurantCard', () => {
    return {
      default: () => <div>Mocked RestaurantCard</div>,
    };
  });


describe("RestaurantResults Component", () => {
    it("renders the status heading", () => {
        render(<RestaurantResults status="Open Now" fetchedRestaurants={[]} />);
        const heading = screen.getByText("Open Now");
        expect(heading).toBeInTheDocument();
    });

    it("renders the correct number of RestaurantCard components", () => {
        const mockRestaurants = [
            { name: "Restaurant 1" },
            { name: "Restaurant 2" },
            { name: "Restaurant 3" },
        ];
        render(<RestaurantResults status="Open Now" fetchedRestaurants={mockRestaurants} />);
        const restaurantCards = screen.getAllByText("Mocked RestaurantCard");
        expect(restaurantCards).toHaveLength(mockRestaurants.length);
    });

    it("renders an empty state when no restaurants are fetched", () => {
        render(<RestaurantResults status="No Restaurants Found" fetchedRestaurants={[]} />);
        const heading = screen.getByText("No Restaurants Found");
        expect(heading).toBeInTheDocument();
        const restaurantCards = screen.queryByText("Mocked RestaurantCard");
        expect(restaurantCards).not.toBeInTheDocument();
    });
});
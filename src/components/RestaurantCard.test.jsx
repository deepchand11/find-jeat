import { render, screen } from '@testing-library/react';
import { describe, it, expect } from "vitest";
import RestaurantCard from './RestaurantCard';

describe('RestaurantCard Component', () => {
    const mockRestaurant = {
        name: 'Test Restaurant',
        cuisines: [{ name: 'Italian' }, { name: 'Mexican' }],
        address: {
            firstLine: '123 Test Street',
            city: 'Test City',
            postalCode: '12345',
        },
        rating: {
            starRating: 4.5,
        },
    };

    it('renders the restaurant name', () => {
        render(<RestaurantCard restaurant={mockRestaurant} />);
        expect(screen.getByText('Name:')).toBeInTheDocument();
        expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
    });

    it('renders the cuisines', () => {
        render(<RestaurantCard restaurant={mockRestaurant} />);
        expect(screen.getByText('Cuisines:')).toBeInTheDocument();
        expect(screen.getByText('Italian')).toBeInTheDocument();
        expect(screen.getByText('Mexican')).toBeInTheDocument();
    });

    it('renders the address', () => {
        render(<RestaurantCard restaurant={mockRestaurant} />);
        expect(screen.getByText('Address:')).toBeInTheDocument();
        expect(screen.getByText('123 Test Street')).toBeInTheDocument();
        expect(screen.getByText('Test City')).toBeInTheDocument();
        expect(screen.getByText('12345')).toBeInTheDocument();
    });

    it('renders the rating', () => {
        render(<RestaurantCard restaurant={mockRestaurant} />);
        expect(screen.getByText('Rating:')).toBeInTheDocument();
        expect(screen.getByText('4.5 /5')).toBeInTheDocument();
    });
});
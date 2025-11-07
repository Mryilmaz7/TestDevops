import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../components/Hello';

describe('Hello component', () => {
    it('renders the correct name', () => {
        render(<Hello name="Ömür" />);
        expect(screen.getByText('Hello, Ömür!')).toBeInTheDocument();
    });
});

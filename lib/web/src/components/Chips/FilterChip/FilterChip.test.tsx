import React from 'react';
import { render } from '@testing-library/react';
import FilterChip from './FilterChip';

describe('FilterChip', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<FilterChip />);

        expect(baseElement).toBeTruthy();
    });
});
import React from 'react';
import { render } from '@testing-library/react';
import SuggestionChip from './SuggestionChip';

describe('SuggestionChip', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<SuggestionChip />);

        expect(baseElement).toBeTruthy();
    });
});
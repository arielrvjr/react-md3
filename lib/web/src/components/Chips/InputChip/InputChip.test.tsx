import React from 'react';
import { render } from '@testing-library/react';
import InputChip from './InputChip';

describe('InputChip', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<InputChip />);

        expect(baseElement).toBeTruthy();
    });
});
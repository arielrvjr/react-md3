import React from 'react';
import { render } from '@testing-library/react';
import TopAppBarLarge from './TopAppBarLarge';

describe('TopAppBarLarge', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TopAppBarLarge />);

        expect(baseElement).toBeTruthy();
    });
});
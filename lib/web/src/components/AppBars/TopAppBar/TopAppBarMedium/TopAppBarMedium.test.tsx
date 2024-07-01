import React from 'react';
import { render } from '@testing-library/react';
import TopAppBarMedium from './TopAppBarMedium';

describe('TopAppBarMedium', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TopAppBarMedium />);

        expect(baseElement).toBeTruthy();
    });
});
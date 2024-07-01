import React from 'react';
import { render } from '@testing-library/react';
import TopAppBarSmall from './TopAppBarSmall';

describe('TopAppBarSmall', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TopAppBarSmall />);

        expect(baseElement).toBeTruthy();
    });
});
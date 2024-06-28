import React from 'react';
import { render } from '@testing-library/react';
import TopAppBar from './TopAppBar';

describe('TopAppBar', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TopAppBar />);

        expect(baseElement).toBeTruthy();
    });
});
import React from 'react';
import { render } from '@testing-library/react';
import TopAppBarCenter from './TopAppBarCenter';

describe('TopAppBarCenter', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<TopAppBarCenter />);

        expect(baseElement).toBeTruthy();
    });
});
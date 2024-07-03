import React from 'react';
import { render } from '@testing-library/react';
import AssistChip from './AssistChip';

describe('AssistChip', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<AssistChip />);

        expect(baseElement).toBeTruthy();
    });
});
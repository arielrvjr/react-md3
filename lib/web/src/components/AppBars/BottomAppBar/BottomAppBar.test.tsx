import React from 'react';
import { render } from '@testing-library/react';
import BottomAppBar from './BottomAppBar';

describe('BottomAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BottomAppBar />);

    expect(baseElement).toBeTruthy();
  });
});

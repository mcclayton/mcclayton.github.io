import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('<Button />', () => {
  it('renders children correctly', () => {
    render(
      <Button>
        <span>Click me</span>
      </Button>
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});

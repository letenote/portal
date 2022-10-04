import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

describe("@FIRST_RENDER_TEST", () => {
  it(`- landing on login page`, async () => {
    act(() => {
      render(<App />);
    });
    
    // 1. render with lazy content
    const lazyElement = await screen.findByText(/Welcome to/i);
    expect(lazyElement).toBeInTheDocument();

    // 2. test with testId
    const lazyElement1 = screen.getByTestId('login-page');
    expect(lazyElement1).toHaveTextContent('login-page');

    // 3. makesure pathname 
    const lazyElement2 = screen.getByTestId('login-page-route');
    expect(lazyElement2).toHaveTextContent('/');
  });
  
});

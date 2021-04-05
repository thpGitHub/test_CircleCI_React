import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mon super Composant/i);
  expect(linkElement).toBeInTheDocument();
});

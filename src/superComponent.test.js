import { fireEvent, render, screen } from '@testing-library/react';
import SuperComponent from './SuperComponent';

test('renders Mon super Composant', () => {
  render(<SuperComponent />);
  const linkElement = screen.getByText(/Mon super Composant/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Mon super Composant et click', () => {
    const messageAtester = "Salut tout le monde";

    render(<SuperComponent>{ messageAtester }</SuperComponent>);
    expect(screen.queryByText(messageAtester)).toBeNull();
    fireEvent.click(screen.getByText(/super/i));
    expect(screen.getByText(messageAtester)).toBeInTheDocument();
  });
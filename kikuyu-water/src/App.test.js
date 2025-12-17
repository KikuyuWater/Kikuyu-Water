import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders main header', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const header = screen.getByRole('heading', { name: /kikuyu water and sewerage company/i });
  expect(header).toBeInTheDocument();
});

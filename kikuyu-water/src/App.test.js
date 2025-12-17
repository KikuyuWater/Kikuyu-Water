import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
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

test('shows maintenance on unknown route', () => {
  render(
    <MemoryRouter initialEntries={["/this-route-does-not-exist"]}>
      <App />
    </MemoryRouter>
  );

  const maintenanceHeading = screen.getByRole('heading', { name: /404 — Website Under Maintenance/i });
  expect(maintenanceHeading).toBeInTheDocument();
});

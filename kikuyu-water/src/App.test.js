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

test('renders maintenance for all routes when REACT_APP_MAINTENANCE is true', () => {
  // Ensure module uses the env variable by resetting modules before require
  jest.resetModules();
  process.env.REACT_APP_MAINTENANCE = 'true';
  const { default: AppWithMaintenance } = require('./App');

  render(
    <BrowserRouter>
      <AppWithMaintenance />
    </BrowserRouter>
  );

  const maintenanceHeading = screen.getByRole('heading', { name: /404 — Website Under Maintenance/i });
  expect(maintenanceHeading).toBeInTheDocument();

  // cleanup
  delete process.env.REACT_APP_MAINTENANCE;
  jest.resetModules();
});

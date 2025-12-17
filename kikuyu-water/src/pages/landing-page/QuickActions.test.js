import { render, screen, fireEvent } from '@testing-library/react';
import QuickActions from './QuickActions';

test('shows supervisors when Report Issue clicked and contact links are correct', () => {
  render(<QuickActions />);

  const btn = screen.getByRole('button', { name: /report issue/i });
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);

  expect(screen.getByText(/Contact Supervisors/i)).toBeInTheDocument();

  const muguga = screen.getByRole('link', { name: /call muguga supervisor at \+254 758 578 091/i });
  expect(muguga).toBeInTheDocument();
  expect(muguga).toHaveAttribute('href', 'tel:+254758578091');

  const karai = screen.getByRole('link', { name: /call karai supervisor at \+254 758 578 092/i });
  expect(karai).toBeInTheDocument();
  expect(karai).toHaveAttribute('href', 'tel:+254758578092');

  const wangige = screen.getByRole('link', { name: /call wangige supervisor at \+254 758 578 093/i });
  expect(wangige).toBeInTheDocument();
  expect(wangige).toHaveAttribute('href', 'tel:+254758578093');
});
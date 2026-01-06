import { render, screen, fireEvent } from '@testing-library/react';
import QuickActions from './QuickActions';

test('shows supervisors when Report Issue clicked and contact links are correct', () => {
  render(<QuickActions />);

  const btn = screen.getByRole('button', { name: /report issue/i });
  expect(btn).toBeInTheDocument();

  fireEvent.click(btn);

  expect(screen.getByText(/Contact Supervisors/i)).toBeInTheDocument();

  const muguga = screen.getByRole('link', { name: /call Muguga Supervisor at \+254 714 370 990 /i });
  expect(muguga).toBeInTheDocument();
  expect(muguga).toHaveAttribute('href', 'tel:+254714370990');

  const karai = screen.getByRole('link', { name: /call Karai Supervisor at \+254 722 731 026/i });
  expect(karai).toBeInTheDocument();
  expect(karai).toHaveAttribute('href', 'tel:+254722731026');

  const kikuyu = screen.getByRole('link', { name: /call Kikuyu Supervisor at \+254 728 578 093/i });
  expect(kikuyu).toBeInTheDocument();
  expect(kikuyu).toHaveAttribute('href', 'tel:+254728578093');

  const wangige = screen.getByRole('link', { name: /call Wangige Supervisor at \+254 724 705 173 /i });
  expect(wangige).toBeInTheDocument();
  expect(wangige).toHaveAttribute('href', 'tel:+254724705173');
});
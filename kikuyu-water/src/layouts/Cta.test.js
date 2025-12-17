import { render, screen } from '@testing-library/react';
import Cta from './Cta';

test('contact links exist with correct hrefs', () => {
  render(<Cta />);

  const tel = screen.getByRole('link', { name: /call kikuyu water at \+254 758 578 098/i });
  expect(tel).toBeInTheDocument();
  expect(tel).toHaveAttribute('href', 'tel:+254758578098');

  const mail = screen.getByRole('link', { name: /email kikuyu water/i });
  expect(mail).toBeInTheDocument();
  expect(mail).toHaveAttribute('href', 'mailto:info@kikuyuwater.co.ke');

  const map = screen.getByRole('link', { name: /open kikuyu water location in google maps/i });
  expect(map).toBeInTheDocument();
  expect(map.getAttribute('href')).toContain('google.com/maps');
});
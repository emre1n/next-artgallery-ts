import { signOut } from 'next-auth/react';

import NavBar from '@/components/layout/NavBar';
import { User } from '@prisma/client';
import { render, screen } from '@testing-library/react';

jest.mock('next-auth/react');

test('renders sign in link on navbar', () => {
  const currentUser: User = {
    id: 'abcde',
    name: 'test',
    email: 'e@e.com',
    emailVerified: null,
    image: null,
    hashedPassword: 'abcd',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  render(<NavBar currentUser={undefined} />);
  const signInLink = screen.getByRole('button', { name: /sign in/i });
  expect(signInLink).toBeInTheDocument();
});

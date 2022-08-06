import {render, screen}  from '@testing-library/react';
import AboutPage from './components/AboutPage';
import SignUp from './components/SignUp';
import App from './App';
import Shopping from './components/Shopping';

test('aboutPage Route displays with created by content', () => {
  render(<AboutPage />);
  const text = screen.getByText("Hi, I'm Manda and this is my baking shop.");
  expect(text).toBeInTheDocument();
});

test('SignUp page appears', () => {
  render (<SignUp />);
  const text = screen.getByText('Sign Up!');
  expect(text).toBeInTheDocument();
})

// test('Shopping Route displays products', () => {
//   render(<Shopping />);
//   const showprods = screen.getByTitle('showprods');
//   expect(showprods).toBeInTheDocument();
// });
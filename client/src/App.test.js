import {render, screen}  from '@testing-library/react';
import AboutPage from './components/AboutPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import App from './App';

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

// test('handleSubmit function appears', () => {
//   render (<Login />);
//   const function = screen.getByFunction('Sign Up!');
//   expect(function).toBeInTheDocument();
// })
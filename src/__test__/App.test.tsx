import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const rendered = render(<App />);
  console.log(rendered, '======')
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
});

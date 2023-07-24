/* eslint-disable no-unused-vars */
const s = {
  style: {
    fontSize: '60px',
  },
};

import { Children, cloneElement } from 'react';

const Parent = ({ children }) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, { ...s });
    return newChild;
  });
};

export const Home = () => {
  return (
    <Parent>
      <p>Ola</p>
    </Parent>
  );
};

import React from 'react';
import styled from 'styled-components';

export interface Props {}

/**
 * A custom Thing component. Neat!
 */
export const Thing: React.FC = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export const SimpleStyledH1 = styled.h1`
  color: red;
`;
export const SimpleStyledH1Application = (): JSX.Element => {
  return <SimpleStyledH1>Hi</SimpleStyledH1>;
};

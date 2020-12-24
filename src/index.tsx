import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};
export const SimpleStyledH1 = styled.h1`
  color: red;
`;
export const SimpleStyledH1Application = (): JSX.Element => {
  return <SimpleStyledH1>Hi</SimpleStyledH1>;
};

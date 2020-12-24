import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SimpleStyledH1Application, Props } from '../src';

const meta: Meta = {
  title: 'Simple Styled H1 Application',
  component: SimpleStyledH1Application,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <SimpleStyledH1Application {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

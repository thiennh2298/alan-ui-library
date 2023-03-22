import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alan/Common/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttonType: 'primary',
  size: 'middle',
  children: 'Primary',
};

export const Default = Template.bind({});
Default.args = {
  buttonType: 'default',
  size: 'middle',
  children: 'Default',
  className: 'text-red-500'
};

export const Ghost = Template.bind({});
Ghost.args = {
  buttonType: 'ghost',
  size: 'middle',
  children: 'Ghost'
};

export const Link = Template.bind({});
Link.args = {
  buttonType: 'link',
  size: 'middle',
  children: 'Link'
};

export const Text = Template.bind({});
Text.args = {
  buttonType: 'text',
  size: 'middle',
  children: 'Text'
};

export const Dashed = Template.bind({});
Dashed.args = {
  buttonType: 'dashed',
  size: 'middle',
  children: 'Dashed',
};

export const Large = Template.bind({});
Large.args = {
  buttonType: 'default',
  size: 'large',
  children: 'Large'
};

export const Small = Template.bind({});
Small.args = {
  buttonType: 'default',
  size: 'small',
  children: 'Small'
};

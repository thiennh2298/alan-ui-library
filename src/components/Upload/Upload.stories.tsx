import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Upload } from './Upload';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alan/Common/Upload',
  component: Upload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Upload>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Upload> = (args) => <Upload {...args}/>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttonType: 'primary',
  size: 'middle',
  children: 'Primary'
};

export const Default = Template.bind({});
Default.args = {}
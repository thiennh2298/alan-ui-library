import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alan/Common/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({});
Default.args = {
  type: "default",
  spinnerClass: "mt-4 ml-4",
  spinnerColor: '#ffa940',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  type: "full"
};
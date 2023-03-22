import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from './Notification';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alan/Common/Notification',
  component: Notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Notification>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Success = Template.bind({});
Success.args = {};

export const Error = Template.bind({});
Error.args = {};

export const Warning = Template.bind({});
Warning.args = {};

export const Info = Template.bind({});
Info.args = {};
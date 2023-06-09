import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextEditor } from './TextEditor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alan/Common/TextEditor',
  component: TextEditor,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextEditor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextEditor> = (args) => <TextEditor {...args} />
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({});
Default.args = {};
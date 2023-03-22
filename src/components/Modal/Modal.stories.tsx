import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Alan/Common/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [toggle, setToggle] = React.useState(false)
  return (
    <>
      <Button buttonType="primary" onClick={() => setToggle(true)}>Open modal</Button>
      {toggle && <Modal {...args} visible={toggle} onClose={() => setToggle(false)}/>}
    </>
  )
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = Template.bind({});
Default.args = {
  children: 'This is a modal',
};


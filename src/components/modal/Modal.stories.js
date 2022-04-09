import React from "react";

import { Modal } from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Modal {...args} />;

export const DefaultModal = Template.bind({});

DefaultModal.args = {
  text: "Hello World",
  buttonText: "Click",
}

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Hello",
  buttonText: "Click here"
};

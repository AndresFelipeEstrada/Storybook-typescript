import type { Meta } from "@storybook/html";
import { ButtonOptions, createButton } from "./button";

export default {
  title: "Design System/Atoms/Button",
} satisfies Meta<typeof createButton>;

const Template = ({ label, ...args }: ButtonOptions) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

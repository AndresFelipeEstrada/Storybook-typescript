import { Meta, StoryFn } from "@storybook/html";
import { CardOptions, createCard } from "./card";

const meta: Meta<CardOptions> = {
  title: "Design System/Atoms/Card",
  tags: ["autodocs"],
  argTypes: {
    size: {
      name: "size",
      description: "Tamaño del botón",
      table: {
        defaultValue: {
          summary: "small",
        },
      },
      options: ["small", "medium"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

const Template: StoryFn<CardOptions> = ({ size }: CardOptions) => {
  return createCard({ title: "Title", description: "Description", size });
};

export const Default = Template.bind({});
Default.args = {
  size: "small",
};

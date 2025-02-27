import { Meta, StoryFn } from "@storybook/html";
import { CardOptions, createCard } from "./card";

export default {
  title: "Design System/Atoms/Card",
  argTypes: {
    size: {
      name: "size",
      options: ["small", "medium"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<CardOptions>;

const Template: StoryFn<CardOptions> = ({ size }: CardOptions) => {
  return createCard({ title: "Title", description: "Description", size });
};

export const Default = Template.bind({});

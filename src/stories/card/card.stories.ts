import { Meta, StoryFn } from "@storybook/html";
import { CardOptions, createCard } from "./card";

export default {
  title: "Design System/Atoms/Card",
} satisfies Meta<typeof createCard>;

const Template: StoryFn<CardOptions> = ({}: CardOptions) => {
  return createCard({ title: "Title", description: "Description" });
};

export const Default = Template.bind({});

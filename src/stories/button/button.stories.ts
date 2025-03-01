import type { Meta, StoryFn } from "@storybook/html";
import { ButtonOptions, createButton } from "./button";
import { fn } from "@storybook/test";
import { withActions } from "@storybook/addon-actions/decorator";
import { ClickAndCheckClassTest, ClickTest } from "./button.stories.test";

const meta: Meta<ButtonOptions> = {
  title: "Design System/Atoms/Button",
  args: {
    onClick: fn(),
  },
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", ".button"],
    },
  },
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.style.margin = "24px";
      const storyElement = story();

      if (typeof storyElement == "string") {
        decorator.innerHTML = storyElement;
      } else {
        decorator.appendChild(storyElement);
      }
      return decorator;
    },
    withActions,
  ],
  argTypes: {
    label: {
      name: "label",
      defaultValue: "label",
      description: "Texto del botón",
      table: {
        summary: "Button",
      },
      control: {
        type: "text",
      },
    },
    style: {
      name: "style",
      description: "Estilo del botón",
      table: {
        summary: "filled",
      },
      options: ["filled", "outlined"],
      control: {
        type: "radio",
      },
    },
    size: {
      name: "size",
      description: "Tamaño del botón",
      table: {
        summary: "large",
      },
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    onClick: {
      description: "Event",
      action: "clicked",
    },
  },
};

export default meta;

const Template: StoryFn<ButtonOptions> = ({
  label,
  ...args
}: ButtonOptions) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  size: "large",
  style: "filled",
};
Default.play = ClickTest;
Default.play = ClickAndCheckClassTest;

import { expect } from "@storybook/test";
import { within, userEvent } from "@storybook/test";
import type { StoryContext } from "storybook/internal/types";

export const ClickTest = async ({ canvasElement }: StoryContext) => {
  const button = selectButtonByText("Button", canvasElement);
  expect(button).toBeTruthy();
};

export const ClickAndCheckClassTest = async ({
  canvasElement,
}: StoryContext) => {
  const button = await selectButtonByText("Button", canvasElement);

  expect(button.classList.contains("button--filled")).toBe(true);
};

const selectButtonByText = async (
  element: string,
  canvasElement: HTMLElement,
) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText(element);
  await userEvent.click(button);
  return button;
};

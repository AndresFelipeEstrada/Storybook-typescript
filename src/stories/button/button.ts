import "./button.css";

type ButtonStyle = "outlined" | "filled";

type ButtonSize = "small" | "medium" | "large";

export interface ButtonOptions {
  style?: ButtonStyle;
  size?: ButtonSize;
  label?: string;
}

export const createButton = ({
  size = "large",
  style = "filled",
  label = "Button",
}: ButtonOptions): HTMLButtonElement => {
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = label;

  button.classList.add("button", `button--${style}`, `button--${size}`);
  return button;
};

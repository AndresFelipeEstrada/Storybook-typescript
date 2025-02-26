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
  button.role = "button";
  button.textContent = label;

  button.className = ["button", `button--${style}`, `button--${size}`].join(
    " ",
  );
  return button;
};

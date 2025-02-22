import "./button.css";

type ButtonStyle = "outlined" | "filled" | "ghost";

type ButtonSize = "small" | "medium" | "large";

export interface ButtonOptions {
  style?: ButtonStyle;
  size?: ButtonSize;
  label?: string;
}
export const createButton = ({
  style = "outlined",
  size = "small",
  label = "",
}: ButtonOptions): HTMLButtonElement => {
  const button = document.createElement("button");
  button.type = "submit";
  button.role = "button";
  button.innerHTML = label;

  // Añadir clases según estilo y tamaño
  button.className = `${style}-${size}`;
  return button;
};

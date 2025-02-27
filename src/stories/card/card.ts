import "./card.css";

type CardSize = "small" | "medium";

export interface CardOptions {
  size?: CardSize;
  title: string;
  description: string;
}

export const createCard = ({
  size = "medium",
  title,
  description,
}: CardOptions): HTMLDivElement => {
  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  const avatarContainer = document.createElement("div");
  const cardContent = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  wrapper.appendChild(card);
  card.appendChild(avatarContainer);
  card.appendChild(cardContent);
  avatarContainer.appendChild(img);
  cardContent.appendChild(h3);
  cardContent.appendChild(p);

  h3.textContent = title;
  p.textContent = description;

  wrapper.className = "wrapper";
  card.className = ["card", `card--${size}`].join(" ");
  avatarContainer.className = "card__avatar";
  cardContent.className = "card__content";

  return wrapper;
};

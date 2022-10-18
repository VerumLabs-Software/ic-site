export const createImage = data => {
  const container = document.createElement("div");
  const image = document.createElement("img");

  container.classList.add("image");

  image.src = data.src;
  image.alt = data.alt || "";

  container.appendChild(image);

  return container;
};

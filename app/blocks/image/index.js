export const createImage = data => {
  const container = document.createElement("div");
  const picture = document.createElement("picture");
  const webp = document.createElement("source");
  const image = document.createElement("img");

  container.classList.add("image");

  image.src = data.src;
  image.alt = data.alt || "";

  picture.appendChild(webp);
  picture.appendChild(image);

  container.appendChild(picture);

  return container;
};

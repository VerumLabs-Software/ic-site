const {Modernizr, devicePixelRatio} = window;

export const getDPRPostfix = () => {
  const dpr = Math.min(Math.max(devicePixelRatio, 1), 3);
  return dpr > 1 ? `@${dpr}x` : "";
};

export const getImageExtension = (ext = "jpg") => {
  return Modernizr.webp ? "webp" : ext;
};

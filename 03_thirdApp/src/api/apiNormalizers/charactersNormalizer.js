export const _normalizeResponse = (res) => ({
  ...res,
  thumbnail: `${res.thumbnail.path}.${res.thumbnail.extension}`,
});

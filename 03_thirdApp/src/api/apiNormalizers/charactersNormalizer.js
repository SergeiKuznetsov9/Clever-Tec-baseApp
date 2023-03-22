export const _normalizeCharacter = (res) => ({
  ...res,
  thumbnail: `${res.thumbnail.path}.${res.thumbnail.extension}`
});

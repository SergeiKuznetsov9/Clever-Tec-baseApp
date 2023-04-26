export const _normalizeResponse = (res) => ({
  ...res,
  thumbnail: `${res.thumbnail.path}.${res.thumbnail.extension}`,
});

export const _normalizeResponseByName = (res) => {
  const url = res.urls.find((url) => url.type === "detail").url;
  return url ? { url, name: res.name } : null;
};

export const _normalizeCharacter = (res) => {
  return {
    name: res.name,
    description: res.description,
    thumbnail: `${res.thumbnail.path}.${res.thumbnail.extension}`,
    homepage: res.homepage,
    wiki: res.wiki,
  };
};

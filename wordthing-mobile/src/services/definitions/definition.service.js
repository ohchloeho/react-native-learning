export const definitionRequest = (wordSearched) => {
  return fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${wordSearched.toLowerCase()}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const rhymesRequest = (wordSearched) => {
  return fetch(
    `https://rhymebrain.com/talk?function=getRhymes&word=${wordSearched.toLowerCase()}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

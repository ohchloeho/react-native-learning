import React, { useState, createContext, useEffect } from "react";
import { rhymesRequest } from "./rhymes.service";

export const RhymeContext = createContext();

export const RhymeContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rhymeResults, setRhymeResults] = useState([]);
  const [wordSearch, setWordSearch] = useState("");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setWordSearch(searchKeyword);
  };

  useEffect(() => {
    if (wordSearch.length) {
      setTimeout(() => {
        rhymesRequest(wordSearch)
          .then((result) => {
            setIsLoading(false);
            setRhymeResults(result);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
          });
      }, 1000);
    }
  }, [wordSearch]);

  return (
    <RhymeContext.Provider
      value={{
        isLoading,
        error,
        rhymeResults,
        wordSearch,
        searchRhymes: onSearch,
      }}
    >
      {children}
    </RhymeContext.Provider>
  );
};

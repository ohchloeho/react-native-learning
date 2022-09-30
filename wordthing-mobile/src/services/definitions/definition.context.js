import React, { createContext, useEffect, useState } from "react";
import { definitionRequest } from "./definition.service";

export const DefinitionContext = createContext();

export const DefinitionContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [definitions, setDefinitions] = useState([]);
  const [wordSearch, setWordSearch] = useState("");

  // method that triggers and is passed to inputs
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setWordSearch(searchKeyword);
  };

  // method to give data context
  const retrieveDefinitions = (word) => {
    setTimeout(() => {
      definitionRequest(word)
        .then((result) => {
          setIsLoading(false);
          setDefinitions(result[0]);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000); // load time
  };

  useEffect(() => {
    if (!wordSearch.length) {
      return;
    }
    retrieveDefinitions(wordSearch);
  }, [wordSearch]);

  return (
    <DefinitionContext.Provider
      value={{ definitions, isLoading, error, search: onSearch, wordSearch }}
    >
      {children}
    </DefinitionContext.Provider>
  );
};

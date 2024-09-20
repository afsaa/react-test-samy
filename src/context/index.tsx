import React, { createContext, useState } from 'react';

interface SearchContextProps {
  query: string;
  updateQuery: (newQuery: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({ query: '', updateQuery: () => {} });

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState<string>('');

  const updateQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  return <SearchContext.Provider value={{ query, updateQuery }}>{children}</SearchContext.Provider>;
};

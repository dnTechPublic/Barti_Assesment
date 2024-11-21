import { Character } from '@/components/SearchBar';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type SearchContext = {
  searchResults: Character[];
  setSearchResults: (result: Character[]) => void;
}

const SearchContext = createContext<SearchContext | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<Character[]>([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
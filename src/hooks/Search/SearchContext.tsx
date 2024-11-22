import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Character } from '@/types/character';
type SearchContext = {
  searchResults: Character[];
  setSearchResults: (result: Character[]) => void;
  currentQuery: string;
  setCurrentQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContext | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [currentQuery, setCurrentQuery] = useState<string>('');

  return (
    <SearchContext.Provider value={{ currentQuery, setCurrentQuery,searchResults, setSearchResults }}>
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
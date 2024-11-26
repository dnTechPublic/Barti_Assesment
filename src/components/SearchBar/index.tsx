import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useMemo } from 'react';
import { useSearch } from '@/hooks/Search/SearchContext';
import { Character } from '@/types/character';
import { FilterResult } from '@/types/filterResult';
import { debounce } from 'lodash';



const fetchData = async (search: string): Promise<FilterResult> => {
  const response = await fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(search)}`);
  return response.json();
}

export default function SearchBar({ onSearchResults }: { onSearchResults: (searchResults: Character[]) => void }) {
  const [search, setSearch] = useState('');
  const { currentQuery, setCurrentQuery } = useSearch();

  const debounceFn = useMemo(() => debounce((value: string) => {
    setSearch(value);
  }, 300), []);

  const query = useQuery({
    queryKey: ['search', search],
    queryFn: () => fetchData(search),
    enabled: !!search
  });

  useEffect(() => {
    const results = query?.data;
    if (results) {
      if (results.info.count === 1) { onSearchResults([results.data as Character]) }
      else onSearchResults(results.data as Character[] ?? [])
    }
  }, [query, onSearchResults]);

  useEffect(() => {
    setCurrentQuery(search);
  }, [search, setCurrentQuery]);


  return <div className="flex flex-grow text-black bg-[#F1F2F3] rounded-[100px] h-12 px-4">
    <input placeholder="Find a character..."
      className="bg-transparent text-black placeholder:text-[#A7B6C5] flex-grow"
      value={currentQuery}
      onChange={(e) => {
        debounceFn(e.target.value);
        setCurrentQuery(e.target.value);  // Update UI immediately
      }}
    />
  </div>;
}

import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';


export type FilterResult = {
  "info": {
    "count": number
  },
  "data": Array<Character> | Character,
}

export type Character = {
  "_id": number,
  "films": Array<string>,
  "shortFilms": Array<string>,
  "tvShows": Array<string>,
  "videoGames": Array<string>,
  "parkAttractions": Array<string>,
  "allies": Array<string>,
  "enemies": Array<string>,
  "name": string,
  "imageUrl": string,
  "url": string,
  "sourceUrl": string,
  "createdAt": string,
  "updatedAt": string,
}

const fetchData = async (search: string): Promise<FilterResult> => {
  const response = await fetch(`https://api.disneyapi.dev/character?name=${encodeURIComponent(search)}`);
  return response.json();
}

export default function SearchBar({ onSearchResults }: { onSearchResults: (searchResults: Character[]) => void }) {
  const [search, setSearch] = useState('');
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


  return <div className="flex flex-grow text-black bg-[#F1F2F3] rounded-[100px] h-12 px-4">
    <input placeholder="Find a character..."
      className="bg-transparent text-black placeholder:text-[#A7B6C5] flex-grow"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>;
}

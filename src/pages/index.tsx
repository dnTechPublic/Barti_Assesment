import CharacterCard from '@/components/CharacterCard';
import { useSearch } from '@/hooks/Search/SearchContext';

export default function Home() {
  const { searchResults } = useSearch();

  return (
    <div className="h-full flex flex-wrap gap-4">
      {searchResults.map(c => <CharacterCard key={c._id} character={c} />)}
    </div>
  )
}

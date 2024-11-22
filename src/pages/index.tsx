import CharacterCard from '@/components/CharacterCard';
import Featured from '@/components/Featured';
import Default from '@/components/Default';
import { useSearch } from '@/hooks/Search/SearchContext';

export default function Home() {
  const { currentQuery, searchResults } = useSearch();

  return (
    <div className="h-full flex flex-col overflow-hidden mx-24">

      {searchResults && currentQuery !== ''
        ? (
          <div className="flex flex-col h-full bg-[#F1F2F3]">
            <p className='text-[#222222] text-4xl self-center my-8'>Search Results - {currentQuery}</p>
            <div className="flex flex-wrap gap-4 overflow-auto flex-1 px-28">
              {searchResults.map(c => <CharacterCard key={c._id} character={c} />)}
            </div>
            <div className="mt-4">
              <Featured />
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col h-full bg-[#F1F2F3]  overflow-auto">
              <Default />
            </div>
            <div className="flex-grow flex-shrink-0 mt-4">
              <Featured />
            </div>
          </>

        )}



    </div>
  )
}

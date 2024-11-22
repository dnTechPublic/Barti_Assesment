import { Character } from "../SearchBar";
import CharacterCard from "../CharacterCard";
import { useQueries } from "@tanstack/react-query";
import { FilterResult } from "../SearchBar";

const fetchFeatureCharacter = async (id: number): Promise<FilterResult> => {
    const response = await fetch(`https://api.disneyapi.dev/character/${(id)}`);
    return response.json();
}

// harcode valid ids
// we could use a random number generator to get a random set of ids except that we have no idea
// if the generated id is valid or not
// Probably a better idea is to query the all characters endpoint with a page size of 4
const ids = [308, 159, 210, 45];

export default function Featured() {

    const { data, pending } = useQueries({
        queries: ids.map((id) => ({
            queryKey: [id],
            queryFn: () => fetchFeatureCharacter(id),
        })),
        combine: (results) => {
            return {
                data: results.map((result) => result.data),
                pending: results.some((result) => result.isPending),
            }
        }
    })

    if (pending) return <p>Loading...</p>;

    return (
        <div className="flex flex-col shrink-0 w-full bg-[#054553] pt-10 pb-20">
            <h1 className="text-white text-center text-4xl mb-10">Featured Characters!</h1>
            <div className="flex justify-center gap-4">
                {data.map(c => {
                    // we are safe to typecast to a Character because of the endpoint we used
                    // returning null here is not ideal. Better to build some logic into the CharacterCard that 
                    // would show something if the character is null
                    if (c == null) return null;
                    const character = c.data as Character;
                    return c.data && <CharacterCard character={character} key={character._id} />
                })}
            </div>
        </div>
    )
}   
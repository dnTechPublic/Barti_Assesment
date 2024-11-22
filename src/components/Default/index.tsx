import CharacterCard from "../CharacterCard";
import { useQueries } from "@tanstack/react-query";
import { FilterResult } from "@/types/filterResult";
import { Character } from "@/types/character";

const fetchDefaultCharacter = async (id: number): Promise<FilterResult> => {
    const response = await fetch(`https://api.disneyapi.dev/character/${(id)}`);
    return response.json();
}

const ids = [308, 159, 210, 45, 1084, 843, 390, 444];

export default function Default() {

    const { data, pending } = useQueries({
        queries: ids.map((id) => ({
            queryKey: [id],
            queryFn: () => fetchDefaultCharacter(id),
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
        <div className="flex flex-col shrink-0 w-full pt-10 pb-20 max-h-[619px] h-[619px]">
            <div className="flex flex-wrap justify-center gap-4">
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
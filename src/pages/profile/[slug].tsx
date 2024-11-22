import { useRouter } from "next/router";
import { useQuery } from '@tanstack/react-query';
import { FilterResult, Character } from "@/components/SearchBar";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ActionButton } from "@/components/ActionButton";
import Featured from "@/components/Featured";
const fetchData = async (id: string): Promise<FilterResult> => {
    const response = await fetch(`https://api.disneyapi.dev/character/${(id)}`);
    return response.json();
}

export default function Profile() {

    const [character, setCharacter] = useState<Character | null>(null);
    const router = useRouter();
    const { slug } = router.query;

    const query = useQuery({
        queryKey: ['character', slug],
        queryFn: () => fetchData(slug as string),
        enabled: !!slug
    });

    useEffect(() => {
        const results = query?.data;
        if (results) {
            setCharacter(results.data as Character)
        }
    }, [query])

    if (!character) return null;

    return (
        <div className="flex flex-col bg-[#F1F2F3] h-full pt-[60px] mx-[100px] text-[#222222]">
            <div className="flex px-[80px]">
                <title>{character.name}</title>
                <div className="relative h-[529px] w-[439px] overflow-hidden rounded-lg">
                    <Image fill src={character?.imageUrl} alt="img" className="w-full object-cover" />
                </div>
                <div className="flex flex-col h-[620px] w-[561px] ml-16 ">
                    <h2 className="text-[40px] font-bold mb-6">{character.name}</h2>
                    <p className="text-[#888888] text-[12px] mb-5">{`Last Updated ${new Date(character.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`}</p>
                    {character.films.length > 0 && <>
                        <h3 className="text-[#222222] text-[18px] font-bold">Featured Films</h3>
                        <ul className="list-disc pl-5 mb-10">
                            {character.films.map((film) => (
                                <li className="text-[15px] font-normal" key={film}>{film}</li>
                            ))}
                        </ul>
                    </>}
                    {character.shortFilms.length > 0 && <>
                        <h3 className="text-[#222222] text-[18px] font-bold">Short Films</h3>
                        <ul className="list-disc pl-5 mb-10">
                            {character.shortFilms.map((film) => (
                                <li key={film}>{film}</li>
                            ))}
                        </ul>
                    </>}
                    {character.tvShows.length > 0 && <>
                        <h3 className="text-[#222222] text-[18px] font-bold">TV Shows</h3>
                        <ul className="list-disc pl-5 mb-10">
                            {character.tvShows.map((show) => (
                                <li key={show}>{show}</li>
                            ))}
                        </ul>
                    </>}

                    <ActionButton onClick={() => router.push(character.sourceUrl)} className="w-[270px] h-[48px] rounded-lg">Explore More Character Details</ActionButton>
                </div>
            </div>
            <Featured />
        </div>
    )



}
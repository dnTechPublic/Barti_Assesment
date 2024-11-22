import { Character } from "@/components/SearchBar";
import Image from "next/image";
import { LinkButton } from "@/components/LinkButton";
import { useRouter } from "next/router";
export default function CharacterCard({ character }: { character: Character }) {

    const router = useRouter();

    const featuredFilms = character.films
    .map(film => `"${film}"`)
    .join(", ");

    return <div className="flex flex-col bg-white w-[248px] h-[416px]">

        <Image src={character.imageUrl} alt={character.name} width={248} height={248} className=" object-cover h-full max-h-[248px]" />
        <div className="flex flex-col items-center flex-grow p-4">
            <p className="text-[#222222] text-lg font-bold text-center">{character.name}</p>
            <div className="flex flex-col flex-grow h-[50px] w-[232px]">
                <p className="text-[#222222] text-[15px] font-bold text-center">Featured Films</p>
                <p className="text-[#222222] text-[15px] text-center line-clamp-2">{featuredFilms}</p>
            </div>

            <LinkButton onClick={() => router.push(`/profile/${character._id}`)} className="text-[#222222] text-[15px] font-bold text-center">View Profile</LinkButton>
        </div>
    </div>
}   
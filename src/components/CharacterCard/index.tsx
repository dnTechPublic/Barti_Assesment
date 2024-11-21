import { Character } from "@/components/SearchBar";
import Image from "next/image";
export default function CharacterCard({ character }: { character: Character }) {
    
    return <div className="flex flex-col bg-white w-[248px] h-[416px]">
        <Image src={character.imageUrl} alt={character.name} width={248} height={248} className=" object-cover h-full max-h-[248px]" />
        <p className="text-black font-sans">{character.name}</p>
        <p>{character.films.map(f => <p className="text-black" key={f}>{f}</p>)}</p>
        <button>View Profile</button>
    </div>
}   
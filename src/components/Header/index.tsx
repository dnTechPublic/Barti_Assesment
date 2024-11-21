import React from 'react';
import Image from 'next/image';
import headerLogo from '@/assets/image/logo.png';
import SearchBar from '../SearchBar';
import Account from '../Account';
import { useSearch } from '@/hooks/Search/SearchContext';
export default function Header() {

    const { setSearchResults } = useSearch();

    return (
        <header className="flex items-center bg-white h-28 px-[120px] py-[32px] gap-[40px]">
            <Image src={headerLogo} alt="Header Logo" />
            <SearchBar onSearchResults={(searchResults) => setSearchResults(searchResults)} />
            <Account />
        </header>
    );
};



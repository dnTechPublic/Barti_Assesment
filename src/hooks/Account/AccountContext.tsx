import React, { createContext, useContext, ReactNode, useState } from 'react';

type User = {
   name: string;
    age: number;
    location: string;
    favoriteDisneyCharater: string;
    favoriteDisneyMovie: string;
    favoriteDisneyLand: string
}

export type AccountContext = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const AccountContext = createContext<AccountContext | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  return (
    <AccountContext.Provider value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error('useAccount must be used within an AccountProvider');
  }
  return context;
}
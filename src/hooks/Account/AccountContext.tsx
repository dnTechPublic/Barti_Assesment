import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { User } from '@/types/User';

type AccountContext = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const AccountContext = createContext<AccountContext | undefined>(undefined);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [cookies, setCookie] = useCookies(['user']);
  const [currentUser, setCurrentUser] = useState<User | null>(cookies.user)

  useEffect(() => {
    setCookie('user', JSON.stringify(currentUser));
  }, [currentUser, setCookie]);

  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
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
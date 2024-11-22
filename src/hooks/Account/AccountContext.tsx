import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { User } from '@/types/user';

type AccountContext = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const AccountContext = createContext<AccountContext | undefined>(undefined);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [currentUser, setCurrentUser] = useState<User | null>(cookies.user)

  useEffect(() => {
    if (currentUser) {
      setCookie('user', JSON.stringify(currentUser), { sameSite: 'strict' });
    }
    else {
      removeCookie('user');
    }
  }, [currentUser, setCookie, removeCookie]);

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
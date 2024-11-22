import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "@/hooks/Search/SearchContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <SearchProvider >
        <main className={`${lato.variable} font-sans relative h-full`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </SearchProvider>
    </QueryClientProvider>
  )
}

import { PropsWithChildren } from "react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }: PropsWithChildren) {
    return (

        <div className="flex flex-col h-full relative">
            <Header />
            {children}
            <Footer />
        </div>

    )
}
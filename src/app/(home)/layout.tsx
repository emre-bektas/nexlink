import type {Metadata} from "next";
import {Header} from "@/components/static/header";
import {apiMenu} from "@/utils/static/sidebar";
import {SidebarUI} from "@/components/ui/sidebar";
import MainSvg from "@/components/ui/main-svg";

export const metadata: Metadata = {
    title: "NexLink API Template",
    description: "NexLink API reference template",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <>
            <div className="b-grid">
                <div className="b-grid-gradiant"></div>
            </div>
            <Header/>
            <div className="px-4 mx-auto max-w-8xl sm:px-6 md:px-8 flex gap-2 relative  flex-col md:flex-row">
                <SidebarUI menu={apiMenu}/>
                <div className="flex-1">
                    <div className=" flex h-full flex-col px-0 md:px-8">
                        <MainSvg />
                        <main className="flex-auto">
                            <article className="flex h-full flex-col md:pt-10 pb-10">
                                {children}
                            </article>
                        </main>
                    </div>
                </div>
            </div>

        </>

    );
}

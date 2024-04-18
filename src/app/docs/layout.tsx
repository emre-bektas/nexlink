import type {Metadata} from "next";
import {HeaderDoc} from "@/components/static/docs/header";
import {docMenu} from "@/utils/static/sidebar";
import {SidebarUI} from "@/components/ui/sidebar";
import MainSvg from "@/components/ui/main-svg";


export const metadata: Metadata = {
    title: "NexLink UI Docs",
    description: "NexLink UI Docs Template",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderDoc/>
            <div className="px-4 mx-auto max-w-8xl sm:px-6 md:px-8 flex gap-2 relative flex-col md:flex-row">
                <SidebarUI menu={docMenu} startPathname={"/docs"}/>
                <div className="flex-1 min-w-0">
                    <div className=" flex h-full flex-col px-0  md:px-8">
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

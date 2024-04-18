import {Inter} from "next/font/google";
import "@/globals.css";
import Providers from "@/providers";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" suppressHydrationWarning>
        <body className={inter.className} cz-shortcut-listen="true">
        <Providers>
            <div className="b-grid">
                <div className="b-grid-gradiant"></div>
            </div>

            {children}

        </Providers>
        </body>
        </html>
    );
}

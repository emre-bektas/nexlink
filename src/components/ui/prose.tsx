export default function ProseComponent({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className="flex-auto prose dark:prose-invert w-full [html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl">
            {children}
        </div>
    )
}

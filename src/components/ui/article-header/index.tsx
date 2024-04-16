interface Props {
    title : string;
    subtitle? : string;
}

const ArticleHeader = ({ title, subtitle }: Props) => (
    <header className="relative mb-4">
        <div className="mt-0.5 space-y-2.5">
            <div
                className="h-5 text-primary dark:text-primary-light text-sm font-semibold">
                {subtitle}
            </div>
            <div className="flex items-center">
                <h1
                    className="inline-block text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">
                    {title}
                </h1>
            </div>
        </div>
    </header>
)

export default ArticleHeader;

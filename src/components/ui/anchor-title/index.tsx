import React from 'react';
import { Link2 } from 'lucide-react';
import classNames from "classnames";
import {cn} from "@/utils/cn";

type IndexProps = {
    children: React.ReactNode;
    id?: string;
    isBordered?: boolean;
    className?: string;
    as?: keyof React.JSX.IntrinsicElements;
};

export default function Index({ children, id, as = 'h2' , isBordered = true , className}: IndexProps) {
    return React.createElement(
        as,
        {
            className: cn(
                "scroll-mt-24",
                {
                    " border-b border-zinc-900/5 pb-4 dark:border-white/5": isBordered,
                },
                className,
            ),
            id: id
        },
        id ? (
            <a
                className="group text-inherit no-underline hover:text-inherit relative"
                href={"#" + id}>
                <div
                    className="absolute hidden opacity-0 transition group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 top-1/2 -translate-y-1/2 -left-7">
                    <div
                        className="group/anchor flex items-center justify-center p-0.5 h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                        <Link2
                            className="h-4 w-4 stroke-zinc-500 rotate-45 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"/>
                    </div>
                </div>
                {children}
            </a>
        ) : (
            children
        )
    );
}

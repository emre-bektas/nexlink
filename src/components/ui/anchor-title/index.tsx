import {Link2} from "lucide-react";

export default function Index({children, id}: { children: React.ReactNode, id?: string }) {


    if (!id){
        return (
            <h2 className="scroll-mt-24 ">
                {children}
            </h2>
        )
    }

    return (
        <h2 className="scroll-mt-24" id={id}>
            <a
                className="group text-inherit no-underline hover:text-inherit" href={"#" + id}>
                <div
                    className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                    <div
                        className="group/anchor flex items-center justify-center p-0.5 h-5 w-5  rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                        <Link2 className="h-5 w-5 stroke-zinc-500 rotate-45 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white" />
                    </div>
                </div>
                {children}
            </a>
        </h2>
    )
}

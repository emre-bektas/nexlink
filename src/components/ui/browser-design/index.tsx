import React from "react";
import {cn} from "@/utils/cn";

export default function BrowserHeaderDesign({children , className}: {children: React.ReactNode , className?: string}) {
    return (
        <div
            className="relative no-prose z-10 w-full border-1 border-default-600/10 rounded-medium overflow-hidden pointer-events-auto">
            <div
                className="sticky left-0 top-0 z-10 flex h-8 w-full items-center justify-between bg-default-400/5 px-4">
                <div className="flex basis-1/3 items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-danger-500"></div>
                    <div className="w-3 h-3 rounded-full bg-warning-500"></div>
                    <div className="w-3 h-3 rounded-full bg-success-500"></div>
                </div>
                <div className="flex h-full basis-1/3 items-center justify-center"></div>
                <div className="flex basis-1/3"></div>
            </div>
            <div className={cn("relative w-full" , className)}>
                {children}
            </div>
        </div>
    )
}

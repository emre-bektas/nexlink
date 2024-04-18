"use client";
import React, {useRef, useState} from "react";
import {Card, CardBody} from "@nextui-org/card";
import classNames from "classnames";
import {cn} from "@/utils/cn";

interface MousePosition {
    x: number;
    y: number;
}

interface Props {
    title: string;
    description?: string;
    href?: string;
    Icon: React.ComponentType<any>
}

const SvgCard = ({cn}: any) => (
    <svg aria-hidden="true"
         className={classNames("absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]", cn)}>
        <defs>
            <pattern id=":R5ahdsqla:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%"
                     y="-6">
                <path d="M.5 56V.5H72" fill="none"></path>
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R5ahdsqla:)"></rect>
        <svg x="50%" y="-6" className="overflow-visible">
            <rect strokeWidth="0" width="73" height="57" x="-72" y="112"></rect>
            <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
        </svg>
    </svg>
)

const HoverCard: React.FC<Props> = ({title, description, href = "#", Icon}) => {

    const divRef = useRef<HTMLDivElement>(null);

    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0
    });


    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            });
        }
    };


    return (
        <Card
            ref={divRef}
            onMouseMove={handleMouseMove}
            className="group relative flex not-prose">
            <div className="pointer-events-none">
                <div
                    className="absolute inset-0  z-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] ">
                    <SvgCard cn={cn("fill-black/[0.02] stroke-black/5 dark:fill-white/[0.02] dark:stroke-white/5")}/>
                </div>
                <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                    style={{
                        maskImage: `radial-gradient(180px at ${mousePosition.x + 'px'}  ${mousePosition.y + 'px'}, white, transparent)`
                    }}></div>
                <div
                    className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                    style={{
                        maskImage: `radial-gradient(180px at ${mousePosition.x + 'px'}  ${mousePosition.y + 'px'}, white, transparent)`
                    }}>
                    <SvgCard cn={cn("fill-black/50 stroke-black/70 dark:fill-white/5 dark:stroke-white/10")}/>
                </div>
            </div>
            <CardBody>
                <div className="relative rounded-2xl px-4 py-6">
                    {
                        Icon && (
                            <div
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                                <Icon className={"w-4"}/>
                            </div>
                        )
                    }
                    <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                        <a
                            href={href}>
                            <span className="absolute inset-0 rounded-2xl"></span>{title}
                        </a>
                    </h3>
                    {
                        description && (
                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
                        )
                    }

                </div>
            </CardBody>
        </Card>

    )
}

export default HoverCard;

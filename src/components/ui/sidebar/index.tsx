"use client";
import Link from "next/link";
import {Chip} from "@nextui-org/chip";
import {usePathname} from "next/navigation";
import {SidebarMenuSection} from "@/utils/static/sidebar";
import {cn} from "@/utils/cn";

type SidebarUIProps = {
    menu: SidebarMenuSection[];
    startPathname? : string;
};

export const SidebarUI = ({menu , startPathname = "/"}: SidebarUIProps) => {

    const pathname = usePathname();

    return (
        <div className="z-20 hidden md:block h-[calc(100vh-theme(space.16))] sticky top-16 w-[17.5rem] flex-shrink-0">
            <div className="flex flex-col py-2 gap-6">
                {
                    menu.map((section, index) => (
                        <div key={index}>
                            <h5 className="mb-2.5 font-semibold text-gray-900 dark:text-gray-200">{section.title}</h5>
                            <div className={"flex flex-col gap-1"}>
                                {section?.menus?.map((item, key) => (
                                    <Link className={"h-8 flex items-center"} key={key} href={item?.href}>
                                        <div
                                            className={cn("group w-full flex items-center  rounded-lg px-2 py-1.5  gap-3", {
                                                "bg-secondary-100/70 text-default-900": (item.href !== startPathname ? pathname.startsWith(item.href) : pathname === item.href),
                                                "hover:bg-default-100 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300": !pathname.startsWith(item.href) || !item.href,
                                            })}>


                                            {
                                                item?.method && (
                                                    <div className="flex items-center w-10">
                                                        <Chip size={"sm"}
                                                              variant={"flat"}
                                                              color={item.method === "get" ? "success" : item.method === "put" ? "warning" : item.method === "del" ? "danger" : "primary"}
                                                              classNames={{
                                                                  base: "uppercase px-0.5 py-0 h-4",
                                                                  content: "text-[0.6rem] py-0 font-medium py-0"
                                                              }}
                                                              radius={"sm"}>{item.method}</Chip>
                                                    </div>
                                                )
                                            }
                                            <span className={"text-sm"}>{item.title}</span>
                                        </div>

                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

"use client";
import Link from "next/link";
import classNames from "classnames";
import {Chip} from "@nextui-org/chip";
import {usePathname} from "next/navigation";

type MenuEntry = {
    title: string;
    href: string;
    method?: string;
    active? : boolean;
};
type MenuSection = {
    title: string;
    menus: MenuEntry[];
};

export const Sidebar = () => {

    const pathname = usePathname();
    const menu: MenuSection[] = [
        {
            title: "API Referansı",
            menus: [
                {
                    title: "Giriş",
                    href: "/",
                    active : pathname === "/",

                },
                {
                    title: "Oran Sınırları",
                    href: "/rate-limits",
                    active : pathname.startsWith("/rate-limits"),
                },
                {
                    title: "Hatalar",
                    href: "/errors",
                    active : pathname.startsWith("/errors"),
                }
            ]
        },
        {
            title: "Bağlantılar",
            menus: [
                {
                    title: "Yeni Bağlantı Oluştur",
                    href: "",
                    method: "post",
                },
                {
                    title: "Bağlantı Alma",
                    method: "get",
                    href: "",
                },
                {
                    title: "Bağlantıyı Düzenle",
                    method: "put",
                    href: "",
                },
                {
                    title: "Bağlantıyı Sil",
                    method: "del",
                    href: "",
                },
            ]
        }
    ]

    return (
        <div className="z-20 h-[calc(100vh-theme(space.16))] sticky top-16 w-[17.5rem] flex-shrink-0">

            <div className="flex flex-col py-2 gap-6">

                {
                    menu.map((menu, index) => (
                        <div key={index}>
                            <h5 className="mb-2.5 font-semibold text-gray-900 dark:text-gray-200">{menu.title}</h5>

                            <div className={"flex flex-col gap-1"}>
                                {menu?.menus?.map((item, key) => (
                                    <Link className={"h-8 flex items-center"} key={key} href={item?.href}>
                                        <div
                                            className={classNames("group w-full flex items-center  rounded-lg px-2 py-1.5  gap-3", {
                                                "bg-secondary-100/70 text-default-900" : item.active,
                                                "hover:bg-default-100 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" : !item.active,
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

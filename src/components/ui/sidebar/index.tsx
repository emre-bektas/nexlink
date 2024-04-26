"use client";
import Link from "next/link";
import {Chip} from "@nextui-org/chip";
import {usePathname} from "next/navigation";
import {findMenuIndexByHref, SidebarMenuSection} from "@/utils/static/sidebar";
import {cn} from "@/utils/cn";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/breadcrumbs";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/react";
import {ChevronDownIcon} from "@nextui-org/shared-icons";
import {Menu, XIcon} from "lucide-react";
import {useBoolean} from "usehooks-ts";

type SidebarUIProps = {
    menu: SidebarMenuSection[];
    startPathname?: string;
};

export const SidebarUI = ({menu, startPathname = "/"}: SidebarUIProps) => {

    const pathname = usePathname();

    const menuIndex = findMenuIndexByHref(menu, pathname);

    const getMenu = menu[menuIndex?.sectionIndex ?? 0];
    const getMenuChild = getMenu.menus[menuIndex?.menuIndex ?? 0];


    const {value, setTrue, setFalse} = useBoolean(false)

    return (

        <div className={"flex flex-col"}>
            <div className={"md:hidden h-14 flex items-center gap-3"}>
                <Button isIconOnly={true}
                        onClick={() => setTrue()}
                        variant={"bordered"} startContent={<Menu className={"w-5"}/>}/>
                {
                    (getMenu && getMenuChild) && (
                        <Breadcrumbs variant={"bordered"}>
                            <BreadcrumbItem
                                href={menu[menuIndex?.sectionIndex ?? 0].menus[0].href}>{getMenu.title}</BreadcrumbItem>
                            <BreadcrumbItem>
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button
                                            className="h-6 pr-2 text-small"
                                            endContent={<ChevronDownIcon className="text-default-500"/>}
                                            radius="full"
                                            size="sm"
                                            variant="light"
                                        >
                                            {getMenuChild?.title}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        selectionMode={"single"}
                                        selectedKeys={[getMenuChild?.href]}
                                        aria-label="Routes">
                                        {
                                            getMenu.menus.map((menu, index) => (
                                                <DropdownItem href={menu.href} key={menu.href}>
                                                    {menu.title}
                                                </DropdownItem>
                                            ))
                                        }
                                    </DropdownMenu>
                                </Dropdown>
                            </BreadcrumbItem>
                        </Breadcrumbs>
                    )
                }

            </div>


            <div
                className={cn(
                    "z-[99999] -left-full fixed top-2 ml-2 rounded-2xl shadow h-[calc(100dvh-theme(space.4))] w-[17.5rem] flex-shrink-0 transition-all bg-content1",
                    "md:block md:h-[calc(100vh-theme(space.16))] md:!sticky md:top-16 md:bg-transparent",
                    {
                        "left-0 px-4 py-2 signal": value
                    }
                )}>

                <div className="flex flex-col py-2 gap-6">
                    <div className="hidden md:hidden signal:flex items-center justify-between">
                        <h3 className={"text-base text-default-500 uppercase"}>Menü</h3>
                        <Button isIconOnly={true} onPress={setFalse} startContent={<XIcon className={"w-8"}/>}/>
                    </div>
                    {
                        menu.map((section, index) => (
                            <div key={index}>
                                <h5 className="mb-2.5 font-semibold text-gray-900 dark:text-gray-200">{section.title}</h5>
                                <div className={"flex flex-col gap-1"}>
                                    {section?.menus?.map((item, key) => (
                                        <Link className={"h-8 flex items-center"} onClick={() => setFalse()} key={key}
                                              href={item?.href}>
                                            <div
                                                className={cn("group w-full flex items-center  rounded-lg px-2 py-1.5  gap-3", {
                                                    "bg-secondary-100/70 text-default-900": (item.href !== startPathname ? pathname.startsWith(item.href) : pathname === item.href),
                                                    "hover:bg-default-100 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300": (item.href !== startPathname ? !pathname.startsWith(item.href) : pathname !== item.href) || !item.href,
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
            <div
                onClick={setFalse}
                className={cn(
                    "fixed top-0 left-0 w-full h-full backdrop-blur z-[999] md:hidden",
                    {
                        "hidden": !value
                    }
                )}>
            </div>
        </div>

    )
}

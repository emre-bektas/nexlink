"use client";
import {Avatar, Navbar, NavbarBrand, NavbarContent, Switch} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {MoonIcon, Search, SunMediumIcon} from "lucide-react";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Kbd} from "@nextui-org/kbd";

export const Header = () => {

    const {setTheme, resolvedTheme} = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        <Navbar classNames={{
            base: "bg-transparent ",
            wrapper: "px-4 sm:px-6 md:px-8 max-w-8xl"
        }}>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4 gap-3">
                    <p className="font-bold text-inherit">NexLink API Creations</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-sm h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    endContent={<Kbd keys={["command"]}>K</Kbd>}
                    placeholder="Hızlı Arama..."
                    size="sm"
                    startContent={<Search size={18}/>}
                    type="search"
                />
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform flex-shrink-0"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <div className={"w-14 flex-shrink-0"}>
                    {
                        mounted && (
                            <>
                                <Switch
                                    color="secondary"
                                    classNames={{
                                        thumbIcon: "w-4 h-4",
                                    }}
                                    defaultSelected={resolvedTheme == "dark"}
                                    onValueChange={(val) => {
                                        if (val) {
                                            setTheme("dark");
                                        } else {
                                            setTheme("light");
                                        }
                                    }}
                                    thumbIcon={({isSelected, className}) =>
                                        isSelected ? (
                                            <SunMediumIcon className={className}/>
                                        ) : (
                                            <MoonIcon className={className}/>
                                        )
                                    }
                                />
                            </>

                        )
                    }
                </div>
            </NavbarContent>
        </Navbar>
    )
}

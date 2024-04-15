"use client";
import {Avatar, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import {Search} from "lucide-react";
import {useTheme} from "next-themes";

export const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
        <Navbar  classNames={{
            wrapper : "px-4 sm:px-6 md:px-8 max-w-8xl"
        }} isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4 gap-3">
                    <p className="font-bold text-inherit">NexLink API Creations</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
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
                <button onClick={() => setTheme('light')}>Light Mode</button>
                <button onClick={() => setTheme('dark')}>Dark Mode</button>
            </NavbarContent>
        </Navbar>
    )
}

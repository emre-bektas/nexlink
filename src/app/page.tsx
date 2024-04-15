"use client";
import ProseComponent from "@/components/ui/prose";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";
import AnchorTitle from "@/components/ui/anchor-title";
import HoverCard from "@/components/ui/hover-card";

export default function Home() {
    return (
        <main className="flex-auto">
            <article className="flex h-full flex-col pb-10 pt-16">
                <header className="relative mb-4">
                    <div className="mt-0.5 space-y-2.5">
                        <div
                            className="h-5 text-primary dark:text-primary-light text-sm font-semibold">
                            Giriş
                        </div>
                        <div className="flex items-center">
                            <h1
                                className="inline-block text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">Create
                                a new link</h1>
                        </div>
                    </div>
                </header>

                <ProseComponent>
                    <p className="lead">Use the Protocol API to access contacts, conversations, group messages, and more
                        and seamlessly integrate your product into the workflows of dozens of devoted Protocol
                        users.</p>

                    <div className="not-prose mb-16 mt-6 flex gap-3">
                        <Button size={"sm"} color={"secondary"} radius={"full"}
                                variant={"flat"}
                                className={"font-medium"}
                                endContent={<ArrowRight className={"w-4"}/>}>
                            Hızlı Başlangıç
                        </Button>
                        <Button size={"sm"} radius={"full"}
                                variant={"flat"}
                                className={"font-medium"}
                        >
                            {"SDK'ları keşfedin"}
                        </Button>
                    </div>
                    <div className="my-16 xl:max-w-none">
                        <AnchorTitle id={"emre"}>Guides</AnchorTitle>
                        <div
                            className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-2 dark:border-white/5">
                            <div><h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Authentication</h3>
                                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Learn how to authenticate
                                    your API requests.</p>
                                <p className="mt-4"><a
                                    className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                                    href="/authentication">Read more
                                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                         className="mt-0.5 h-5 w-5 relative top-px -mr-1">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                                    </svg>
                                </a></p>
                            </div>
                            <div><h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Pagination</h3><p
                                className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Understand how to work with
                                paginated responses.</p>
                                <p className="mt-4"><a
                                    className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                                    href="/pagination">Read more
                                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                         className="mt-0.5 h-5 w-5 relative top-px -mr-1">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                                    </svg>
                                </a></p>
                            </div>
                            <div><h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Errors</h3><p
                                className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Read about the different types
                                of errors returned by the API.</p>
                                <p className="mt-4"><a
                                    className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                                    href="/errors">Read more
                                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                         className="mt-0.5 h-5 w-5 relative top-px -mr-1">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                                    </svg>
                                </a></p>
                            </div>
                            <div><h3 className="text-sm font-semibold text-zinc-900 dark:text-white">Webhooks</h3><p
                                className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Learn how to programmatically
                                configure webhooks for your app.</p>
                                <p className="mt-4"><a
                                    className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                                    href="/webhooks">Read more
                                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                         className="mt-0.5 h-5 w-5 relative top-px -mr-1">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"></path>
                                    </svg>
                                </a></p>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-5 w-full"}>
                        <HoverCard>Emre</HoverCard>
                        <HoverCard>Emre</HoverCard>
                        <HoverCard>Emre</HoverCard>
                        <HoverCard>Emre</HoverCard>
                    </div>
                </ProseComponent>
            </article>
        </main>
    );
}


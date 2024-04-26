"use client";
import ArticleHeader from "@/components/ui/article-header";
import ProseComponent from "@/components/ui/prose";
import CodeTabs from "@/components/ui/code-tabs";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {Input} from "@nextui-org/input";
import {Tooltip} from "@nextui-org/tooltip";
import {Info} from "lucide-react";
import React, {FC, JSX} from "react";
import AnchorTitle from "@/components/ui/anchor-title";
import {generateDynamicHighlightingRequest} from "@/utils/api";

interface APIEndpointConfiguration {
    key: string;
    sections: EndpointSection[];
}

interface EndpointSection {
    name: string;
    type?: string;
    key?: string;
    inputs: SectionInput[];
}


interface SectionInput {
    name: string;
    label: string;
    placeholder?: string;
    required: boolean;
    type: string;
    description?: string;
    startContent?: JSX.Element;
}


const APIEndpoints: APIEndpointConfiguration[] = [
    {
        key: "create-new-link",
        sections: [
            {
                name: "Authorization",
                key: "authorization",
                inputs: [
                    {
                        name: "Auth",
                        label: "Authorization",
                        placeholder: "Token Giriniz",
                        required: true,
                        type: "string",
                        description: "Default authentication mechanism",
                        startContent: <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-xs">Baerer</span>
                        </div>,
                    },
                ]
            },
            {
                name: "Body",
                key: "body",
                type: "application/json",
                inputs: [
                    {
                        name: "url",
                        label: "Link",
                        placeholder: "Kısaltılacak linkinizi giriniz.",
                        required: true,
                        type: "string",
                        description: "Default authentication mechanism",
                    },
                ]
            }
        ]

    }
]


interface TooltipContentProps {
    input: SectionInput,
}

const TooltipContent: FC<TooltipContentProps> = ({input}) => {
    return (
        <div className={"max-w-xs"}>
            <div className={"flex items-center justify-between gap-3 py-2 px-3 border-b border-default-100"}>
                <h3 className={"text-base  text-default-800"}>{input.label}</h3>
                <div className={"flex items-center gap-2"}>
                    {
                        input.required && <Chip size={"sm"} radius={"sm"} color={"danger"}>Zorunlu</Chip>
                    }
                    <Chip size={"sm"} variant={"flat"} radius={"sm"}>{input.type}</Chip>
                </div>
            </div>
            <div className={"py-3 px-3"}>
                <p className={"text-default-700"}>{input.description}</p>
            </div>
        </div>
    )
}

const TooltipIcon: FC<TooltipContentProps> = ({input}) => (
    <Tooltip content={<TooltipContent input={input}/>} classNames={{
        content: "px-0"
    }}>
        <Button size={"sm"} className={"min-w-6 w-6 h-6"} isIconOnly startContent={<Info className={"w-4"}/>}></Button>
    </Tooltip>
)


export default function page() {
    return (
        <div className="flex flex-row items-stretch gap-12">
            <div className={"relative grow mx-auto "}>
                <ArticleHeader title={"Yeni Bağlantı Oluştur"} subtitle={"Bağlantılar"}/>

                <ProseComponent>
                    <p className="lead">Kimliği doğrulanmış çalışma alanı için yeni bir bağlantı oluşturun.</p>


                    <Card classNames={{
                        header: "gap-3 pb-0"
                    }}>
                        <CardHeader>
                            <div
                                className={"flex-1 h-12 border border-default-100 px-3 gap-3 flex items-center rounded-xl"}>
                                <Chip color={"primary"} size={"sm"}>POST</Chip>
                                <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                                <span className={"line-clamp-1 text-default-500 text-sm"}>/v1/conversations</span>
                            </div>

                            <Button color={"primary"}>Gönder</Button>

                        </CardHeader>
                        <CardBody>

                            <Accordion className={"not-prose"} itemClasses={{
                                content: "px-1 gap-3 flex flex-col"
                            }} variant="splitted" defaultExpandedKeys={["0"]}>

                                {
                                    APIEndpoints[0].sections.map((item, key) => (
                                        <AccordionItem key={key} aria-label={item.name} title={item.name}
                                                       className={"px-6"}>
                                            {
                                                item.inputs.map((input, k) => (
                                                    <Input
                                                        key={k}
                                                        variant={"faded"}
                                                        isRequired={input.required}
                                                        classNames={{
                                                            input: "text-xs"
                                                        }}
                                                        startContent={input.startContent}
                                                        endContent={<TooltipIcon input={input}/>}
                                                        label={input.label}
                                                        placeholder={input.placeholder}/>
                                                ))
                                            }

                                        </AccordionItem>
                                    ))
                                }
                            </Accordion>

                        </CardBody>
                    </Card>


                    {

                        APIEndpoints[0].sections.map((item, key) => (
                            <div key={key}>
                                <AnchorTitle id={item.key}>{item.name}</AnchorTitle>

                                <div className="my-6">
                                    <div>
                                        {
                                            item.inputs.map((input, k) => (
                                                <div
                                                    key={k}
                                                    className="py-6 first:pt-0 border-zinc-900/5 pb-4 dark:border-white/5 border-b last:border-b-0">
                                                    <div className="flex font-mono text-sm">
                                                        <div className="flex-1 flex content-start py-0.5 mr-5">
                                                            <div className="flex items-center flex-wrap gap-2">
                                                                <div
                                                                    className="font-bold text-secondary">{input.name}</div>
                                                                <div
                                                                    className="flex items-center space-x-2 text-xs font-medium">
                                                                    <div
                                                                        className="px-2 py-0.5 rounded-md bg-gray-100/50 dark:bg-white/5 text-gray-600 dark:text-gray-200">{input.type}
                                                                    </div>
                                                                    {
                                                                        input.required && (
                                                                            <span
                                                                                className="px-2 py-0.5 rounded-md bg-red-100/50 dark:bg-red-400/10 text-red-600 dark:text-red-300">zorunlu</span>
                                                                        )
                                                                    }

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div
                                                            className="prose prose-sm prose-gray dark:prose-invert">
                                                            <p>{input.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </ProseComponent>
            </div>
            <div className={"hidden xl:flex self-start sticky h-[calc(100vh-8rem-1rem)] top-20 "}>
                <div
                    className={"w-[28rem] gap-6 grid grid-rows-[repeat(auto-fit,minmax(0,min-content))] grid-rows min-w-0"}>
                    <CodeTabs
                        tabs={[
                            {
                                key: "base-url",
                                title: "Temel URL",
                                language: "bash",
                                content: generateDynamicHighlightingRequest()
                            },
                        ]}
                        syntaxHighlighter={{

                        }}
                    />
                    <CodeTabs
                        tabs={[
                            {
                                key: "base-url",
                                title: "Temel URL",
                                language: "http",
                                content: "https://localhost:3000/api/"
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

"use client";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark, a11yLight} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {useTheme} from "next-themes";
import {Tab, Tabs} from "@nextui-org/tabs";
import {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {Copy} from "lucide-react";
import {Tooltip} from "@nextui-org/tooltip";
import {useCopyToClipboard} from "usehooks-ts";


interface CodeTab {
    key: string;
    title?: string;
    language?: string;
    content: string;
}

interface CodeTabsProps {
    tabs: CodeTab[],
    isShowTab?: boolean,
}


const CodeTabs = ({tabs, isShowTab = true}: CodeTabsProps) => {

    const {resolvedTheme} = useTheme();
    const [copiedText, copy] = useCopyToClipboard()

    const [selected, setSelected] = useState<any>(tabs[0].key)
    const [style, setStyle] = useState(a11yLight)

    useEffect(() => {
        if (resolvedTheme === "dark") {
            setStyle(a11yDark)
        } else {
            setStyle(a11yLight)
        }
    }, [resolvedTheme]);

    const seletedTab: CodeTab = tabs?.filter(i => i.key === selected)[0];

    const handleCopy = (text: string) => () => {
        copy(text)
            .then(() => {
                console.log('Copied!', {text})
            })
            .catch(error => {
                console.error('Failed to copy!', error)
            })
    }

    const CopyButton = () => (
        <Tooltip content={"Kopyala"}>

            <Button startContent={<Copy className={"w-4 text-secondary-600"}/>}
                    isIconOnly={true}
                    variant={"flat"}
                    onPress={handleCopy(seletedTab?.content)}
                    size={"sm"}/>
        </Tooltip>
    )



    return (
        <div className="not-prose">
            <Card >
                {
                    isShowTab ? (
                        <CardHeader
                            className="border-b border-default-200 dark:border-default-100 justify-between gap-1 py-0">

                            <Tabs variant={"underlined"}
                                  aria-label="Code Tabs"
                                  selectedKey={selected}
                                  color={"secondary"}
                                  onSelectionChange={setSelected}
                                  classNames={{
                                      tabList: "p-0",
                                      tab: "py-0 h-11",
                                  }}>
                                {
                                    tabs.map(item => (
                                        <Tab key={item.key} title={item.title}/>
                                    ))
                                }

                            </Tabs>

                            <CopyButton />

                        </CardHeader>
                    ) : (
                        <>
                            <div className={"absolute top-4 right-4 z-10"}>
                                <CopyButton />
                            </div>
                        </>
                    )
                }
                <CardBody>
                    {
                        seletedTab?.content && (
                            <SyntaxHighlighter
                                customStyle={{
                                    background: "transparent",
                                    fontSize: ".92rem",
                                    fontWeight: "lighter"
                                }}
                                language={seletedTab.language ?? "javascript"}
                                style={style}>
                                {seletedTab?.content}
                            </SyntaxHighlighter>
                        )
                    }


                </CardBody>
            </Card>
        </div>
    )
}

export default CodeTabs;

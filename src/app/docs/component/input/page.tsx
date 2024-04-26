"use client";
import "@/ui/input/index.css"
import ArticleHeader from "@/components/ui/article-header";
import ProseComponent from "@/components/ui/prose";
import CodeTabs from "@/components/ui/code-tabs";
import AnchorTitle from "@/components/ui/anchor-title";
import {inputDocs} from "@/ui/input/input-docs";

export default function page() {


    return (
        <>
            <ArticleHeader title={"Input"} subtitle={"Bileşen"}/>
            <ProseComponent>
                <p className={"lead"}>
                    Input, kullanıcıların metin girmelerine olanak tanıyan bir bileşendir. Formlarda, arama alanlarında
                    ve daha fazlasında kullanıcı girdilerini almak için kullanılabilir.
                </p>
                <div className={"space-y-4"}>
                    <AnchorTitle id={"usage"}>Kullanımı</AnchorTitle>
                    {
                        inputDocs.map((item, i) => (
                            <div key={i}>
                                {
                                    item.title && (
                                        <AnchorTitle id={item.key} as={"h3"}>{item.title}</AnchorTitle>
                                    )
                                }
                                <CodeTabs
                                    tabs={[
                                        {
                                            key: "preview-button",
                                            title: "Önizleme",
                                            html: true,
                                            content: item.code,
                                        },
                                        {
                                            key: "preview-code",
                                            title: "HTML Kodu",
                                            language: "htmlbars",
                                            content: item.code,
                                        },
                                    ]}
                                />
                            </div>
                        ))
                    }

                </div>


            </ProseComponent>
        </>

    )
}
